import { useEffect } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetPostsQuery } from '../entities/post/api/postApi';

interface IPostsPageProps {}

const PostsPage: FC<IPostsPageProps> = ({}) => {
  const navigate = useNavigate();
  const isAuth: boolean = Boolean(localStorage.getItem('isAuth'));

  const { data: posts } = useGetPostsQuery(null, {
    refetchOnMountOrArgChange: true
  });

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, [isAuth]);

  return (
    <div>
      <h2>Posts Page</h2>
      <div className="flex flex-col gap-6">
        {posts?.map(post => (
          <div className="flex flex-col gap-3">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
