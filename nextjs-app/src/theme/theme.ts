"use client";

import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto-mono)",
  },
  palette: {
    background: {
      default: "#FFFFFF",
    },
    text: {
      primary: "#1C1C1C",
    },
  },
});

export default theme;
