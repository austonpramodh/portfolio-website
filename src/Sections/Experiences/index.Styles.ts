import { createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import MainContainerMediaQueries from "../../Constants/MainContainerMediaQueries";

const Styles = (theme: Theme) =>
    createStyles({
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "0px !important",
            [theme.breakpoints.up("md")]: {
                // flexDirection: "row",
            },
        },
        containerMediaQueries: { ...MainContainerMediaQueries(theme).root },
        header: {
            padding: 4,
        },
        educationCards: {
            width: "100%",
        },
    });

export default Styles;
