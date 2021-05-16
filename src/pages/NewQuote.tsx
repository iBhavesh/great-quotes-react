import { useHistory } from "react-router";
import QuoteForm from "../components/quotes/QuoteForm";

export type NQ = {
  author: string;
  text: string;
};

const NewQuote = () => {
  const history = useHistory();
  const addQuoteHandler = (data: NQ) => {
    console.log(data);
    history.push("/quotes");
  };
  return <QuoteForm isLoading={false} onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
