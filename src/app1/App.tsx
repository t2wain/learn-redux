import * as React from "react";
import { Provider } from "react-redux";
import Container from "react-bootstrap/Container";
import configureStore from "../store/store";
import Counter from "./components/counter/counter";
import ListAdd from "./components/list/list-add";
import TopNav from "./components/app-nav";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function App() {
  return (
    <Provider store={configureStore()}>
      <TopNav />
      <Container fluid className="app">
        <Counter />
        <ListAdd />
      </Container>
    </Provider>
  );
}
