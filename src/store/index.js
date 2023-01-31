import flashReducer from './flashcards';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    flash: flashReducer,
  },
});

export default store;
