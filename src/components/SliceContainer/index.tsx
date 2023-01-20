import { useTheme, styled } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const CustomizedSection = styled("section")(({ theme }) => {
  return {
    backgroundColor: theme.palette.background.default,
  };
});

const SliceContainer: React.FunctionComponent<Props> = ({ children }) => {
  return <CustomizedSection>{children}</CustomizedSection>;
};

export default SliceContainer;
