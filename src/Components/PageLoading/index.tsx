import React from "react";
import Styles from "./index.Styles";
import "./Animation.css";

const PageLoading: React.FC = () => {
    return (
        <React.Fragment>
            <div style={{ ...Styles.container }}>
                <div style={{ ...Styles.hourglassContainer }}>
                    <span style={{ ...Styles.hourglass }}></span>
                </div>
            </div>
        </React.Fragment>
    );
};

export default PageLoading;
