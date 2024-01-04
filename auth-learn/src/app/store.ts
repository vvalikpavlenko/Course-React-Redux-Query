import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { userApi } from "../entities/user/api/userApi"
import { postApi } from "../entities/post/api/postApi"

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware().concat([
      userApi.middleware,
      postApi.middleware,
    ])
  )
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
