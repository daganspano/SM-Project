// Dependencies

import { Box } from "@mui/material";
import { BreakSidebar } from "./BreakSidebar";
import { ButtonSidebar } from "./ButtonSidebar";
import { customBlue } from "../../shared/styles/getTheme";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export const Sidebar = () => {
  /******************
   ***** Render *****
   ******************/
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        display: "flex",
        flexDirection: "column",
        width: "fit-content",
        minWidth: 200,
        gap: 2,
        padding: 2,
        borderRight: `1px solid ${customBlue[900]}`,
      }}
    >
      <ButtonSidebar>
        <HomeIcon />
        For You
      </ButtonSidebar>

      <ButtonSidebar>
        <ThumbUpIcon />
        Popular
      </ButtonSidebar>

      <ButtonSidebar>
        <PersonAddIcon />
        Following
      </ButtonSidebar>

      <BreakSidebar />
    </Box>
  );
};
