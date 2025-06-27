// Dependencies
import { Box } from "@mui/material";
import { ContentPage } from "./ContentPage";
import { CreatePost } from "../CreatePost";
import { customBlue } from "../../shared/styles/getTheme";
import { LoginRegister } from "../LoginRegister";

export const ContentContainer = ({
  screenContent,
  setScreenContent,
  isDarkMode,
}: {
  screenContent: string;
  setScreenContent: (value: string) => void;
  isDarkMode: boolean;
}) => {
  /******************
   ***** Render *****
   ******************/
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
      {screenContent === "loginRegister" ? (
        <LoginRegister setScreenContent={setScreenContent} />
      ) : screenContent === "createPost" ? (
        <CreatePost setScreenContent={setScreenContent} />
      ) : (
        <ContentPage screenContent={screenContent} />
      )}
    </Box>
  );
};
