import { styled } from "@mui/material";
import { Element } from "react-scroll";

// FIXME: change the to section!
const SliceContainer = styled(Element)(({ theme }) => {
  return {
    backgroundColor: theme.palette.background.default,
  };
});

export default SliceContainer;
