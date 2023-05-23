import FlashCardView from './FlashCardView';
import { useSelector } from 'react-redux';

const FlashCardsView = (props) => {
  // const flashcards = useSelector((state) => state.flash.flashcards);
  const flashcards = [{ term: 'chair', def: 'стул', id: 36 }];
  return (
    <ul style={{ perspective: '1500px' }}>
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
