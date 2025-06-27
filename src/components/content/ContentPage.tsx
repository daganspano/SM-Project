// Dependencies
import { Stack } from "@mui/material";
import { Content } from "./Content";

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
          {posts.map((post) => (
            <Content key={post.id} post={post} />
          ))}
        </Stack>
      ) : (
        "Under Construction"
      )}
    </>
  );
};
