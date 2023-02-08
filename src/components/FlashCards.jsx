import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import queryString from 'query-string';

// import { flashActions } from '../store/flashcards';

import FlashCard from './FlashCard';

const FlashCards = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const sets = useSelector((state) => state.flash.sets);
  const [numberOfCards, setNumberOfCards] = useState(1);

  if (sets.length === 0) {
    return;
  }

  const id = query.id;

  const set = sets.find((el) => el.id === query.id);
  console.log(set);
  // const flashcards = useSelector((state) => state.flash.flashcards);
  let flashcards = set.flashcards;

  if (!flashcards) {
    flashcards = [];
  }

  let additionalFlashcards = [];

  const addFlashcardsForm = () => {
    setNumberOfCards((prevNum) => prevNum + 1);
    console.log(numberOfCards);
  };

  if (flashcards.length > numberOfCards) {
    setNumberOfCards(flashcards.length);
  }

  for (let i = 0; i < numberOfCards; i++) {
    if (i >= flashcards.length) {
      additionalFlashcards.push(
        <FlashCard term="" def="" key={i} tempId={i} setId={query.id} />
      );
    } else {
      additionalFlashcards.push(
        <FlashCard
          term={flashcards[i].term}
          def={flashcards[i].def}
          key={flashcards[i].id}
          tempId={null}
          id={flashcards[i].id}
        />
      );
    }
  }

  return (
    <>
      <h1>{set.name}</h1>
      <h2>{set.description}</h2>
      <ul>{additionalFlashcards}</ul>
      <button onClick={addFlashcardsForm}>+</button>
    </>
  );
};

export default FlashCards;
