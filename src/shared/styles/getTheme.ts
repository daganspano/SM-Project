import { BorderClear } from "@mui/icons-material";
import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";

export const customBlue = {
  50: "#eaf1fa",
  100: "#c9daf1",
  200: "#a7c2e7",
  300: "#85abde",
  400: "#6d99d6",
  500: "#578ec9", // Main color
  600: "#4e80b5",
  700: "#426d99",
  800: "#35597a",
  900: "#253d52",
  950: "#182535",
};

export const customYellow = {
  50: "#fffbe6",
  100: "#fff6cc",
  200: "#fff0b3",
  300: "#ffe999",
  400: "#ffe380",
  500: "#fada7a", // Main color
  600: "#e6c86e",
  700: "#ccb05f",
  800: "#b39951",
  900: "#8c713d",
  950: "#66522a",
};

export const getTheme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        outlined: {
          fontWeight: 700,
          color: customBlue[900],
          borderColor: customBlue[900],
          "&:hover": {
            color: customBlue[300],
            backgroundColor: customBlue[900],
          },
        },
        text: {
          color: customBlue[700],
          "&:hover": {
            color: customBlue[600],
          },
        },
      },
    },

    MuiFab: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        root: {
          backgroundColor: customBlue[900],
          color: customBlue[500],
          "&:hover": {
            backgroundColor: customBlue[950],
          },
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: customBlue[900],
          },
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "filled",
        size: "small",
        required: true,
      },
      styleOverrides: {
        root: {
          "& .MuiFilledInput-root": {
            backgroundColor: customBlue[300],
            borderRadius: "4px",
            borderColor: customBlue[900],
            "&:hover": {
              backgroundColor: customBlue[400],
              borderColor: customBlue[900],
            },
            "&.Mui-focused": {
              backgroundColor: customBlue[200],
            },
          },
        },
      },
    },
  },

  palette: {
    mode: "light",
    primary: {
      main: customBlue[500],
      light: customBlue[700],
      dark: customBlue[300],
    },
  },

  typography: {
    fontFamily: '"Inter", sans-serif',

    h1: {
      fontSize: "2rem",
      fontWeight: 400,
      letterSpacing: "0.05em",
    },

    h2: {
      fontSize: "2rem",
      fontWeight: 700,
    },

    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },

    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },

    h5: {
      fontSize: "1.25rem",
      fontWeight: 400,
    },

    h6: {
      fontSize: "1.25rem",
      fontWeight: 400,
      fontStyle: "italic",
    },
  },
});
