import { createStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const Styles = (theme: Theme) =>
    createStyles({
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            [theme.breakpoints.up("md")]: {
                flexDirection: "row",
            },
        },
        header: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(2),
        },
        educationHeader: {
            marginTop: theme.spacing(4),
        },
        projectsHeader: {
            [theme.breakpoints.down("sm")]: {
                marginTop: theme.spacing(4),
            },
        },
        sections: {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            [theme.breakpoints.up("md")]: {
                marginRight: theme.spacing(1),
                marginLeft: theme.spacing(1),
                marginBottom: "auto",
            },
            "& div": {
                zIndex: 1,
            },
        },
    });

export default Styles;
