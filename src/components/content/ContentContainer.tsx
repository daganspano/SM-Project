// Dependencies
import { customBlue } from "../../shared/styles/getTheme";
import { Box } from "@mui/material";
import { LoginRegister } from "../LoginRegister";
import { useState } from "react";

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
      {screenContent === "home" ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            color: customBlue[900],
          }}
        >
          <h2>Welcome to the Main Content!</h2>
          <p>Select a section from the sidebar to get started.</p>
        </Box>
      ) : screenContent === "loginRegister" ? (
        <LoginRegister setScreenContent={setScreenContent} />
      ) : (
        <></>
      )}
    </Box>
  );
};
