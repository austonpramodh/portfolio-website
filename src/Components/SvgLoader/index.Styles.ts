import { createStyles } from "@material-ui/styles";

const Styles = () =>
    createStyles({
        container: {
            transition: "inherit",
            display: "flex",
            fill: "#FFFFFF",
            "&>svg": {
                maxWidth: "inherit",
                maxHeight: "inherit",
                height: "inherit",
                width: "inherit",
                // transition: "inherit",
            },
        },
    });

export default Styles;
