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
import { getTimeInterval } from "../../utils";

const RepositoryCard = ({
  avatar,
  name,
  description,
  starsCount,
  issuesCount,
  owner,
  ownerUrl,
  createdAt
}) => {
  const timeInterval = getTimeInterval(createdAt);
  return (
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
            {`Submitted ${timeInterval} by `}
            <a href={ownerUrl}>{owner}</a>
          </span>
        </RepoStatics>
      </CardContent>
    </CardContainer>
  );
};

export default RepositoryCard;

RepositoryCard.defaultProps = {
  description: ""
};
RepositoryCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  starsCount: PropTypes.number.isRequired,
  issuesCount: PropTypes.number.isRequired,
  owner: PropTypes.string.isRequired,
  ownerUrl: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
};
