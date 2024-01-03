import type { IUSer } from '../modal/user';

import mainApi from '../../../app/store/mainApi';

const userApi = mainApi.injectEndpoints({
  endpoints: builder => ({
    getUsers: builder.query<IUSer[], null>({
      query: () => 'users'
    })
  })
});

export const { useGetUsersQuery } = userApi;

export default userApi;
