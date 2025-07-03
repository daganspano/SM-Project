// Dependencies
import { Button } from "@mui/material";
import { customBlue } from "@shared/styles/getTheme";
import {
  MouseEventHandler,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

export const ButtonSidebar = (props: {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  selected: any;
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
}) => {
  /******************
   ***** Render *****
   ******************/

  return (
    <Button
      variant="text"
      onClick={props.onClick}
      sx={{
        color: props.selected ? customBlue[900] : customBlue[800],
        display: "flex",
        justifyContent: "flex-start",
        gap: 1,
        borderRadius: 9999,
        backgroundColor: props.selected ? customBlue[400] : "transparent",
        "&:hover": {
          backgroundColor: customBlue[400],
        },
        "&.MuiButton-text": {
          textDecoration: "none",
        },
      }}
    >
      {props.children}
    </Button>
  );
};
