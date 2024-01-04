import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_PUBLIC_KEY, API_URL } from '../../../app/network';
import type { IRequestRefreshApi, IRequestRegisterApi, IResponseRegisterApi } from './types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL
  }),
  endpoints: builder => ({
    login: builder.mutation<any, any>({
      query: body => ({
        url: '/login',
        method: 'POST',
        body
      }),
      transformResponse: (response: IResponseRegisterApi) => {
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('refresh_token', response.refresh_token);
        localStorage.setItem('isAuth', 'true');

        return response;
      }
    }),
    register: builder.mutation<IResponseRegisterApi, IRequestRegisterApi>({
      query: body => ({
        url: `${API_PUBLIC_KEY}/register`,
        method: 'POST',
        body
      }),
      transformResponse: (response: IResponseRegisterApi) => {
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('refresh_token', response.refresh_token);
        localStorage.setItem('isAuth', 'true');
        return response;
      }
    }),
    refresh: builder.mutation<any, IRequestRefreshApi>({
      query: ({ body, access_token }) => ({
        headers: {
          Authorization: `Bearer ${access_token}`
        },
        url: '/refresh',
        method: 'POST',
        body
      }),
      transformResponse: (response: IResponseRegisterApi) => {
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('refresh_token', response.refresh_token);
        localStorage.setItem('isAuth', 'true');

        return response;
      }
    })
  })
});

export const { useLoginMutation, useRegisterMutation } = userApi;
