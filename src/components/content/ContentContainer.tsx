// Dependencies
import { Account } from "@components/account/Account";
import { Box } from "@mui/material";
import { ContentPage } from "./ContentPage";
import { CreatePost } from "../CreatePost";
import { customBlue } from "@shared/styles/getTheme";
import { LoginRegister } from "../LoginRegister";
import { useEffect } from "react";

export const ContentContainer = ({
  screenContent,
  setScreenContent,
  isDarkMode,
  user,
  setUser,
}: {
  screenContent: string;
  setScreenContent: (value: string) => void;
  isDarkMode: boolean;
  user: string | null;
  setUser: (value: string | null) => void;
}) => {
  /******************
   ***** Render *****
   ******************/

  useEffect(() => {
    document.title =
      user === null
        ? "Social Better | Login/Register"
        : screenContent === "home"
        ? "Social Better | Home"
        : screenContent === "popular"
        ? "Social Better | Popular"
        : screenContent === "following"
        ? "Social Better | Following"
        : screenContent === "createPost"
        ? "Social Better | Create Post"
        : screenContent === "account"
        ? "Social Better | Account"
        : "Social Better";
  }, [screenContent, user]);

  return (
    <Box
      sx={{
        width: 1,
        py: 5,
        px: 10,
        backgroundColor: isDarkMode ? customBlue[900] : customBlue[100],
        backgroundImage: isDarkMode
          ? 'url("https://www.transparenttextures.com/patterns/buried.png")'
          : 'url("https://www.transparenttextures.com/patterns/gplay.png")',
      }}
    >
      {user === null ? (
        <LoginRegister setUser={setUser} />
      ) : screenContent === "createPost" ? (
        <CreatePost setScreenContent={setScreenContent} user={user} />
      ) : screenContent === "account" ? (
        <Account
          user={user}
          setUser={setUser}
          setScreenContent={setScreenContent}
        />
      ) : (
        <ContentPage screenContent={screenContent} user={user} />
      )}
    </Box>
  );
};
