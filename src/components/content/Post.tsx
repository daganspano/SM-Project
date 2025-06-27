// Dependencies
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Stack, Typography } from "@mui/material";
import { customBlue } from "../../shared/styles/getTheme";

export const Post = ({
  username,
  title,
  content,
}: {
  username: string;
  title: string;
  content: string;
}) => {
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
          {title}
        </Typography>
        <AccountCircleIcon fontSize="large" htmlColor={customBlue[900]} />
        <Typography color={customBlue[950]}>{username}</Typography>
      </Stack>
      <Typography color={customBlue[950]}>{content}</Typography>
    </Stack>
  );
};
