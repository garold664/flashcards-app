import { useEffect } from 'react';
// import FlashCardsForm from './components/FlashCardsForm';

import { Routes, Route, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import FlashCards from './components/FlashCards';
import FlashCardsView from './components/FlashCardsView';

import {
  fetchFlashcardsData,
  sendFlashcardsData,
} from './store/flashcards-actions';
import Notification from './UI/Notification';

let isInitial = true;

const App = (props) => {
  const flashcards = useSelector((state) => state.flash.flashcards);
  const ui = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFlashcardsData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendFlashcardsData(flashcards));
  }, [flashcards, dispatch]);

  return (
    <>
      <NavLink to="/">Main</NavLink>
      <NavLink to="/flashcards">FlashCards</NavLink>
      {ui.notification && (
        <Notification
          status={ui.notification.status}
          title={ui.notification.title}
          message={ui.notification.message}
        />
      )}
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
