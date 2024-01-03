import type { IPost } from '../modal/Post';
import type { IRequestCreatePostApi } from './types';

import mainApi from '../../../app/store/mainApi';

enum TAGS {
  POST = 'POST'
}

const enhanceApi = mainApi.enhanceEndpoints({
  addTagTypes: [TAGS.POST]
});

const postApi = enhanceApi.injectEndpoints({
  endpoints: builder => ({
    getPosts: builder.query<IPost[], null>({
      query: () => 'posts',
      providesTags: [TAGS.POST]
    }),
    createPost: builder.mutation<IPost, IRequestCreatePostApi>({
      query: ({ body }) => ({
        url: 'posts',
        method: 'post',
        body
      }),
      invalidatesTags: [TAGS.POST]
    })
  })
});

export const { useGetPostsQuery, useCreatePostMutation } = postApi;

export default postApi;
