import { useCreatePostMutation, useGetPostsQuery } from '../../api/postApi';
import { IPost } from '../../modal/Post';

const PostList = () => {
  const { isLoading, isSuccess, data: posts } = useGetPostsQuery(null);

  const [createPost] = useCreatePostMutation();

  const onCreatePost = () => {
    createPost({
      body: 'Description',
      title: 'Title Valik',
      userId: 1
    });
  };

  if (isLoading) {
    return;
  }

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={onCreatePost}>Add post</button>
      {isSuccess &&
        posts?.map((post: IPost) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
          </div>
        ))}
    </div>
  );
};
export default PostList;
