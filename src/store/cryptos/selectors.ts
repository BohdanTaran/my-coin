import { RootState } from '../store';

export const selectCryptoForHero = (state: RootState) =>
  state.cryptos.heroCrypto;
