import React from "react";

import "./App.css";
import { Repositories } from "./pages";
import { Container } from "./components/style";
import Header from "./components/header";

const App = () => (
  <Container>
    <Header />
    <Repositories />
  </Container>
);

export default App;
