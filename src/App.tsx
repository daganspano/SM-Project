// Dependencies
import { Box, ThemeProvider } from "@mui/material";
import { ContentContainer } from "@components/content/ContentContainer";
import { getTheme } from "@shared/styles/getTheme";
import { Navbar } from "@components/Navbar";
import { Sidebar } from "@components/SideBar/Sidebar";
import { useState } from "react";

export const App = () => {
  /******************
   ***** States ******
   ******************/

  const [user, setUser] = useState<string | null>(null);
  const [screenContent, setScreenContent] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);

  /******************
   ***** Render *****
   ******************/

  return (
    <ThemeProvider theme={getTheme}>
      <Navbar
        setScreenContent={setScreenContent}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      <Box
        sx={{
          display: "flex",
          height: "fit-content",
          minHeight: "calc(100vh - 75px)",
        }}
      >
        <Sidebar
          screenContent={screenContent}
          setScreenContent={setScreenContent}
        />
        <ContentContainer
          screenContent={screenContent}
          setScreenContent={setScreenContent}
          isDarkMode={isDarkMode}
          user={user}
          setUser={setUser}
        />
      </Box>
    </ThemeProvider>
  );
};
