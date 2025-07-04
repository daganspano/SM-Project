// Dependencies

import { Box } from "@mui/material";
import { Break } from "./SideBar/Break";
import { ButtonSidebar } from "./SideBar/ButtonSidebar";
import { customBlue } from "@shared/styles/getTheme";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export const Sidebar = ({
  screenContent,
  setScreenContent,
}: {
  screenContent: string;
  setScreenContent: (value: string) => void;
}) => {
  /******************
   ***** Render *****
   ******************/
  return (
    <Box
      sx={{
        backgroundColor: customBlue[300],
        display: "flex",
        flexDirection: "column",
        width: "fit-content",
        minWidth: 200,
        gap: 2,
        padding: 2,
        borderRight: `1px solid ${customBlue[800]}`,
      }}
    >
      <ButtonSidebar
        selected={screenContent === "home"}
        onClick={() => setScreenContent("home")}
      >
        <HomeIcon />
        For You
      </ButtonSidebar>

      <ButtonSidebar
        selected={screenContent === "popular"}
        onClick={() => setScreenContent("popular")}
      >
        <ThumbUpIcon />
        Popular
      </ButtonSidebar>

      <ButtonSidebar
        selected={screenContent === "following"}
        onClick={() => setScreenContent("following")}
      >
        <PersonAddIcon />
        Following
      </ButtonSidebar>

      <Break />
    </Box>
  );
};
