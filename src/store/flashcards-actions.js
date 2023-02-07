import { uiActions } from './ui-slice';
import { flashActions } from './flashcards';

export const fetchFlashcardsData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://flashcards-app-c0c92-default-rtdb.firebaseio.com/flashcards.json'
      );

      if (!response.ok) {
        throw new Error('Could not fetch cart data!');
      }
      const data = await response.json();

      return data;
    };

    try {
      const flashcardsData = await fetchData();
      dispatch(flashActions.updateState(flashcardsData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'error',
          message: error.message,
        })
      );
    }
  };
};

export const sendFlashcardsData = (flashcards) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending',
        message: 'started sending flashcards data',
      })
    );

    const sendRequest = async () => {
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
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent flashcards data successfully!',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'error',
          message: error.message,
        })
      );
    }
  };
};
