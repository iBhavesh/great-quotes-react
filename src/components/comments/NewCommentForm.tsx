import { FormEventHandler, useEffect, useRef } from "react";
import useHttp from "../../hooks/use-http";
import { addComment } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

import classes from "./NewCommentForm.module.css";

type Props = {
  quoteId: string;
  onAddedComment: () => void;
};

const NewCommentForm = ({ onAddedComment, quoteId }: Props) => {
  const commentTextRef = useRef<HTMLTextAreaElement | null>(null);
  const { sendRequest, status, error } = useHttp(addComment);

  const submitFormHandler: FormEventHandler = (event) => {
    event.preventDefault();
    const enteredText = commentTextRef.current!.value;
    sendRequest({ commentData: { text: enteredText }, quoteId });
  };

  useEffect(() => {
    if (status === "completed" && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === "pending" && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows={5} ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
