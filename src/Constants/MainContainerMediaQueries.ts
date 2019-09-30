import { createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
const MainContainerMediaQueries = (theme: Theme) => {
    return createStyles({
        root: {
            margin: "auto",
            padding: theme.spacing(1),
            [theme.breakpoints.up("xs")]: {
                width: "auto",
            },
            [theme.breakpoints.up("sm")]: {
                width: `${theme.breakpoints.width("sm") - 30}px`,
            },
            [theme.breakpoints.up("md")]: {
                width: `${theme.breakpoints.width("md") - 40}px`,
            },
            [theme.breakpoints.up("lg")]: {
                width: `${theme.breakpoints.width("lg") - 60}px`,
            },
        },
    });
};

export default MainContainerMediaQueries;
