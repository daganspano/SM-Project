export interface Post {
  id: number;
  username: string;
  title: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: 1,
    username: "admin",
    title: "Test Post 1",
    content:
      "This is the content of test post 1. It contains some sample text to demonstrate the post structure.",
  },
];
