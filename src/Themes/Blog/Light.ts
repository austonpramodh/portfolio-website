import { createMuiTheme } from "@material-ui/core";
// import { pink } from "@material-ui/core/colors";

export const LightTheme = createMuiTheme({
    // overrides: {
    //     MuiOutlinedInput: {
    //         notchedOutline: { borderColor: "white" },
    //     },
    // },
    palette: {
        //     primary: pink,
        // text: { primary: "#000000", secondary: "#00000" },
        //     background: {
        //         default: "#100e17",
        //         // default: indigo[900],
        //         paper: "#212529",
        //         // default: "#0000FF",
        //     },
        //     type: "light",
    },
    typography: {
        //     allVariants: { color: "#ffffff", fontFamily: `"roboto", sans-serif`, textAlign: "center", opacity: 0.9 },
        h1: { marginBottom: 16, fontSize: "36px", fontWeight: 900 },
        h2: {
            fontSize: 28,
            lineHeight: "40px",
            fontWeight: 900,
        },
        body1: {
            marginBottom: "2rem",
            fontSize: "20px",
            "@media (max-width:767px)": {
                fontSize: "18px",
            },
        },
        subtitle2: {
            marginBottom: "8px",
            fontSize: "16px",
            // fontFamily: "Lato,sans-serif"
            color: "#9a9a9a",
        },
        caption: {
            fontStyle: "italic",
        },
    },
});
