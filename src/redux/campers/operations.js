import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async (thunkApi) => {
    try {
      const response = await axios.get('/campers');

      console.log(response.data);
      
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return thunkApi.rejectWithValue(error.response.data.message);
      } else {
        return thunkApi.rejectWithValue('Something went wrong');
      }
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  'campers/fetchCamperById',
  async (id, thunkApi) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return thunkApi.rejectWithValue(error.response.data.message);
      } else {
        return thunkApi.rejectWithValue('Something went wrong');
      }
    }
  }
);

export const clearCampers = createAction('campers/clearCampers');