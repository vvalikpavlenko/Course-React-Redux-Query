import { FC } from 'react';
import UserList from '../../entities/user/ui/UsersList';
import { Link } from 'react-router-dom';

interface IUserPageProps {}

const UsersPage: FC<IUserPageProps> = ({}) => {
  return (
    <div>
      <Link to="/posts">go to posts</Link>
      <UserList />
    </div>
  );
};

export default UsersPage;
