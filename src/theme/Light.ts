import { createTheme } from "@mui/material";
import { pink } from "@mui/material/colors";

export const LightTheme = createTheme({
  //   overrides: {
  //     MuiOutlinedInput: {
  //       notchedOutline: { borderColor: "white" },
  //     },
  //   },
  palette: {
    primary: pink,
    text: { primary: "#ffffff", secondary: "#ffffff" },
    background: {
      default: "#100e17",
      // default: indigo[900],
      paper: "#212529",
      // default: "#0000FF",
    },
    // type: "light",
  },
  typography: {
    allVariants: {
      color: "#ffffff",
      fontFamily: `"roboto", sans-serif`,
      textAlign: "center",
      opacity: 0.9,
    },
    h1: { fontWeight: "bold", lineHeight: 1.2 },
    h2: { fontSize: "2rem", fontWeight: "bold", lineHeight: 1.2 },
    h3: { fontSize: "1.8rem", fontWeight: "bold", lineHeight: 1.2 },
    h4: { fontSize: "1.5rem", fontWeight: "bold", lineHeight: 1.2 },
    h5: { fontWeight: "bold", lineHeight: 1.2, fontSize: "1.3rem" },
    h6: { fontSize: "1.1rem", fontWeight: "bold", lineHeight: 1.2 },
  },
});
