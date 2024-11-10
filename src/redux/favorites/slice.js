import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  items: [],
};
const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      if (!state.items.includes(action.payload)) {
        state.items.push(action.payload);
      }
    },
    removeFavorites: (state, action) => {
      state.items = state.items.filter(id => id !== action.payload);
    },
  },
});
export const { addFavorite, removeFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;