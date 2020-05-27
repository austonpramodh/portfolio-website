import React, { Component } from "react";
import { withStyles, WithStyles, CircularProgress } from "@material-ui/core";
import Styles from "./index.Styles";

interface EmbeddedGistIframeProps extends WithStyles<typeof Styles> {
    gistUrl: string;
    file?: string;
}

interface EmbeddedGistIframeState {
    height: number;
    isLoading: boolean;
}

class EmbeddedGistIframe extends Component<EmbeddedGistIframeProps, EmbeddedGistIframeState> {
    gistUrl: string;
    file: string | undefined;
    iframeRef = React.createRef<HTMLIFrameElement>();

    constructor(props: EmbeddedGistIframeProps) {
        super(props);
        this.gistUrl = props.gistUrl;
        this.file = props.file;
        this.state = {
            height: 300,
            isLoading: true,
        };
    }

    defineUrl = () => {
        const { gistUrl, file } = this.props;

        const fileArg = file ? `?file=${file}` : "";

        return `${gistUrl}.js${fileArg}`;
    };

    init = () => {
        const iframRef = this.iframeRef.current;
        if (!iframRef) return;
        const iframeDoc = iframRef.contentDocument;
        iframeDoc?.open();
        iframeDoc?.write(
            `<html><body><script type="text/javascript" src="${this.defineUrl()}"></script></body></html>`,
        );
        iframeDoc?.close();
    };

    componentDidMount() {
        this.init();
    }

    onIframeLoad = () => {
        const height = this.iframeRef.current?.contentDocument?.body.scrollHeight;
        this.setState({ height: height || 300, isLoading: false });
    };

    render() {
        const { classes } = this.props;
        const { isLoading } = this.state;
        return (
            <div className={classes.container}>
                {isLoading && (
                    <CircularProgress variant="indeterminate" color="primary" size={40} className={classes.loader} />
                )}
                <iframe
                    className={`${classes.iframe} ${isLoading ? classes.iframeInvisible : ""}`}
                    onLoad={this.onIframeLoad}
                    ref={this.iframeRef}
                    frameBorder={0}
                    width="100%"
                    height={`${this.state.height}px`}
                />
            </div>
        );
    }
}

export default withStyles(Styles)(EmbeddedGistIframe);
