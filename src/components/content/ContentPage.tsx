// Dependencies
import { Stack } from "@mui/material";
import { Post } from "./Post";

// Mock Data
import { posts } from "../../data/posts";

export const ContentPage = ({ screenContent }: { screenContent: string }) => {
  /******************
   ***** Render *****
   ******************/
  return (
    <>
      {screenContent === "home" ? (
        <Stack alignItems={"center"} gap={5}>
          {posts.map((post, index) => (
            <Post
              key={index}
              username={post.username}
              title={post.title}
              content={post.content}
            />
          ))}
        </Stack>
      ) : (
        "Under Construction"
      )}
    </>
  );
};
