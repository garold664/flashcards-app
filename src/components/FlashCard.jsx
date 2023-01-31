import { useRef } from 'react';

import { useDispatch } from 'react-redux';
import { flashActions } from '../store/flashcards';

import classes from './FlashCard.module.css';

const FlashCard = (props) => {
  const termRef = useRef();
  const defRef = useRef();

  const dispatch = useDispatch();

  const addFlashcard = (event) => {
    event.preventDefault();

    if (
      termRef.current.value.trim() === '' ||
      defRef.current.value.trim() === ''
    ) {
      return;
    }

    if (!props.id) {
      dispatch(
        flashActions.createFlashcard({
          term: termRef.current.value,
          def: defRef.current.value,
          id: Math.random(),
        })
      );
    } else {
      dispatch(
        flashActions.createFlashcard({
          term: termRef.current.value,
          def: defRef.current.value,
          id: props.id,
        })
      );
    }
  };
  return (
    <form onBlur={addFlashcard} className={classes.flashcard}>
      <label htmlFor="term">Term</label>
      <input
        ref={termRef}
        type="text"
        name="term"
        id="term"
        placeholder="Enter Term"
        defaultValue={props.term}
      />

      <label htmlFor="definition">Definition</label>
      <input
        ref={defRef}
        type="text"
        name="definition"
        id="definition"
        placeholder="Enter Definition"
        defaultValue={props.def}
      />
      <p>{props.tempId ? props.tempId : props.id}</p>
    </form>
  );
};

export default FlashCard;
