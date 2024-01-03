import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IPost } from '../modal/Post';

const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/'
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], null>({
      query: () => 'posts'
    })
  })
});

export const { useGetPostsQuery } = postApi;

export default postApi;
