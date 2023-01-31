import React, { useState } from 'react';

export const FlashCardsContext = React.createContext({
  flashcards: [],
  addFlashcard: () => {},
});

const FlashCardsContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [flashcards, setFlashcards] = useState([]);
  const addFlashcardHandler = (term, def, id) => {
    setFlashcards((prevState) => {
      // return prevState.push({
      //   term: term,
      //   def: def,
      // });
      const existingCardIndex = prevState.findIndex((card) => card.id === id);
      console.log(existingCardIndex);

      let newState = [...prevState];

      if (existingCardIndex !== -1) {
        newState[existingCardIndex] = {
          term: term,
          def: def,
          id: id,
        };

        console.log(newState);

        return newState;
      }

      return prevState.concat({
        term: term,
        def: def,
        id: id,
      });
    });
  };
  return (
    <FlashCardsContext.Provider
      value={{ flashcards: flashcards, addFlashcard: addFlashcardHandler }}
    >
      {props.children}
    </FlashCardsContext.Provider>
  );
};

export default FlashCardsContextProvider;
