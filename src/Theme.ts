import { createMuiTheme } from "@material-ui/core";
import { pink } from "@material-ui/core/colors";

const CustomTheme = createMuiTheme({
    palette: {
        primary: pink,
        text: { primary: "#ffffff", secondary: "#00000" },
        background: {
            default: "#100e17",
            paper: "#212529",
            // default: "#0000FF",
        },
    },
    typography: {
        allVariants: { color: "#ffffff", fontFamily: `"roboto", sans-serif`, textAlign: "center", opacity: 0.9 },
        h1: { fontWeight: "bold", lineHeight: 1.2 },
        h2: { fontSize: "2rem", fontWeight: "bold", lineHeight: 1.2 },
        h3: { fontSize: "1.5rem", fontWeight: "bold", lineHeight: 1.2 },
        h4: { fontSize: "1.5rem", fontWeight: "bold", lineHeight: 1.2 },
        h5: { fontWeight: "bold", lineHeight: 1.2 },
        h6: { fontWeight: "bold", lineHeight: 1.2 },
    },
});

export default CustomTheme;
