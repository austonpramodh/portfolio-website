import { createStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const Styles = (theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      marginBottom: `${theme.spacing(1)}px !important`,
    },
    contactCardsContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      [theme.breakpoints.up("md")]: {
        flexDirection: "row",
      },
      "& div": {
        zIndex: 1,
      },
    },
    iconContainer: {
      height: "70px",
      width: "70px",
      borderRadius: "50%",
      border: `1px solid ${theme.palette.primary.main}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1),
      overflow: "hidden",
    },
    icon: {},
    cardHeading: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    content: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    footer: {
      width: "100%",
      display: "flex",
      flexDirection: "column-reverse",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.up("md")]: {
        flexDirection: "row",
      },
    },
    footerText: {
      fontWeight: "bold",
      width: "100%",
    },
    footerLinksContainer: {
      width: "100%",
    },
    contactFormHeading: {
      marginTop: theme.spacing(6),
    },
    header: {
      marginBottom: theme.spacing(2),
    },
  });

export default Styles;
