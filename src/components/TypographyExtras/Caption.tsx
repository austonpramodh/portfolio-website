import { Typography } from "@mui/material";

const Caption: React.FunctionComponent<{
    children: React.ReactNode;
}> = ({ children }) => {
    return (
        <Typography color="textSecondary" variant="caption">
            {children}
        </Typography>
    );
};

export default Caption;
