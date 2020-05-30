import React from "react";
import { withStyles, WithStyles } from "@material-ui/styles";
import Styles from "./index.Styles";
const Footer: React.SFC<WithStyles<typeof Styles>> = ({ classes }) => {
    return (
        <footer>
            <p className={classes.container}>
                Proudly published by{" "}
                <a href="https://auston.dev" target="_blank" rel="noopener noreferrer">
                    <strong>
                        <em>Auston Pramodh Barboza</em>
                    </strong>
                </a>
                <br />
            </p>
        </footer>
    );
};

export default withStyles(Styles)(Footer);
