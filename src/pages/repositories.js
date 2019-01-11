import React from "react";

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
        <div>
          {reposList.map(repoItem => (
            <div key={repoItem.id}>
              <img src={repoItem.avatar} alt={repoItem.owner} />
              <h1>{repoItem.name}</h1>
              <p>{repoItem.description}</p>
              <span>{repoItem.starsCount}</span>
              <span>{repoItem.issuesCount}</span>
              <span>
                created {repoItem.createdAt} by {repoItem.owner}
              </span>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default Repositories;
