// Dependencies

import { Button } from "@mui/material";

export const Account = ({
  user,
  setUser,
}: {
  user: string;
  setUser: (value: string | null) => void;
}) => {
  /******************
   ***** Render ******
   ******************/

  return (
    <>
      <Button onClick={() => setUser(null)} variant="contained">
        Log Out
      </Button>
    </>
  );
};
