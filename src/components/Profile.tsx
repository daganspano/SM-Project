// Dependencies
import { Box, Typography } from "@mui/material";
import { customBlue } from "@shared/styles/getTheme";

export const Profile = ({ user }: { user: string }) => {
  /******************
   ***** Render ******
   ******************/

  return (
    <Box maxWidth={1500} mx="auto">
      <Box
        sx={{
          backgroundColor: customBlue[950],
          position: "relative",
          width: 1,
          height: 200,
          borderRadius: 5,
          border: `2px solid ${customBlue[950]}`,
        }}
      >
        <img
          src="../images/gorilla_profile_banner.jpg"
          alt="Profile Banner"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "20px",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        <Typography
          variant="h1"
          sx={{
            color: customBlue[100],
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%) translateY(-50%)",
            top: "50%",
          }}
        >
          {user}
        </Typography>

        <Box
          position="absolute"
          left={50}
          bottom={-100}
          width={200}
          height={200}
        >
          <img
            src="../images/gorilla_profile_icon.jpg"
            style={{
              width: "100%",
              maxWidth: 200,
              minWidth: 200,
              borderRadius: "9999px",
              border: `2px solid ${customBlue[950]}`,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
