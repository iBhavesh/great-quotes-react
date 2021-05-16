import { Route, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import { DUMMY_QUOTES } from "./AllQuotes";
import NotFound from "./NotFound";

const QuoteDetail = () => {
  const params = useParams<{ quoteId: string }>();
  const quote = DUMMY_QUOTES.find((item) => item.id === params.quoteId);
  const { path, url } = useRouteMatch();

  if (!quote) {
    return <NotFound />;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
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
