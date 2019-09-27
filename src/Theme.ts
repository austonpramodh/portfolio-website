import { createMuiTheme } from "@material-ui/core";

const CustomTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#fff",
        },
        text: { primary: "#ffffff", secondary: "#00000" },
        background: {
            default: "#100e17",
            // default: "#0000FF",
        },
    },
    typography: {
        allVariants: { color: "#ffffff", fontFamily: `"roboto", sans-serif` },
        h1: { fontWeight: "bold", lineHeight: 1.2 },
        h2: { fontSize: "2rem", fontWeight: "bold", lineHeight: 1.2 },
        h3: { fontWeight: "bold", lineHeight: 1.2 },
        h4: { fontSize: "1.5rem", fontWeight: "bold", lineHeight: 1.2 },
        h5: { fontWeight: "bold", lineHeight: 1.2 },
        h6: { fontWeight: "bold", lineHeight: 1.2 },
    },
});

export default CustomTheme;
