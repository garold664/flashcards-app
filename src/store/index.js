import flashReducer from './flashcards';
import uiReducer from './ui-slice';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    flash: flashReducer,
    ui: uiReducer,
  },
});

export default store;
