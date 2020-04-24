import React from "react";
import animationData from "../../Assets/11528-web-site-development.json";

// import animationData from "../../Assets/11528-web-site-development.json";

import LottieReact from "./index";

class Lottie extends React.Component<
    {},
    {
        isPaused: boolean;
        showAnime: boolean;
        isStopped: boolean;
        loop: boolean;
    }
> {
    state = {
        isPaused: false,
        showAnime: false,
        isStopped: false,
        loop: false,
    };
    render() {
        const { isPaused, showAnime, isStopped, loop } = this.state;
        return (
            <div>
                <button onClick={() => this.setState({ isPaused: false })}>play</button>
                <button onClick={() => this.setState({ isPaused: true })}>pause</button>
                Status:{isPaused ? "Paused" : "Not Paused"}
                <br />
                <button onClick={() => this.setState({ showAnime: !showAnime })}>{showAnime ? "Hide" : "Show"}</button>
                <br />
                <button onClick={() => this.setState({ isStopped: false })}>play</button>
                <button onClick={() => this.setState({ isStopped: true })}>stop</button>
                Status:{isStopped ? "Stopped" : "Not stopped"}
                <br />
                <button onClick={() => this.setState({ loop: false })}>stop loop</button>
                <button onClick={() => this.setState({ loop: true })}>loop</button>
                Status:{loop ? "Looped" : "Not looped"}
                {showAnime && (
                    <LottieReact animationData={animationData} loop={loop} isPaused={isPaused} isStopped={isStopped} />
                )}
            </div>
        );
    }
}

export default Lottie;
