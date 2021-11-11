import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Layout from "../components/Layout";
import { User, Detail, Materiel, PageNotFound } from "../Pages";

function Routes() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Materiel} />
          <Route path="/detail" component={Detail} />
          <Route path="/user" component={User} />
          <Route path="/oops" component={PageNotFound} />
          <Redirect to="/oops" />
        </Switch>
      </Layout>
    </Router>
  );
}

export default Routes;
