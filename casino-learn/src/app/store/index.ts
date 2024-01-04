import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../../entities/user/slices/userSlice';
import { userApi } from '../../entities/user/api/userApi';

export const store = configureStore({
  reducer: {
    user: userSlice,
    [userApi.reducerPath]: userApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(userApi.middleware)
});

export const selectNickName = (state: RootState) => state.user.nickname;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
