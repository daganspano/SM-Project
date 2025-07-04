// Dependencies
import { Stack } from "@mui/material";
import { Content } from "./Content";

// Mock Data
import { accounts } from "@data/accounts";
import { posts } from "@data/posts";

export const ContentPage = ({
  screenContent,
  user,
}: {
  screenContent: string;
  user: string;
}) => {
  /******************
   ***** Hooks  *****
   ******************/

  const userAccount =
    accounts.find((account) => account.username === user) || null;

  /*********************
   ***** Functions *****
   *********************/

  const forYouContent = posts.filter(
    (post) =>
      userAccount?.preferredContentTypes.some((type) =>
        post.contentTypes.includes(type)
      ) || user === post.username
  );

  const profileContent = posts.filter((post) => user === post.username);

  /******************
   ***** Render *****
   ******************/

  return (
    <>
      {screenContent === "home" ? (
        <Stack alignItems={"center"} gap={5}>
          {forYouContent.map((post) => (
            <Content key={post.id} post={post} />
          ))}
        </Stack>
      ) : screenContent === "popular" ? (
        <Stack alignItems={"center"} gap={5}>
          <div>temporary to see all posts</div>
          {posts.map((post) => (
            <Content key={post.id} post={post} />
          ))}
        </Stack>
      ) : screenContent === "profile" ? (
        <Stack direction={"row"} gap={5} flexWrap="wrap">
          {profileContent.map((post) => (
            <Content key={post.id} post={post} />
          ))}
        </Stack>
      ) : (
        "Under Construction"
      )}
    </>
  );
};
