import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  location: '',
  form: '',
  transmission: null,
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
    setTransmission: (state, action) => {
      state.transmission = action.payload;
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
  setTransmission,
} = filtersSlice.actions;
export default filtersSlice.reducer;