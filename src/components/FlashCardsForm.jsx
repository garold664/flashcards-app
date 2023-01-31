import { useContext, useRef } from 'react';
import { FlashCardsContext } from '../context/flashcards-context';

const FlashCardsForm = () => {
  const termRef = useRef();
  const defRef = useRef();
  const flashcardsCtx = useContext(FlashCardsContext);

  const addFlashcard = (event) => {
    event.preventDefault();
    flashcardsCtx.addFlashcard(termRef.current.value, defRef.current.value);
  };

  return (
    <form onSubmit={addFlashcard}>
      <label htmlFor="term">Term</label>
      <input ref={termRef} type="text" name="term" id="term" />

      <label htmlFor="definition">Definition</label>
      <input ref={defRef} type="text" name="definition" id="definition" />
      <button>Add new flashcard</button>
    </form>
  );
};

export default FlashCardsForm;
