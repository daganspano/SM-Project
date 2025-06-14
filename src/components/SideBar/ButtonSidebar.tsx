// Dependencies
import { Button } from "@mui/material";
import { customBlue } from "../../shared/styles/getTheme";

export const ButtonSidebar = (props) => {
  /******************
   ***** Render *****
   ******************/
  return (
    <Button
      variant="text"
      sx={{
        color: customBlue[900],
        display: "flex",
        justifyContent: "flex-start",
        gap: 1,
        borderRadius: 9999,
        "&:hover": {
          backgroundColor: customBlue[400],
        },
      }}
    >
      {props.children}
    </Button>
  );
};
