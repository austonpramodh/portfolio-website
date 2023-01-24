import React from "react";
import { withStyles, WithStyles } from "@mui/styles";
import {
  useMediaQuery,
  useTheme,
  Theme,
  Paper as MaterialPaper,
} from "@mui/material";
import Tilt from "react-tilt";
import Styles from "./index.Styles";

interface IProps {
  className?: string;
  children: JSX.Element;
}

const MahaPaper: React.FC<IProps & WithStyles<typeof Styles>> = ({
  classes,
  className,
  children,
}) => {
  const theme: Theme = useTheme();
  const isMobileScreen = !useMediaQuery(theme.breakpoints.up("sm"));
  const paper = (
    <MaterialPaper className={`${classes.paper} ${className}`}>
      {children}
    </MaterialPaper>
  );
  return isMobileScreen ? (
    <React.Fragment>{paper}</React.Fragment>
  ) : (
    <Tilt options={{ max: 25, scale: 1, reset: true, reverse: true }}>
      {paper}
    </Tilt>
  );
};

export default withStyles(Styles)(MahaPaper);
