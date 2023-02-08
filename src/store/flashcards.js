import { createSlice } from '@reduxjs/toolkit';

const initialFlashcardsState = {
  // flashcards: [
  //   // {
  //   //   term: 'chair',
  //   //   def: 'стул',
  //   //   id: 0.8503243,
  //   // },
  // ],
  changed: false,
  sets: [],
};

const flashSlice = createSlice({
  name: 'flashcards',
  initialState: initialFlashcardsState,
  reducers: {
    createFlashcard(state, action) {
      state.changed = true;
      const setIndex = state.sets.findIndex(
        (el) => el.id === action.payload.setId
      );
      console.log(state.sets[setIndex]);
      if (!state.sets[setIndex].flashcards) {
        state.sets[setIndex].flashcards = [];
      }
      const existingCardIndex = state.sets[0].flashcards.findIndex(
        (card) => card.id === action.payload.id
      );

      if (existingCardIndex !== -1) {
        let existingCard = state.sets[setIndex].flashcards[existingCardIndex];

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
        state.sets[setIndex].flashcards.push({
          term: action.payload.term,
          def: action.payload.def,
          id: action.payload.id,
        });
      }
    },
    updateState(state, action) {
      // const sets = action.payload;

      state.sets = action.payload;
    },
    createSet(state, action) {
      state.sets = [...state.sets, action.payload];
    },
  },
});

// action creators:

export const flashActions = flashSlice.actions;

export default flashSlice.reducer;
