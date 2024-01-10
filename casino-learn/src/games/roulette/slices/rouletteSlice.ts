import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../../app/store';

export enum RouletteLifecycle {
  READY_TO_START = 'start',
  PAY = 'pay',
  FINISHED = 'finished',
  INFO = 'info'
}

export enum RouletteWinOrLose {
  WIN = 'win',
  LOSE = 'lose'
}

interface InitialState {
  readonly winBed: number;
  lifecycle: `${RouletteLifecycle}`;
  winOrLose: `${RouletteWinOrLose}` | null;
  activeNumber: number;
  currentBet: number;
}

const initialState: InitialState = {
  winBed: 36,
  winOrLose: null,
  lifecycle: RouletteLifecycle.READY_TO_START,
  activeNumber: 0,
  currentBet: 0
};

const rouletteSlice = createSlice({
  initialState,
  name: 'roulette',
  reducers: {
    setActiveNumber: (state, action: PayloadAction<number>) => {
      state.activeNumber = action.payload;
    },
    setCurrentBet: (state, action: PayloadAction<number>) => {
      if (state.currentBet + action.payload <= 0) {
        state.currentBet = 0;
      } else {
        state.currentBet = state.currentBet + action.payload;
      }
    },
    setRouletteLifecycle: (state, action: PayloadAction<RouletteLifecycle>) => {
      state.lifecycle = action.payload;
    },
    setWinOrLose: (state, active: PayloadAction<InitialState['winOrLose']>) => {
      state.winOrLose = active.payload;
    }
  }
});

export const { setActiveNumber, setCurrentBet, setRouletteLifecycle, setWinOrLose } = rouletteSlice.actions;

export const selectActiveNumber = (state: RootState) => state.roulette.activeNumber;
export const selectCurrentBet = (state: RootState) => state.roulette.currentBet;
export const selectRouletteLifecycle = (state: RootState) => state.roulette.lifecycle;
export const selectRouletteWinNumber = (state: RootState) => state.roulette.winBed;
export const selectRouletteWinOrLose = (state: RootState) => state.roulette.winOrLose;

export default rouletteSlice.reducer;
