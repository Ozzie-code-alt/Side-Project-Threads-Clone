export type User = {
  id: string;
  name: string;
  email: string;
  bio?: string;
  avatarUrl: string;
};

export type Post = {
  id: string;
  user_id: string;
  content: string;
  author: User;
  postDate: string;
  createdAt: Date;
  updatedAt: Date;
  parent_id?: string;
  parent: Post | null;
  replies?: Post[];
};
