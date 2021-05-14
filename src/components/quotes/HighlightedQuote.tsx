import classes from "./HighlightedQuote.module.css";
type Props = {
  text: string;
  author: string;
};
const HighlightedQuote = (props: Props) => {
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
