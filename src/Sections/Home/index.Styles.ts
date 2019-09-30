import { createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

const Styles = (theme: Theme) =>
    createStyles({
        container: {
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            [`@media (min-width: ${700}px)`]: {
                flexDirection: "row-reverse",
            },
        },
        avatar: {
            height: 240,
            width: 240,
            border: "20px solid rgba(0, 0, 0, 0.4)",
        },
        avatarBorder: {
            border: "20px solid rgba(0, 0, 0, 0.9)",
            borderRadius: "50%",
            margin: "8px",
            [`@media (min-width: ${700}px)`]: {
                marginLeft: "6rem",
            },
        },
        promo: {
            backgroundColor: theme.palette.secondary.main,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 0,
            padding: "10px 30px",
            fontWeight: "bold",
            fontSize: "14px",
            lineHeight: "24px",
            letterSpacing: "1px",
            margin: 8,
        },
        listItem: {
            borderRadius: 20,
            transition: "all 0.3s ease-in",
            cursor: "pointer",
            "&:hover": {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.background.default,
            },
        },
        listItemIcon: {
            marginRight: "10px",
        },
        name: {
            fontSize: 42,
            fontWeight: 600,
            lineHeight: "54px",
        },
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
            "&:hover": {
                backgroundColor: "white",
                color: theme.palette.background.default,
            },
        },
        ContactsListHovered: {},
    });

export default Styles;
