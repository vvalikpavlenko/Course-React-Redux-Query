import { useGetUsersQuery } from '../../api/userApi';

const UsersList = () => {
  const { isLoading, isSuccess, data: users } = useGetUsersQuery(null);

  if (isLoading) {
    return;
  }

  return (
    <div>
      <h1>Users</h1>
      <div>
        {isSuccess &&
          users?.map(user => (
            <div key={user.id}>
              <h2>{user.username}</h2>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UsersList;
