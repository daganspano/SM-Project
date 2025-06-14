// Dependencies
import AddIcon from "@mui/icons-material/Add";
import { Box, Fab, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { customBlue } from "../shared/styles/getTheme";
export const Navbar = ({
  setIsLoginRegister,
}: {
  setIsLoginRegister: (value: boolean) => void;
}) => {
  /******************
   ***** Render *****
   ******************/
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        display: "flex",
        gap: 2,
        padding: 2,
        borderBottom: `1px solid ${customBlue[900]}`,
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
      >
        Social Better
      </Typography>

      <Fab>
        <AddIcon />
      </Fab>

      <Fab onClick={() => setIsLoginRegister(true)}>
        <PersonIcon />
      </Fab>
    </Box>
  );
};
