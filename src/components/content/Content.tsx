// Dependencies
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box, Button, Stack, Typography } from "@mui/material";
import { customBlue } from "../../shared/styles/getTheme";
import { Post } from "../../data/posts";

export const Content = ({ post }: { post: Post }) => {
  /******************
   ***** Render *****
   ******************/

  return (
    <Stack
      gap={4}
      width={1}
      maxWidth={500}
      padding={5}
      sx={{ backgroundColor: customBlue[300], borderRadius: 5 }}
    >
      <Stack direction="row" alignItems="center" gap={1}>
        <Typography variant="h2" flex={1}>
          {post.title}
        </Typography>

        <AccountCircleIcon fontSize="large" htmlColor={customBlue[900]} />

        <Typography color={customBlue[950]}>{post.username}</Typography>
      </Stack>

      <Typography flex={1} color={customBlue[950]}>
        {post.content}
      </Typography>

      <Typography variant="caption">
        Content Types:{" "}
        {/******************************************add functionality to filter by content type******************************************/}
        {post.contentTypes.map((type) => (
          <Button variant="text" sx={{ textDecoration: "none" }}>
            @{type}
          </Button>
        ))}
      </Typography>
    </Stack>
  );
};
