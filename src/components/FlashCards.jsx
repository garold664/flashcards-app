import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import { flashActions } from '../store/flashcards';

import FlashCard from './FlashCard';

const FlashCards = () => {
  const flashcards = useSelector((state) => state.flash.flashcards);
  const [numberOfCards, setNumberOfCards] = useState(1);

  const dispatch = useDispatch();
  let additionalFlashcards = [];

  // useEffect(() => {
  //   fetch(
  //     'https://flashcards-app-c0c92-default-rtdb.firebaseio.com/flashcards.json'
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (!data) {
  //         data = [];
  //       }
  //       dispatch(
  //         flashActions.updateState({
  //           flashcards: data,
  //         })
  //       );
  //     });
  // }, [dispatch]);

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
        <FlashCard term="" def="" key={i} tempId={i} />
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
      <ul>{additionalFlashcards}</ul>
      <button onClick={addFlashcardsForm}>+</button>
    </>
  );
};

export default FlashCards;
