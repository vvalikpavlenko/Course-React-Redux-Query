import React, { FC } from 'react';
import PostList from '../../entities/posts/ui/PostList';
import { Link } from 'react-router-dom';

interface IPostPageProps {}

const PostsPage: FC<IPostPageProps> = ({}) => {
  return (
    <div>
      <Link to="/users">go to Users</Link>
      <PostList />
    </div>
  );
};

export default PostsPage;
