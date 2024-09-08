import { RootState } from '../store';

export const selectCryptoForHero = (state: RootState) =>
  state.cryptos.heroCrypto;

export const selectCryptoList = (state: RootState) => state.cryptos.cryptoList;
