"use client";
import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto-mono)",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    h5: {
      fontSize: "1.1rem",
      fontWeight: 500,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
    },
    subtitle1: {
      fontSize: "0.875rem",
      fontWeight: 500,
      letterSpacing: "0.00714em",
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#FFFFFF",
      light: "#F5F5F5",
      dark: "#E0E0E0",
      contrastText: "#000000",
    },
    secondary: {
      main: "#BDBDBD",
      light: "#E0E0E0",
      dark: "#9E9E9E",
      contrastText: "#000000",
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#BDBDBD",
    },
    error: {
      main: "#FF5252",
    },
    divider: "#333333",
  },
  shape: {
    borderRadius: 2,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          border: "1px solid #333333",
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderBottom: "1px solid #333333",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: "none",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          borderBottom: "1px solid transparent",
          transition: "border-bottom-color 0.2s ease-in-out",
          "&:hover": {
            textDecoration: "none",
            borderBottomColor: "#FFFFFF",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "2px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

export default darkTheme;
