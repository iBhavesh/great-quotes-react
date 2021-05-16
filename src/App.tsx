import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router";
import "./App.css";
import Layout from "./components/layout/Layout";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import Quotes from "./pages/AllQuotes";
import NotFound from "./pages/NotFound";

function App() {
  let { url } = useRouteMatch();
  if (url === "/") {
    url = "";
  }

  return (
    <Layout>
      <Switch>
        <Route exact path={url + "/"}>
          <Redirect to={url + "quotes"} />
        </Route>
        <Route exact path={url + "/quotes"}>
          <Quotes />
        </Route>
        <Route path={url + "/quotes/:quoteId"}>
          <QuoteDetail />
        </Route>
        <Route path={url + "/new-quote"}>
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
