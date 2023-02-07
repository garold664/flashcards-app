import { createSlice } from '@reduxjs/toolkit';

const initialFlashcardsState = {
  flashcards: [
    // {
    //   term: 'chair',
    //   def: 'стул',
    //   id: 0.8503243,
    // },
  ],
  changed: false,
};

const flashSlice = createSlice({
  name: 'flashcards',
  initialState: initialFlashcardsState,
  reducers: {
    createFlashcard(state, action) {
      state.changed = true;
      const existingCardIndex = state.flashcards.findIndex(
        (card) => card.id === action.payload.id
      );

      if (existingCardIndex !== -1) {
        let existingCard = state.flashcards[existingCardIndex];

        if (
          existingCard.term !== action.payload.term ||
          existingCard.def !== action.payload.def
        ) {
          existingCard = {
            term: action.payload.term,
            def: action.payload.def,
            id: action.payload.id,
          };
        } else {
          return;
        }
      } else {
        state.flashcards.push({
          term: action.payload.term,
          def: action.payload.def,
          id: action.payload.id,
        });
      }
    },
    updateState(state, action) {
      console.log(action.payload);
      state.flashcards = action.payload;
    },
  },
});

// action creators:

export const flashActions = flashSlice.actions;

export default flashSlice.reducer;
