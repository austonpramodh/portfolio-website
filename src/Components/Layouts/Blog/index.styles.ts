import { createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

const Styles = (theme: Theme) => {
    return createStyles({
        container: {
            paddingRight: theme.spacing(3),
            paddingLeft: theme.spacing(3),
            marginRight: "auto",
            marginLeft: "auto",

            // Full width for (xs, extra-small: 0px or larger) and (sm, small: 600px or larger)
            [theme.breakpoints.up("md")]: {
                // medium: 960px or larger
                width: 920,
                // width: 700,
            },
            [theme.breakpoints.up("lg")]: {
                // large: 1280px or larger
                width: 1170,
            },
            [theme.breakpoints.up("xl")]: {
                // extra-large: 1920px or larger
                width: 1366,
            },
        },
    });
};

export default Styles;
