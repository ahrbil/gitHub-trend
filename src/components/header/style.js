import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 70px;
`;

export const FixedHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: #1d1c1c;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    color: white;
    font-size: 1.3rem;
  }
  span {
    margin: 0 5px;
  }
`;
