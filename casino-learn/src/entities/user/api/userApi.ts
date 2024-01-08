import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../../../app/config/network';
import { IUser } from '../type/User';

interface IRequestGetUser {
  userId: IUser['id'];
}

type IResponseGetUser = Pick<IUser, 'name' | 'nickName'>;

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getUser: builder.query<IResponseGetUser, IRequestGetUser>({
      query: ({ userId }) => `user/${userId}`
    })
  })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserQuery } = userApi;
