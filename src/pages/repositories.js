import React from "react";

import { CardsList } from "../components/style";
import RepositoryCard from "../components/repository";
import { getDateBefore } from "../utils";

class Repositories extends React.Component {
  state = {
    reposList: []
  };

  getRepositories = async () => {
    const date = getDateBefore(30);
    let url = `https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc`;
    const results = await fetch(url);
    const resultsToJson = await results.json();
    const reposList = resultsToJson.items.map(repo => {
      // returning the date we need to state
      // instead of pass all the properties gitHub gives us
      return {
        id: repo.id,
        name: repo.name,
        description: repo.description ? repo.description : "",
        starsCount: repo.stargazers_count,
        issuesCount: repo.open_issues,
        owner: repo.owner.login,
        ownerUrl: repo.owner.html_url,
        avatar: repo.owner.avatar_url,
        createdAt: repo.created_at
      };
    });
    return reposList;
  };

  handleScroll = () => {
    console.log("windowHeight", window.innerHeight);
  };

  componentDidMount = async () => {
    const reposList = await this.getRepositories();
    this.setState({ reposList });
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  render() {
    const { reposList } = this.state;
    if (reposList) {
      return (
        <CardsList>
          {reposList.map(repoItem => (
            <RepositoryCard key={repoItem.id} {...repoItem} />
          ))}
        </CardsList>
      );
    }
  }
}

export default Repositories;
