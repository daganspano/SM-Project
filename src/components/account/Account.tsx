// Dependencies
import { Button } from "@mui/material";
import { Profile } from "@components/Profile";

export const Account = ({
  user,
  setUser,
  setScreenContent,
}: {
  user: string;
  setUser: (value: string | null) => void;
  setScreenContent: (value: string) => void;
}) => {
  /******************
   ***** Render ******
   ******************/

  return (
    <Profile
      user={user}
      profileUser={user}
      setUser={setUser}
      setScreenContent={setScreenContent}
    />
  );
};
