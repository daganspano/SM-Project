import { createTheme } from "@mui/material";

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
          color: customBlue[800],
          borderColor: customBlue[800],
          "&:hover": {
            color: customBlue[300],
            backgroundColor: customBlue[800],
          },
        },
        text: {
          color: customBlue[950],
          textDecoration: "underline",
          "&:hover": {
            color: customBlue[900],
            textDecoration: "underline",
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: customBlue[400],
          color: customBlue[900],
          fontWeight: 600,
          "&:hover": {
            backgroundColor: customBlue[500],
            color: customBlue[950],
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
          backgroundColor: customBlue[800],
          color: customBlue[300],
          "&:hover": {
            backgroundColor: customBlue[900],
          },
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: customBlue[800],
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
            backgroundColor: customBlue[400],
            borderRadius: "4px",
            borderColor: customBlue[800],
            "&:hover": {
              backgroundColor: customBlue[500],
              borderColor: customBlue[800],
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
      main: customBlue[700],
      light: customBlue[800],
      dark: customBlue[600],
    },
  },

  typography: {
    fontFamily: '"Inter", sans-serif',

    h1: {
      fontSize: 32,
      fontWeight: 300,
      letterSpacing: 2,
    },

    h2: {
      fontSize: 56,
      fontWeight: 300,
      letterSpacing: 2,
      fontStyle: "italic",
      color: customBlue[800],
    },

    h3: {
      fontSize: 32,
      fontWeight: 600,
      letterSpacing: 1,
      color: customBlue[800],
    },

    h4: {
      fontSize: 24,
      fontWeight: 500,
      letterSpacing: 0.75,
      color: customBlue[800],
    },

    h5: {
      fontSize: 20,
      fontWeight: 400,
      color: customBlue[800],
    },

    h6: {
      fontSize: 20,
      fontWeight: 400,
      fontStyle: "italic",
      color: customBlue[800],
    },

    body1: {
      color: customBlue[900],
    },

    caption: {
      fontWeight: 500,
      color: customBlue[900],
    },
  },
});
