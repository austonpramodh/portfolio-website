import { createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

const Styles = (theme: Theme) =>
    createStyles({
        linksList: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
        },
        linksListItem: {
            width: "unset",
        },
        LinksListItemIcon: {
            display: "flex",
            transition: "all 0.3s ease-in",
            "& > span": {
                maxWidth: 24,
                maxHeight: 24,
            },
            "&:hover": {
                backgroundColor: "white",
                "& > span": { fill: theme.palette.background.default },
            },
        },
    });

export default Styles;
