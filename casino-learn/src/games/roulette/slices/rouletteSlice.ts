import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../../app/store';

interface InitialState {
  activeNumber: number;
}

const initialState: InitialState = {
  activeNumber: 0
};

const rouletteSlice = createSlice({
  initialState,
  name: 'roulette',
  reducers: {
    setActiveNumber: (state, action: PayloadAction<number>) => {
      state.activeNumber = action.payload;
    }
  }
});

export const { setActiveNumber } = rouletteSlice.actions;

export const selectActiveNumber = (state: RootState) => state.roulette.activeNumber;

export default rouletteSlice.reducer;
