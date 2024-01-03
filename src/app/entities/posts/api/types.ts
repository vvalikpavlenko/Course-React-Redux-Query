import { IPost } from '../modal/Post';

export type IRequestCreatePostApi = Pick<IPost, 'title' | 'body' | 'userId'>;
