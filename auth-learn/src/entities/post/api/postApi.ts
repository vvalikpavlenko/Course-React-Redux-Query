import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../../app/network';
import { IResponseGetPostsApi } from './types';

// get posts
// if status 200 -> ok give posts
// if status 401 -> refreshToken(localStorage.getItem())
// if 200 -> update ls access & refresh
// repeat posts request
// if 200 -> ok give posts
// if 401 -> go to login page (clear ls)

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('access_token');

      if (token){
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    }
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<IResponseGetPostsApi, null>({
      query: () => ({
        url: '/posts',
        method: 'GET',
      })
    })
  })
})

export const {
  useGetPostsQuery,
} = postApi;