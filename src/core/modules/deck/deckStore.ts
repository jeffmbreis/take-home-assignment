import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Card, State } from './deckTypes';

const store = createSlice({
  name: 'deck',
  initialState: {
    cards: [],
  } as State,
  reducers: {
    addCard(state, action: PayloadAction<Card>) {
      state.cards.push(action.payload);
    },
  },
});

export const { addCard } = store.actions;

export default store.reducer;
