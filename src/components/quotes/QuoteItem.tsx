import { Link } from "react-router-dom";
import { QuoteWithId } from "../../helpers/types";
import classes from "./QuoteItem.module.css";

const QuoteItem = (props: QuoteWithId) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link to={`/quotes/${props.id}`} className="btn">
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
