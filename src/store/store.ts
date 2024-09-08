import { configureStore } from '@reduxjs/toolkit';
import menuSlice from './menu/slice';
import cryptoSlice from './cryptos/slice';

export const store = configureStore({
  reducer: {
    menu: menuSlice,
    cryptos: cryptoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
