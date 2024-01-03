import { useGetPostsQuery } from '../../api/postApi';
import { IPost } from '../../modal/Post';

const PostList = () => {
  const { isLoading, isSuccess, data: posts } = useGetPostsQuery(null);
  console.log('posts', posts);
  console.log('isLoading', isLoading);

  if (isLoading) {
    return;
  }

  return (
    <div>
      <h1>Posts</h1>
      {isSuccess &&
        posts?.map((post: IPost) => (
          <div>
            <h2>{post.title}</h2>
          </div>
        ))}
    </div>
  );
};
export default PostList;
