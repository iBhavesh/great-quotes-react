import { FormEventHandler, useRef, useState } from "react";
import { Prompt } from "react-router";
import { NQ } from "../../pages/NewQuote";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

type Props = {
  onAddQuote: (arg0: NQ) => void;
  isLoading: boolean;
};

const QuoteForm = (props: Props) => {
  const [isBlocking, setIsBlocking] = useState(false);
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
    <>
      <Prompt
        when={isBlocking}
        message={() =>
          "Are you sure you want to leave this page? All your data will be lost!"
        }
      />
      <Card>
        <form
          className={classes.form}
          onFocus={() => setIsBlocking(true)}
          onSubmit={submitFormHandler}
        >
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
            <button onClick={() => setIsBlocking(false)} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
