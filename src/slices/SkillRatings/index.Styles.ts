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
    technicalSkillsContainer: {
      width: "100%",
      marginBottom: theme.spacing(4),
    },
    professionalSkillsContainer: {},
  });

export default Styles;
