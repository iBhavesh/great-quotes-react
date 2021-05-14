import classes from "./CommentItem.module.css";

type Props = {
  text: string;
};

const CommentItem = (props: Props) => {
  return (
    <li className={classes.item}>
      <p>{props.text}</p>
    </li>
  );
};

export default CommentItem;
