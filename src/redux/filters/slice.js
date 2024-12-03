import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  location: '',
  form: '',
  features: {},
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setForm: (state, action) => {
      state.form = action.payload;
    },

    toggleFeature: (state, action) => {
      state.features = { ...action.payload };
    },
    resetFilters: () => initialState,
  },
});
export const {
  setForm,
  setLocation,
  resetFilters,
  toggleFeature,

} = filtersSlice.actions;
export default filtersSlice.reducer;