import { createSlice } from '@reduxjs/toolkit';

interface MenuState {
  isOpened: boolean;
}

const initialState: MenuState = {
  isOpened: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState: initialState,

  reducers: {
    toggleMenu: (state, { payload }) => {
      state.isOpened = payload;
    },
  },
});

export const { toggleMenu } = menuSlice.actions;

export default menuSlice.reducer;
