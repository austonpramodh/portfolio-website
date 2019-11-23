import React from "react";
import Styles from "./index.Styles";

const PageLoading: React.FC = () => {
    return (
        <React.Fragment>
            <div style={{ ...(Styles.container as React.CSSProperties) }}>
                <div style={{ ...(Styles.hourglassContainer as React.CSSProperties) }}>
                    <span style={{ ...(Styles.hourglass as React.CSSProperties) }}></span>
                </div>
            </div>
        </React.Fragment>
    );
};

export default PageLoading;

//helper for exposing directory for Animation.css
export const PageLoadingDirectory = __dirname;

//helper for maintaining same id and avoiding typo in cleanDom module and startScript
export const PageLoadingId = "pageLoading";
export const PageLoadingStyleId = "pageLoadingStyles";
