import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import mainApi from './mainApi';

import postApi from '../../entities/posts/api/postApi';
import userApi from '../../entities/user/api/userApi';

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    [userApi.reducerPath]: userApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(mainApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
