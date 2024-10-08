import { createSlice } from '@reduxjs/toolkit';
import { Crypto } from '../../types/crypto.types';
import { getCryptos } from './operations';

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
      .addCase(getCryptos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCryptos.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.heroCrypto = payload as unknown as Crypto[];
        state.cryptoList = payload as unknown as Crypto[];

        state.heroCrypto = state.heroCrypto.slice(0, 6);
      })
      .addCase(getCryptos.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload as string;
      });
  },
});

export default cryptoSlice.reducer;
