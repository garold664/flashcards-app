import classes from './FlashCard.module.css';

const FlashCardView = (props) => {
  return (
    <div className={classes.flashcard}>
      <p>{props.term}</p>
      <p>{props.def}</p>

      <p>{props.tempId ? props.tempId : props.id}</p>
    </div>
  );
};

export default FlashCardView;
