import { uiActions } from './ui-slice';
import { flashActions } from './flashcards';

export const fetchFlashcardsData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://flashcards-app-c0c92-default-rtdb.firebaseio.com/flashcards/sets.json'
      );

      if (!response.ok) {
        throw new Error('Could not fetch cart data!');
      }
      const data = await response.json();
      return data;
    };

    try {
      const flashcardsData = await fetchData();
      console.log(flashcardsData);
      const sets = [];
      console.log(sets);
      for (const key in flashcardsData) {
        sets.push({
          id: key,
          name: flashcardsData[key].name,
          description: flashcardsData[key].description,
          flashcards: flashcardsData[key].flashcards,
        });
      }
      console.log(sets[0].flashcards);
      dispatch(flashActions.updateState(sets));
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

export const sendFlashcardsData = (sets) => {
  const transformedSets = {};
  sets.forEach((el) => {
    transformedSets[el.id] = {
      name: el.name,
      description: el.description,
      flashcards: el.flashcards,
    };
  });
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
        'https://flashcards-app-c0c92-default-rtdb.firebaseio.com/flashcards/sets.json',
        {
          method: 'PUT',
          body: JSON.stringify(transformedSets),
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
