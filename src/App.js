import { useEffect } from 'react';
// import FlashCardsForm from './components/FlashCardsForm';

import { Routes, Route, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import FlashCards from './components/FlashCards';
import FlashCardsView from './components/FlashCardsView';

const App = (props) => {
  const flashcards = useSelector((state) => state.flash.flashcards);

  useEffect(() => {
    fetch(
      'https://flashcards-app-c0c92-default-rtdb.firebaseio.com/flashcards.json',
      {
        method: 'PUT',
        body: JSON.stringify(flashcards),
      }
    );
  }, [flashcards]);

  return (
    <>
      <NavLink to="/">Main</NavLink>
      <NavLink to="/flashcards">FlashCards</NavLink>
      <Routes>
        {/* <FlashCardsForm /> */}
        <Route path="/" element={<FlashCards />} />
        <Route path="/flashcards" element={<FlashCardsView test="my test" />} />
        <Route path="/*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
};

export default App;
