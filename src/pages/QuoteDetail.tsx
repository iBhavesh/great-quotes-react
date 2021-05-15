import { Route, useParams } from "react-router";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import { DUMMY_QUOTES } from "./AllQuotes";
import NotFound from "./NotFound";

const QuoteDetail = () => {
  const params = useParams<{ quoteId: string }>();
  const quote = DUMMY_QUOTES.find((item) => item.id === params.quoteId);

  if (!quote) {
    return <NotFound />;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path="/quotes/:quoteId/:comments">
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
