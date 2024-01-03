import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IUSer } from '../modal/user';

const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/'
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<IUSer[], null>({
      query: () => 'users'
    })
  })
});

export const { useGetUsersQuery } = userApi;

export default userApi;
