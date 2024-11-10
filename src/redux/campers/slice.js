import { createSlice } from '@reduxjs/toolkit';
import { fetchCamperById, fetchCampers, clearCampers } from './operations.js';

const initialState = {
  items: [],
  camper: null,
  total: 0,
  status: 'idle',
  isLoading: false,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    resetCampers: (state) => {
      state.items = [];
      state.total = 0;
      state.camper = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.status = 'loading';
        state.isLoading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = [...state.items, ...action.payload.items];
        state.total = action.payload.total;
        state.isLoading = false;
      })
      .addCase(fetchCampers.rejected, (state) => {
        state.status = 'failed';
        state.isLoading = false;
      })
      .addCase(fetchCamperById.pending, (state) => {
        state.status = 'loading';
        state.isLoading = true;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.status = 'idle';
        state.camper = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCamperById.rejected, (state) => {
        state.status = 'failed';
        state.isLoading = false;
      })
      .addCase(clearCampers, (state) => {
        state.items = [];
      });
  },
});

export const { resetCampers } = campersSlice.actions;

export default campersSlice.reducer;
