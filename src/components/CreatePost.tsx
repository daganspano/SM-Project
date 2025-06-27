// Dependencies
import { Button, Stack, TextField, Typography } from "@mui/material";
import { customBlue } from "../shared/styles/getTheme";
import { useState } from "react";

// Mock Data
import { posts } from "../data/posts";

export const CreatePost = ({
  setScreenContent,
}: {
  setScreenContent: (value: string) => void;
}) => {
  /******************
   ***** Hooks ******
   ******************/

  const [post, setPost] = useState({
    username: "",
    title: "",
    content: "",
  });

  /********************
   ***** Handlers *****
   ********************/

  function handlePostChange(e) {
    const { name, value } = e.target;
    setPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  /******************
   ***** Render *****
   ******************/

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        posts.push({
          id: posts.length > 0 ? posts[posts.length - 1].id + 1 : 1,
          username: post.username,
          title: post.title,
          content: post.content,
        });

        alert("Post created successfully!");
        setScreenContent("home");
      }}
    >
      <Stack
        alignItems="center"
        gap={2}
        bgcolor={customBlue[300]}
        width="fit-content"
        height="fit-content"
        p={5}
        borderRadius={5}
        boxShadow={10}
        mx="auto"
      >
        <Typography variant="h2">Create Post</Typography>

        <TextField
          label="Username"
          name="username"
          value={post.username}
          onChange={handlePostChange}
        />

        <TextField
          label="Title"
          name="title"
          value={post.title}
          onChange={handlePostChange}
        />

        <TextField
          label="Content"
          name="content"
          value={post.content}
          onChange={handlePostChange}
        />

        <Button type="submit">Post</Button>
      </Stack>
    </form>
  );
};
