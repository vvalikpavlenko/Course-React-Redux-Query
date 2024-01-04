interface Post {
  id: number;
  title: string;
  description: string;
}

export type IResponseGetPostsApi = Post[];