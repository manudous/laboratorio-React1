import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ListPage } from "./screen/list/list-container.style";
import { DetailPage } from "./screen/detail/detail-container";
import { Header } from "./screen/header/header-container";

export const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <ListPage />
          </Route>
          <Route path="/detail/:id">
            <DetailPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
