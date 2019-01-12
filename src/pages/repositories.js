import React from "react";

import { CardsList, Loader } from "../components/style";
import RepositoryCard from "../components/repository";
import { getDateBefore } from "../utils";

class Repositories extends React.Component {
  state = {
    reposList: [],
    loading: true,
    page: 1,
    hasMore: true
  };
  // getting the reference to cardsList
  cardsList = React.createRef();

  getRepositories = async () => {
    const date = getDateBefore(30);
    const { page, reposList } = this.state;
    let url = `https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc&page=${page}`;
    const results = await fetch(url);
    const resultsToJson = await results.json();
    const newReposList =
      resultsToJson.items &&
      resultsToJson.items.map(repo => {
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
    // check if we reach the limit of pages
    const hasMore = page < 2;
    // adding new repos to the state and setting loading to false
    this.setState({
      loading: false,
      hasMore,
      reposList: [...reposList, ...newReposList]
    });
  };

  handleScroll = () => {
    const { loading, page, hasMore } = this.state;
    // getting the page offset
    const pageOffset = window.pageYOffset + window.innerHeight;
    // accessing the cardList reference
    const cardListElm = this.cardsList.current;
    // getting the height of cardsList
    const cardListElmHeight = cardListElm.clientHeight + cardListElm.offsetTop;
    // check if we reached the position where we want to start fetching new repos
    const isReachedPositionToFetch = pageOffset >= cardListElmHeight - 700;
    // if not loading and we have more pages
    // and we reached the scroll position to fetch
    if (!loading && hasMore && isReachedPositionToFetch) {
      this.setState(
        {
          page: page + 1,
          loading: true
        },
        this.getRepositories
      );
    }
  };

  componentDidMount = () => {
    // when component mounts fetch repos
    // add an event listener to window and call handleScroll func
    this.getRepositories();
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    // when component willUnmount unsubscribe to the scroll event
    window.removeEventListener("scroll", this.handleScroll);
  };

  render() {
    const { reposList, loading, hasMore } = this.state;
    if (reposList) {
      return (
        <CardsList ref={this.cardsList}>
          {reposList.map(repoItem => (
            <RepositoryCard key={repoItem.id} {...repoItem} />
          ))}
          {/* if loading return a loading indicator */}
          {loading && (
            <Loader>
              <span role="img" aria-label="loading indicator">
                🔄
              </span>
            </Loader>
          )}
          {!hasMore && (
            <span style={{ textAlign: "center" }}>You got all the results</span>
          )}
        </CardsList>
      );
    }
  }
}

export default Repositories;
