import { useContext, useEffect, useState } from 'react';
import { FlashCardsContext } from '../context/flashcards-context';
import FlashCard from './FlashCard';

const FlashCards = () => {
  const flashcardsCtx = useContext(FlashCardsContext);
  const [numberOfCards, setNumberOfCards] = useState(1);
  // let additionalNumberOfCards = 5;
  let additionalFlashcards = [];

  const addFlashcardsForm = () => {
    setNumberOfCards((prevNum) => prevNum + 1);
    console.log(numberOfCards);
  };

  if (flashcardsCtx.flashcards.length > numberOfCards) {
    setNumberOfCards(flashcardsCtx.flashcards.length);
  }

  for (let i = 0; i < numberOfCards; i++) {
    if (i >= flashcardsCtx.flashcards.length) {
      additionalFlashcards.push(
        <FlashCard term="" def="" key={i} tempId={i} />
      );
    } else {
      additionalFlashcards.push(
        <FlashCard
          term={flashcardsCtx.flashcards[i].term}
          def={flashcardsCtx.flashcards[i].def}
          key={flashcardsCtx.flashcards[i].id}
          tempId={null}
          id={flashcardsCtx.flashcards[i].id}
        />
      );
    }
  }

  return (
    <>
      <ul>{additionalFlashcards}</ul>
      <button onClick={addFlashcardsForm}>+</button>
    </>
  );
};

export default FlashCards;
