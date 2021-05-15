import { Link } from "react-router-dom";
import classes from "./QuoteItem.module.css";

type Props = {
  id: string;
  text: string;
  author: string;
};

const QuoteItem = (props: Props) => {
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
