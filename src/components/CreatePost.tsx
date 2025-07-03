// Dependencies
import {
  Box,
  Button,
  Checkbox,
  Chip,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { customBlue } from "@shared/styles/getTheme";
import { useState } from "react";

// Mock Data
import { Post, posts } from "@data/posts";
import { contentTypes } from "@data/contentTypes";

export const CreatePost = ({
  setScreenContent,
  user,
}: {
  setScreenContent: (value: string) => void;
  user: string;
}) => {
  /******************
   ***** Hooks ******
   ******************/

  const [post, setPost] = useState<Post>({
    id: 0,
    username: user,
    title: "",
    content: "",
    contentTypes: [],
  });

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 224,
        width: 250,
      },
    },
  };

  /********************
   ***** Handlers *****
   ********************/

  function handlePostChange(event: { target: { name: any; value: any } }) {
    const { name, value } = event.target;
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
          contentTypes: post.contentTypes,
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
          label="Title"
          name="title"
          value={post.title}
          onChange={handlePostChange}
          fullWidth
        />

        <TextField
          label="Content"
          name="content"
          value={post.content}
          onChange={handlePostChange}
          multiline
          rows={4}
          fullWidth
        />

        <FormControl sx={{ width: 300 }} required>
          <InputLabel id="content-types-label">Content Types</InputLabel>
          <Select
            labelId="content-types-label"
            multiple
            name="contentTypes"
            value={post.contentTypes}
            onChange={handlePostChange}
            input={<OutlinedInput label="Content Types" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {(selected as string[]).map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {contentTypes.map((type) => (
              <MenuItem key={type} value={type}>
                <Checkbox checked={post.contentTypes.indexOf(type) > -1} />
                <ListItemText primary={type} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button type="submit">Post</Button>
      </Stack>
    </form>
  );
};
