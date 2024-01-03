import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/'
  }),
  endpoints: () => ({})
});

export default mainApi;
