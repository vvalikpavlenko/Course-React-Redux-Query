import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';

interface IRouletteSpin {
  speed: number;
  rotationInProgress: boolean;
  degreesRotationRoulette: number;
  currentRouletteNumber: number;
}

const initialState: IRouletteSpin = {
  speed: 0,
  rotationInProgress: false,
  degreesRotationRoulette: 0,
  currentRouletteNumber: 0
};

const rouletteSpinSlice = createSlice({
  name: 'rouletteSpin',
  initialState,
  reducers: {
    setRouletteSpinStart: state => {
      const randomSpeed = 0.02 + Math.random() * 0.1;
      state.speed = randomSpeed;
    },
    setRouletteSpinSpeed: (state, action: PayloadAction<number>) => {
      state.speed = action.payload;
    },
    setRouletteSpinSRotationInProgress: (state, action: PayloadAction<boolean>) => {
      state.rotationInProgress = action.payload;
    }
  }
});

export const { setRouletteSpinSpeed, setRouletteSpinSRotationInProgress, setRouletteSpinStart } =
  rouletteSpinSlice.actions;

export const selectRouletteSpinSpeed = (state: RootState) => state.rouletteSpin.speed;

export default rouletteSpinSlice.reducer;
