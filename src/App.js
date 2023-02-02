import { useEffect } from 'react';
// import FlashCardsForm from './components/FlashCardsForm';

import { Routes, Route, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import FlashCards from './components/FlashCards';
import FlashCardsView from './components/FlashCardsView';

import { uiActions } from './store/ui-slice';

import Notification from './UI/Notification';

let isInitial = true;

const App = (props) => {
  const flashcards = useSelector((state) => state.flash.flashcards);
  const ui = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  useEffect(() => {
    const sendFlashcardsData = async () => {
      dispatch(
        uiActions.showNotification({
          status: 'pending',
          title: 'Sending',
          message: 'started sending flashcards data',
        })
      );

      const response = await fetch(
        'https://flashcards-app-c0c92-default-rtdb.firebaseio.com/flashcards.json',
        {
          method: 'PUT',
          body: JSON.stringify(flashcards),
        }
      );

      if (!response.ok) {
        throw new Error('Sending flashcards data failed!');
      }

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent flashcards data successfully!',
        })
      );

      // const responseData = await response.json();
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendFlashcardsData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'error',
          message: 'error',
        })
      );
    });
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
