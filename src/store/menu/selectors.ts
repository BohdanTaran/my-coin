import { RootState } from '../store';

export const selectOpenState = (state: RootState) => state.menu.isOpened;
