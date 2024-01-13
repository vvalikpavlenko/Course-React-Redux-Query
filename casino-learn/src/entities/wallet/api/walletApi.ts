import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../../../app/config/network';

enum TABS {
  BALANCE = 'Balance'
}

export const walletApi = createApi({
  reducerPath: 'wallet',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: [TABS.BALANCE],
  endpoints: builder => ({
    getBalance: builder.query<any, null>({
      query: () => '/wallet',
      providesTags: [TABS.BALANCE]
    }),
    updateBalance: builder.mutation<any, any>({
      query: body => ({
        url: '/wallet',
        body
      }),
      invalidatesTags: [TABS.BALANCE]
    })
  })
});
