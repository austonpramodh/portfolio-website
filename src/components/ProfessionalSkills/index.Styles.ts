import { createStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const Styles = (theme: Theme) =>
  createStyles({
    skill: {
      minWidth: "50%",
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    progressContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: theme.spacing(1),
    },
    progress: {},
    progressPercentage: {
      position: "absolute",
    },
    eachSkills: {
      display: "flex",
      flexWrap: "wrap",
      marginTop: theme.spacing(3),
    },
  });

export default Styles;
