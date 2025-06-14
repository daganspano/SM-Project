// Dependencies

import { Box } from "@mui/material";
import { customBlue } from "../../shared/styles/getTheme";

export const BreakSidebar = () => {
  /******************
   ***** Render *****
   ******************/
  return (
    <Box
      sx={{
        backgroundColor: customBlue[900],
        width: 1,
        height: "1px",
      }}
    ></Box>
  );
};
