import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IWallet } from '../type/Wallet';
import { RootState } from '../../../app/store';

const initialState: IWallet = {
  game_balance: 0
};

const walletSlice = createSlice({
  initialState,
  name: 'wallet',
  reducers: {
    setBalance: (state, action: PayloadAction<number>) => {
      state.game_balance = action.payload;
    }
  }
});

export const { setBalance } = walletSlice.actions;

export const selectBalance = (state: RootState) => state.wallet.game_balance;

export default walletSlice.reducer;
