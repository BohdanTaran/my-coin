import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axiosInstance';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export const getCryptos = createAsyncThunk(
  'cryptos/cryptos',
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get<Crypto[]>('/coins/markets', {});

      return data;
    } catch (error) {
      let errorMessage = 'Failed to get crypto currencies for hero';

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      console.log(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  },
);
