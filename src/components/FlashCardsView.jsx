import FlashCardView from './FlashCardView';
import { useSelector } from 'react-redux';

const FlashCardsView = (props) => {
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
      <li>{props.test}</li>
    </ul>
  );
};

export default FlashCardsView;
