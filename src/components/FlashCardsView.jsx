import FlashCardView from './FlashCardView';
import { useSelector } from 'react-redux';

const FlashCardsView = () => {
  const flashcards = useSelector((state) => state.flash.flashcards);
  return (
    <ul>
      {flashcards.map((card) => (
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
