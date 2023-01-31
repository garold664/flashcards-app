import { useContext } from 'react';
import { FlashCardsContext } from '../context/flashcards-context';
import FlashCardView from './FlashCardView';

const FlashCardsView = () => {
  const flashcardsCtx = useContext(FlashCardsContext);
  return (
    <ul>
      {flashcardsCtx.flashcards.map((card) => (
        <FlashCardView
          term={card.term}
          def={card.def}
          key={card.id}
          id={card.id}
        />
      ))}
    </ul>
  );
};

export default FlashCardsView;
