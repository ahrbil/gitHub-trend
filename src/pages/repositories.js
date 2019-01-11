import React from "react";

import { CardsList } from "../components/style";
import RepositoryCard from "../components/repository";
class Repositories extends React.Component {
  state = {
    reposList: []
  };

  getRepositories = async () => {
    let url = `https://api.github.com/search/repositories?q=created:>2018-12-01&sort=stars&order=desc`;
    const results = await fetch(url);
    const resultsToJson = await results.json();
    const reposList = resultsToJson.items.map(repo => {
      // returning the date we need to state
      // instead of pass all the properties gitHub gives us
      return {
        id: repo.id,
        name: repo.name,
        description: repo.description,
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

  componentDidMount = async () => {
    const reposList = await this.getRepositories();
    this.setState({ reposList });
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
