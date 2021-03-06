import styled from "styled-components";

// styled-components allows us to define our styles as components
export const Container = styled.div`
  max-width: 780px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const CardsList = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-row-gap: 25px;
  padding-bottom: 1rem;
`;

export const Loader = styled.span`
  display: block;
  height: 40px;
  margin: 0 auto;
  font-size: 2rem;
`;
