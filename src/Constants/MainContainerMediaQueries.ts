import { createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
const MainContainerMediaQueries = (theme: Theme) => {
    return createStyles({
        root: {
            margin: "auto",
            marginTop: theme.spacing(9),
            [theme.breakpoints.down("xs")]: {
                width: "auto",
                paddingRight: `${theme.spacing(2)}px`,
                paddingLeft: `${theme.spacing(2)}px`,
            },
            [theme.breakpoints.up("sm")]: {
                width: `${theme.breakpoints.width("sm") - 30}px`,
                marginTop: theme.spacing(16),
                // marginBottom: theme.spacing(8),
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
