import { configureStore } from '@reduxjs/toolkit';

import userSlice from '../../entities/user/slices/userSlice';
import { userApi } from '../../entities/user/api/userApi';
import walletSlices from '../../entities/wallet/slices/walletSlice';

import rouletteSlice from '../../games/roulette/slices/rouletteSlice';
import rouletteSpinSlice from '../../games/roulette/slices/rouletteSpinSlice';
import slotSlice from '../../games/slots/slices/slotSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    wallet: walletSlices,
    roulette: rouletteSlice,
    rouletteSpin: rouletteSpinSlice,
    slot: slotSlice,
    [userApi.reducerPath]: userApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(userApi.middleware)
});

export const selectNickName = (state: RootState) => state.user.nickname;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
