import { createStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const Styles = (theme: Theme) =>
  createStyles({
    inputField: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      // "& fieldset": {
      //   borderColor: "rgb(255,255,255,0.5)",
      // },
      // "& .MuiInputBase-root.Mui-disabled": {
      //   color: "rgb(255,255,255,0.3)",
      //   "& fieldset": {
      //     borderColor: "rgb(255,255,255,0.5)",
      //   },
      // },
    },
    button: {
      width: "80%",
      borderRadius: "20px",
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    buttonDisabled: {
      color: `${theme.palette.text.primary} !important`,
      background: `${theme.palette.primary.main} !important`,
      opacity: 0.3,
    },
    messageInputField: {
      height: "100px",
    },
    errorText: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      height: "2.6rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });

export default Styles;
