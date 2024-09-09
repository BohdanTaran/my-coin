import { RootState } from '../store';

export const selectCryptoForHero = (state: RootState) =>
  state.cryptos.heroCrypto;

export const selectCryptoList = (state: RootState) => state.cryptos.cryptoList;

export const selectToken = (state: RootState, id: string) => {
  return state.cryptos.cryptoList.find((token) => token.id === id);
};
