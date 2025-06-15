export interface Post {
  username: string;
  title: string;
  content: string;
}

export const posts: Post[] = [
  {
    username: "admin",
    title: "Test Post 1",
    content:
      "This is the content of test post 1. It contains some sample text to demonstrate the post structure.",
  },
];
