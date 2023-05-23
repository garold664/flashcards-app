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
import NewSetForm from './components/NewSetForm';
import Sets from './components/Sets';

let isInitial = true;

const App = (props) => {
  const sets = useSelector((state) => state.flash.sets);
  // const flashcards = useSelector((state) => state.flash.sets[0].flashcards);
  const changed = useSelector((state) => state.flash.changed);
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

    if (changed) {
      dispatch(sendFlashcardsData(sets));
    }
  }, [sets, dispatch, changed]);

  return (
    <>
      <NavLink to=".">Main</NavLink>
      <br />
      <NavLink to="flashcards">FlashCards</NavLink>
      <br />
      <NavLink to="sets">Sets</NavLink>
      {ui.notification && (
        <Notification
          status={ui.notification.status}
          title={ui.notification.title}
          message={ui.notification.message}
        />
      )}
      <Routes>
        {/* <FlashCardsForm /> */}
        {/* <Route path="/" element={<FlashCards />} /> */}
        <Route path="/flashcards" element={<FlashCardsView test="my test" />} />
        <Route path="/sets" element={<Sets />} />
        <Route path="/sets/set" element={<FlashCards />} />
        <Route path="/*" element={<h1>404</h1>} />
      </Routes>
      <NewSetForm />
    </>
  );
};

export default App;
