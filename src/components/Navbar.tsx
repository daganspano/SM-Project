// Dependencies
import AddIcon from "@mui/icons-material/Add";
import { Box, Fab, Typography } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import PersonIcon from "@mui/icons-material/Person";
import { customBlue } from "@shared/styles/getTheme";
export const Navbar = ({
  setScreenContent,
  isDarkMode,
  setIsDarkMode,
}: {
  setScreenContent: (value: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}) => {
  /******************
   ***** Render *****
   ******************/
  return (
    <Box
      sx={{
        backgroundColor: customBlue[300],
        display: "flex",
        gap: 2,
        padding: 2,
        borderBottom: `1px solid ${customBlue[800]}`,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          flex: 1,
          color: customBlue[900],
          "&:hover": {
            color: customBlue[950],
            cursor: "pointer",
          },
        }}
        onClick={() => setScreenContent("home")}
      >
        Social Better
      </Typography>

      <Fab onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </Fab>

      <Fab onClick={() => setScreenContent("createPost")}>
        <AddIcon />
      </Fab>

      <Fab onClick={() => setScreenContent("account")}>
        <PersonIcon />
      </Fab>
    </Box>
  );
};
