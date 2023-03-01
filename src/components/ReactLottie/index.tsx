import React from "react";
import lottie, { AnimationItem, AnimationConfigWithData, SVGRendererConfig, AnimationDirection } from "lottie-web";
import Styles from "./index.Styles";
import { withStyles, WithStyles } from "@mui/styles";

//TODO: Segments implmentation and eventListeners
//goToAndStop
//setQuality

interface LottieProps {
    // eventListeners: PropTypes.arrayOf(PropTypes.object),
    segments?: [number, number] | [number, number][];
    forceSegments?: boolean;
    options?: AnimationConfigWithData;
    isStopped?: boolean;
    isPaused?: boolean;
    speed?: number;
    loop?: boolean | number;
    direction?: AnimationDirection;
    onClick?: () => void;
    title?: string;
    style?: React.CSSProperties;
    className?: string;
    rendererSettings?: SVGRendererConfig;
    animationData: any;
}

class Lottie extends React.Component<LottieProps & WithStyles<typeof Styles>> {
    containerRef = React.createRef<HTMLDivElement>();

    animationItem: AnimationItem | null = null;

    pause() {
        const { isPaused, segments, forceSegments } = this.props;
        if (isPaused) {
            // console.log("pause");
            this.animationItem?.pause();
        } else if (segments && !isPaused) {
            this.animationItem?.playSegments(segments, forceSegments);
        } else if (!isPaused) {
            // console.log("play");
            this.animationItem?.play();
        }
    }

    stop() {
        if (this.props.isStopped) {
            this.animationItem?.stop();
        } else if (!this.props.isPaused) {
            this.animationItem?.play();
        }
    }

    initAnimation = () => {
        if (this.containerRef.current) {
            const {
                loop = true,
                rendererSettings,
                isStopped = false,
                animationData,
                segments,
                forceSegments = false,
                isPaused = false,
            } = this.props;

            const autoPlay = !isStopped && !isPaused;

            const options: AnimationConfigWithData = {
                container: this.containerRef.current,
                renderer: "svg",
                loop: loop,
                animationData,
                autoplay: autoPlay,
                rendererSettings: rendererSettings,
            };
            this.animationItem = lottie.loadAnimation(options);

            if (this.props.speed) this.animationItem.setSpeed(this.props.speed);

            if (this.props.direction) this.animationItem.setDirection(this.props.direction);

            if (segments && autoPlay) this.animationItem.playSegments(segments, forceSegments);
        }
    };

    restartAnimation() {
        this.animationItem?.destroy();
        this.initAnimation();
    }

    componentDidMount() {
        this.initAnimation();
    }

    componentDidUpdate(prevProps: LottieProps) {
        if (this.props.isStopped != prevProps.isStopped) {
            // console.log("componentDidUpdate stop");
            this.stop();
        }
        if (this.props.isStopped) return;

        // console.log(prevProps);
        if (this.props.isPaused != prevProps.isPaused || this.props.segments != prevProps.segments) {
            // console.log("componentDidUpdate pause");
            this.pause();
        }

        if (this.props.speed != prevProps.speed) {
            this.animationItem?.setSpeed(this.props.speed || 1);
        }

        if (this.props.direction != prevProps.direction) {
            this.animationItem?.setDirection(this.props.direction || 1);
        }

        if (this.props.loop != prevProps.loop) {
            this.restartAnimation();
        }
    }

    componentWillUnmount() {
        // console.log("destroyed");
        this.animationItem?.destroy();
    }

    render() {
        const { className = "", onClick, style, title, classes } = this.props;
        return (
            <div
                onClick={onClick}
                className={`${classes.container} ${className}`}
                title={title}
                style={style}
                ref={this.containerRef}
            />
        );
    }
}

export default withStyles(Styles)(Lottie);
