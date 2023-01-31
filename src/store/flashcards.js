import { createSlice } from '@reduxjs/toolkit';

const initialFlashcardsState = {
  flashcards: [
    // {
    //   term: 'chair',
    //   def: 'стул',
    //   id: 0.8503243,
    // },
  ],
};

const flashSlice = createSlice({
  name: 'flashcards',
  initialState: initialFlashcardsState,
  reducers: {
    createFlashcard(state, action) {
      const existingCardIndex = state.flashcards.findIndex(
        (card) => card.id === action.payload.id
      );

      if (existingCardIndex !== -1) {
        console.log(existingCardIndex);
        state.flashcards[existingCardIndex] = {
          term: action.payload.term,
          def: action.payload.def,
          id: action.payload.id,
        };
      } else {
        state.flashcards.push({
          term: action.payload.term,
          def: action.payload.def,
          id: action.payload.id,
        });
      }
    },
  },
});

export const flashActions = flashSlice.actions;

export default flashSlice.reducer;
