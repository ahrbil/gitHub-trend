import React from "react";
import { FixedHeader, HeaderContainer } from "./style";

const Header = () => (
  <HeaderContainer>
    <FixedHeader>
      <h1>
        What is
        <span role="img" aria-label="fire emoji">
          🔥
        </span>
        on gitHub
      </h1>
    </FixedHeader>
  </HeaderContainer>
);
export default Header;
