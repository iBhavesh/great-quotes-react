import { useEffect } from "react";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

export const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Mahatma Gandhi",
    text: "An eye for an eye makes the whole world blind",
  },
  {
    id: "q2",
    author: "Zakir",
    text: "Everyone is hero in their own story.",
  },
  {
    id: "q3",
    author: "Albert Einstein",
    text: "If you want to live a happy life, tie it to a goal, not to people or things.",
  },
];

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    <div className="centered">
      <LoadingSpinner />
    </div>;
  }
  if (error) {
    return <p className="focused centered">{error}</p>;
  }
  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }
  if (!loadedQuotes) return <NoQuotesFound />;

  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
