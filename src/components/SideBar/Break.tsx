// Dependencies

import { Box } from "@mui/material";
import { customBlue } from "@shared/styles/getTheme";

export const Break = ({ my }: { my?: number }) => {
  /******************
   ***** Render *****
   ******************/
  return (
    <Box
      my={my || 0}
      sx={{
        backgroundColor: customBlue[900],
        width: 1,
        height: "1px",
      }}
    ></Box>
  );
};
