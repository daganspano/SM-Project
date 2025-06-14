// Dependencies
import { Box, ThemeProvider } from "@mui/material";
import { ContentContainer } from "./components/content/ContentContainer";
import { getTheme } from "./shared/styles/getTheme";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/SideBar/Sidebar";
import { useState } from "react";

export const App = () => {
  /******************
   ***** Hooks ******
   ******************/
  const [isLoginRegister, setIsLoginRegister] = useState(false);

  /******************
   ***** Render *****
   ******************/
  return (
    <ThemeProvider theme={getTheme}>
      <Navbar setIsLoginRegister={setIsLoginRegister} />
      <Box
        sx={{
          display: "flex",
          height: "fit-content",
          minHeight: "calc(100vh - 75px)",
        }}
      >
        <Sidebar />
        <ContentContainer
          isLoginRegister={isLoginRegister}
          setIsLoginRegister={setIsLoginRegister}
        />
      </Box>
    </ThemeProvider>
  );
};
