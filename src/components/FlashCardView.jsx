import classes from './FlashCardView.module.css';

const FlashCardView = (props) => {
  return (
    <div className={classes.flashcard}>
      <div className={classes.flashcardFront}>
        <p>{props.term}</p>
      </div>
      <div className={classes.flashcardBack}>
        <p>{props.def}</p>
        <p>{props.tempId ? props.tempId : props.id}</p>
      </div>
    </div>
  );
};

export default FlashCardView;
