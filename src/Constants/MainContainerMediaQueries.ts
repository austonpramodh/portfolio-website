import { createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
const MainContainerMediaQueries = (theme: Theme) => {
    return createStyles({
        root: {
            margin: "auto",
            marginTop: "120px",
            marginBottom: "120px",
            [theme.breakpoints.down("xs")]: {
                width: "auto",
                paddingRight: `${theme.spacing(2)}px`,
                paddingLeft: `${theme.spacing(2)}px`,
                marginTop: theme.spacing(10),
                // marginBottom: theme.spacing(5),
                marginBottom: 0,
            },
            [theme.breakpoints.up("sm")]: {
                width: `${theme.breakpoints.width("sm") - 30}px`,
            },
            [theme.breakpoints.up("md")]: {
                width: `${theme.breakpoints.width("md") - 40}px`,
            },
            // [theme.breakpoints.up("lg")]: {
            //     width: `${theme.breakpoints.width("lg") - 60}px`,
            // },
        },
    });
};

export default MainContainerMediaQueries;
