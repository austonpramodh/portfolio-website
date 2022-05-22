import { createStyles } from "@material-ui/styles";

const Styles = () =>
    createStyles({
        container: {
            transition: "inherit",
            display: "flex",
            "&>svg": {
                maxWidth: "inherit",
                maxHeight: "inherit",
                height: "inherit",
                width: "inherit",
                // transition: "inherit",
            },
        },
        fillColor: {
            fill: "#FFFFFF",
        },
    });

export default Styles;
