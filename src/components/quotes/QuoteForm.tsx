import { FormEventHandler, useRef } from "react";
import NewQuote from "../../pages/NewQuote";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

type Props = {
  onAddQuote: (arg0: NewQuote) => void;
  isLoading: boolean;
};

const QuoteForm = (props: Props) => {
  const authorInputRef = useRef<HTMLInputElement | null>(null);
  const textInputRef = useRef<HTMLTextAreaElement | null>(null);

  const submitFormHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current!.value;
    const enteredText = textInputRef.current!.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor="author">Author</label>
          <input required type="text" id="author" ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="text">Text</label>
          <textarea required id="text" rows={5} ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className="btn">Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
