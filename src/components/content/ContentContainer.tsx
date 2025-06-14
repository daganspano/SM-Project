// Dependencies
import { Box } from "@mui/material";
import { LoginRegister } from "./LoginRegister";

export const ContentContainer = ({
  isLoginRegister,
  setIsLoginRegister,
}: {
  isLoginRegister: boolean;
  setIsLoginRegister: (value: boolean) => void;
}) => {
  /******************
   ***** Render *****
   ******************/
  return (
    <Box sx={{ width: 1, py: 5, px: 10 }}>
      {isLoginRegister ? (
        <LoginRegister setIsLoginRegister={setIsLoginRegister} />
      ) : (
        <></>
      )}
    </Box>
  );
};
