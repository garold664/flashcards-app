import { useContext, useRef, useState } from 'react';
import { FlashCardsContext } from '../context/flashcards-context';

import classes from './FlashCard.module.css';

const FlashCardView = (props) => {
  const termRef = useRef();
  const defRef = useRef();
  const flashcardsCtx = useContext(FlashCardsContext);
  const [cardId, setCardId] = useState(null);

  const addFlashcard = (event) => {
    event.preventDefault();
    if (props.tempId) {
      setCardId(props.tempId);
    }
    if (!cardId) {
      setCardId(Math.random());
    } else {
      flashcardsCtx.addFlashcard(
        termRef.current.value,
        defRef.current.value,
        cardId
      );
    }
  };
  return (
    <div className={classes.flashcard}>
      <p>{props.term}</p>
      <p>{props.def}</p>
      {/* <input
        ref={termRef}
        type="text"
        name="term"
        id="term"
        placeholder="Enter Term"
        defaultValue={props.term}
      /> */}

      {/* <label htmlFor="definition">Definition</label>
      <input
        ref={defRef}
        type="text"
        name="definition"
        id="definition"
        placeholder="Enter Definition"
        defaultValue={props.def}
      /> */}
      <p>{props.tempId ? props.tempId : props.id}</p>
    </div>
  );
};

export default FlashCardView;
