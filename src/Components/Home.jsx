import React from "react";
import { Route, Switch } from "react-router";
import Header from "./Header";
import About from "./About";

export default function Home() {
  return (
    <div className="homepage">
      <Header />
      <h1>HOMEPAGE HERE</h1>
      <Switch>
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
}
