import React from "react";
import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import Layout from "./components/layout/Layout";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import Quotes from "./pages/AllQuotes";
import NotFound from "./pages/NotFound";

function App() {
  console.log(process.env.PUBLIC_URL);

  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Redirect to="/quotes" />
        </Route>
        <Route exact path="/quotes">
          <Quotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
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
