// Dependencies
import { Box, Button, Fab, Stack, Typography } from "@mui/material";
import { customBlue } from "@shared/styles/getTheme";
import { ContentPage } from "./content/ContentPage";
import { Settings as SettingsIcon } from "@mui/icons-material";
import { Break } from "./SideBar/Break";

export const Profile = ({
  user,
  profileUser,
  setUser,
  setScreenContent,
}: {
  user: string;
  profileUser: string;
  setUser: (value: string | null) => void;
  setScreenContent: (value: string) => void;
}) => {
  /******************
   ***** Render ******
   ******************/

  return (
    <Stack gap={2} maxWidth={1500} mx="auto">
      <Box
        sx={{
          backgroundColor: customBlue[300],
          position: "relative",
          width: 1,
          height: 250,
          borderRadius: 5,
          border: `3px solid ${customBlue[300]}`,
          boxShadow: `1px 1px 6px ${customBlue[900]}`,
        }}
      >
        <img
          src="../images/gorilla_profile_banner.jpg"
          alt="Profile Banner"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "20px",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />

        <Box position="absolute" left={50} bottom={25} width={200} height={200}>
          <img
            src="../images/gorilla_profile_icon.jpg"
            style={{
              width: "100%",
              maxWidth: 200,
              maxHeight: 200,
              borderRadius: "9999px",
              border: `3px solid ${customBlue[300]}`,
              boxShadow: `1px 1px 6px ${customBlue[900]}`,
            }}
          />
        </Box>
      </Box>

      <Stack alignItems="center" direction="row" gap={2}>
        <Typography variant="h2">Dagan Spano</Typography>

        <Box flex={1} />

        {user !== profileUser ? (
          <>
            <Button>Follow</Button>
            <Button>Request to be friends</Button>
            <Button>Message</Button>
          </>
        ) : (
          <>
            <Fab color="primary" aria-label="edit">
              <SettingsIcon />
            </Fab>

            <Button>Edit Profile</Button>

            <Button
              onClick={() => {
                setScreenContent("home");
                setUser(null);
              }}
            >
              Log Out
            </Button>
          </>
        )}
      </Stack>

      <Stack
        alignItems="center"
        color={customBlue[900]}
        direction="row"
        gap={2}
      >
        <Typography variant="h4" fontWeight={300} sx={{ fontStyle: "italic" }}>
          {profileUser}
        </Typography>

        <Box flex={1} />

        <Typography variant="subtitle1">Posts: 75</Typography>

        <Typography variant="subtitle1">Followers: 100</Typography>
      </Stack>

      <Typography variant="body1" maxWidth={500}>
        This is {profileUser}'s bio or description. Lorem Ipsum is simply dummy
        text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type specimen
        book.
      </Typography>

      <Break my={3} />

      <Typography variant="h3" mb={3}>
        Posts:
      </Typography>
      <ContentPage screenContent="profile" user={profileUser} />
    </Stack>
  );
};
