import { useEffect } from "react";
import { Route, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import NotFound from "./NotFound";

const QuoteDetail = () => {
  const params = useParams<{ quoteId: string }>();
  const { path, url } = useRouteMatch();
  const {
    status,
    sendRequest,
    error,
    data: loadedQuote,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(params.quoteId);
  }, [sendRequest, params.quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="focused centered">{error}</p>;
  }
  if (status === "completed" && !loadedQuote) {
    return <NotFound />;
  }
  if (!loadedQuote) return <NotFound />;

  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={`${path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
