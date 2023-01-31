import { useContext, useRef } from 'react';
import { FlashCardsContext } from '../context/flashcards-context';

import classes from './FlashCard.module.css';

const FlashCard = (props) => {
  console.log('FLASHCARD RENDER');
  const termRef = useRef();
  const defRef = useRef();
  const flashcardsCtx = useContext(FlashCardsContext);
  // const [cardId, setCardId] = useState(null);

  const addFlashcard = (event) => {
    event.preventDefault();
    // if (props.tempId) {
    //   setCardId(props.tempId);
    // }
    // if (!cardId) {
    //   console.log(cardId);
    //   setCardId(Math.random());
    // } else {
    //   flashcardsCtx.addFlashcard(
    //     termRef.current.value,
    //     defRef.current.value,
    //     cardId
    //   );
    // }
    if (
      termRef.current.value.trim() === '' ||
      defRef.current.value.trim() === ''
    ) {
      return;
    }

    if (!props.id) {
      // setCardId(Math.random());
      flashcardsCtx.addFlashcard(
        termRef.current.value,
        defRef.current.value,
        Math.random()
      );
    } else {
      // setCardId(props.id);
      flashcardsCtx.addFlashcard(
        termRef.current.value,
        defRef.current.value,
        props.id
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
