import { styled } from "@mui/material";

// FIXME: change the to section!
const SliceContainer = styled("section")(({ theme }) => {
    return {
        backgroundColor: theme.palette.background.default,
        display: "flex",
    };
});

export default SliceContainer;
