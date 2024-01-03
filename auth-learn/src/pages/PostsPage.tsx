import React, { FC, useEffect, useState } from 'react';
import { useGetPostsQuery } from '../entities/post/api/postApi';
import { useNavigate } from 'react-router-dom';

interface IPostsPageProps {

};

const PostsPage: FC<IPostsPageProps> = ({ }) => {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem('isAuth');
  const {
    data: posts
  } = useGetPostsQuery(null, {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  }, [isAuth])

  return (
    <div>
      <h2>Posts Page</h2>
      <div className="flex flex-col gap-6">
        {posts?.map((post) => (
          <div className="flex flex-col gap-3">
            <div>{post.title}</div>
            <div>{post.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default PostsPage;