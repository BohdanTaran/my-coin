import { createSlice } from '@reduxjs/toolkit';
import { Crypto } from '../../types/crypto.types';
import { getHeroCrypto } from './operations';

interface StateProps {
  heroCrypto: Crypto[];
  cryptoList: Crypto[];
  isLoading: boolean;
  error: string | null;
}

const initialState: StateProps = {
  heroCrypto: [],
  cryptoList: [],
  isLoading: false,
  error: '',
};

const cryptoSlice = createSlice({
  name: 'cryptos',
  initialState: initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getHeroCrypto.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getHeroCrypto.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.heroCrypto = payload as unknown as Crypto[];
      })
      .addCase(getHeroCrypto.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload as string;
      });
  },
});

export default cryptoSlice.reducer;
