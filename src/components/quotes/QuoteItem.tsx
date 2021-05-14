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
      <a className="btn">View Fullscreen</a>
    </li>
  );
};

export default QuoteItem;
