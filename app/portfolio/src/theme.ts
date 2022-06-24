import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#b5d2dd", // kao
      contrastText: "#6d7d7f",
    },
    secondary: {
      main: "#6d7d7f", // mayuge
      contrastText: "#ffffff",
    },
    background: {
      // default: "linear-gradient(120deg, #b5d2dd 0 65%, #f1f0dd 65% 100%)",
      default: "#f1f0dd", // ago
    },
    text: { primary: "#6d7d7f" }, // mayuge
  },
});

export default theme;
