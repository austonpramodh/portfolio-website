import { createMuiTheme } from "@material-ui/core";
import { pink } from "@material-ui/core/colors";

export const DarkTheme = createMuiTheme({
    overrides: {
        MuiOutlinedInput: {
            notchedOutline: { borderColor: "white" },
        },
    },
    palette: {
        primary: pink,
        text: { primary: "rgba(255,255,255,0.9)", secondary: "rgba(255,255,255,0.8)" },
        background: {
            default: "#100e17",
            // default: indigo[900],
            paper: "#212529",
            // default: "#0000FF",
        },
        type: "dark",
    },
    typography: {
        allVariants: { color: "#ffffff", fontFamily: `"roboto", sans-serif`, textAlign: "center", opacity: 0.9 },
        h1: { fontWeight: "bold", lineHeight: 1.2 },
        h2: { fontSize: "2rem", fontWeight: "bold", lineHeight: 1.2 },
        h3: { fontSize: "1.8rem", fontWeight: "bold", lineHeight: 1.2 },
        h4: { fontSize: "1.5rem", fontWeight: "bold", lineHeight: 1.2 },
        h5: { fontWeight: "bold", lineHeight: 1.2, fontSize: "1.3rem" },
        h6: { fontSize: "1.1rem", fontWeight: "bold", lineHeight: 1.2 },
    },
});
