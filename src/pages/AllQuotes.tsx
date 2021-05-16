import QuoteList from "../components/quotes/QuoteList";

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
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
