import QuoteForm from "../components/quotes/QuoteForm";

type NewQuote = {
  author: string;
  text: string;
};

const NewQuote = () => {
  const addQuoteHandler = (data: NewQuote) => {
    console.log(data);
  };
  return <QuoteForm isLoading={false} onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
