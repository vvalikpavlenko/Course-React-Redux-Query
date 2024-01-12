import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { sound } from '@pixi/sound';
import { SOUNDS_ROULETTE } from '../scenes/GameScene/config';

interface IRouletteSpin {
  readonly rouletteNumbers: number[];
  readonly stepCircle: number;
  speed: number;
  rotationInProgress: boolean;
  degreesRotation: number;
  currentNumber: number | null;
}

export const ROULETTE_NUMBERS: number[] = [
  0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7,
  28, 12, 35, 3, 26
];

const initialState: IRouletteSpin = {
  rouletteNumbers: ROULETTE_NUMBERS,
  stepCircle: 360 / ROULETTE_NUMBERS.length,
  speed: 0,
  rotationInProgress: false,
  degreesRotation: 0,
  currentNumber: null
};

const rouletteSpinSlice = createSlice({
  name: 'rouletteSpin',
  initialState,
  reducers: {
    setRouletteSpinStart: state => {
      const randomSpeed = 1 + Math.random() * 0.1;
      state.speed = randomSpeed;
      state.rotationInProgress = true;
    },
    setRouletteSpinSpeed: (state, action: PayloadAction<number | null>) => {
      const speed = action.payload;
      if (speed === 0) {
        state.speed = 0;
        state.rotationInProgress = false;
        sound.stop(SOUNDS_ROULETTE.SPIN);
      } else {
        state.speed = state.speed - state.speed / 150;
      }
    },
    setRouletteSpinRotationInProgress: (state, action: PayloadAction<boolean>) => {
      state.rotationInProgress = action.payload;
    },
    setRouletteSpinDegreesRotation: (state, action: PayloadAction<number>) => {
      state.degreesRotation = action.payload;
      const deltaIndex = Math.floor((action.payload + state.stepCircle / 2) / state.stepCircle);
      const currentIndex = state.rouletteNumbers.length - deltaIndex;
      state.currentNumber = state.rouletteNumbers[currentIndex];
    },
    clearRouletteSpin: state => {
      state.currentNumber = initialState.currentNumber;
    }
  }
});

export const {
  setRouletteSpinSpeed,
  setRouletteSpinRotationInProgress,
  setRouletteSpinDegreesRotation,
  setRouletteSpinStart,
  clearRouletteSpin
} = rouletteSpinSlice.actions;

export const selectRouletteSpinSpeed = (state: RootState) => state.rouletteSpin.speed;
export const selectRouletteSpinRotationInProgress = (state: RootState) => state.rouletteSpin.rotationInProgress;
export const selectRouletteSpinCurrentNumber = (state: RootState) => state.rouletteSpin.currentNumber;

export default rouletteSpinSlice.reducer;
