import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  border: 1px solid #ebebeb;
  border-radius: 3.14px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    box-shadow: 0 2px 7px #f1f0f0;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-grow: 1;
  margin-left: 10px;
  padding: 0.4rem;
`;

export const Avatar = styled.div`
  width: 100px;
  min-width: 100px;
`;

export const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const RepoName = styled.h1`
  font-size: 1.5rem;
  line-height: 1;
`;
export const RepoDescription = styled.p`
  padding: 0.7rem 0;
`;

export const Bold = styled.span`
  font-weight: 700;
  padding: 0 5px;
`;

export const RepoStatics = styled.div`
  padding-bottom: 0.5rem;
`;
export const Label = styled.span`
  margin-right: 16px;
  border-radius: 25px;
  padding: 1px 8px;
  font-size: 0.9rem;
`;
export const RepoStars = styled(Label)`
  background-color: #1a73e896;
`;

export const RepoIssues = styled(Label)`
  background-color: #feefc3;
`;
