import React from "react";
import PropTypes from "prop-types";

import {
  CardContainer,
  Avatar,
  CardContent,
  AvatarImg,
  RepoName,
  RepoDescription,
  RepoStatics,
  RepoStars,
  Bold,
  RepoIssues
} from "./style";

const RepositoryCard = ({
  avatar,
  name,
  description,
  starsCount,
  issuesCount,
  owner,
  ownerUrl,
  createdAt
}) => (
  <CardContainer>
    <Avatar>
      <AvatarImg src={avatar} alt={name} />
    </Avatar>
    <CardContent>
      <RepoName>{name}</RepoName>
      <RepoDescription>{description}</RepoDescription>
      <RepoStatics>
        <RepoStars>
          Stars
          <Bold>{starsCount}</Bold>
        </RepoStars>
        <RepoIssues>
          Issues
          <Bold>{issuesCount}</Bold>
        </RepoIssues>
        <span>
          Submitted {createdAt} by <a href={ownerUrl}>{owner}</a>
        </span>
      </RepoStatics>
    </CardContent>
  </CardContainer>
);

export default RepositoryCard;

RepositoryCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  starsCount: PropTypes.string.isRequired,
  issuesCount: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  ownerUrl: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
};
