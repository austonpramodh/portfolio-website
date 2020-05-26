import React from "react";
import Star from "./Star";

interface StarfieldAnimationProps {
    numParticles?: number;
    width: number;
    height: number;
}
export class StarSpaceAnimation extends React.PureComponent<StarfieldAnimationProps> {
    canvasRef = React.createRef<HTMLCanvasElement>();
    stars: Star[] = [];

    update = () => {
        this.stars.forEach(star => {
            star.update();
        });
    };

    eraseOldStar = (star: Star) => {
        if (!this.canvasRef.current) return;
        const ctx = this.canvasRef.current.getContext("2d");
        if (!ctx) return;

        const { x, y, radius, shadowBlur } = star.lastState;
        const halfWidth = radius + shadowBlur;
        const fullWidth = halfWidth * 2 + 1;

        const halfHeight = radius + shadowBlur + 1;
        const fullHeight = halfHeight * 2;

        ctx.save();
        ctx.clearRect(x - halfWidth, y - halfHeight, fullHeight, fullWidth);
        // ctx.fillStyle = 'black'
        ctx.restore();
    };

    drawNewStar = (star: Star) => {
        if (!this.canvasRef.current) return;
        const ctx = this.canvasRef.current.getContext("2d");
        if (!ctx) return;

        const { x, y, colorRGB, radius, shadowBlur, shadowColor, opacity } = star.getState();

        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2, false);

        ctx.fillStyle = `rgba(${colorRGB.r},${colorRGB.g}, ${colorRGB.b}, ${opacity})`;
        ctx.shadowColor = shadowColor;
        ctx.shadowBlur = shadowBlur;
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    };

    draw = () => {
        if (!this.canvasRef.current) return;
        const ctx = this.canvasRef.current.getContext("2d");
        if (!ctx) return;

        this.stars.forEach(star => {
            // erase old state
            this.eraseOldStar(star);
            // draw new state
            this.drawNewStar(star);
        });
    };

    tick = () => {
        this.draw();
        this.update();
        requestAnimationFrame(this.tick);
    };

    init = () => {
        const { height, width, numParticles = 150 } = this.props;
        this.stars = [];
        for (let i = 0; i < numParticles; i++) {
            this.stars.push(
                new Star({
                    x: { min: 0, max: width },
                    y: { min: 0, max: height },
                    z: { min: 0, max: width },
                    focal: width + height / 2,
                }),
            );
        }
    };

    componentDidMount() {
        this.init();
        this.tick();
    }

    componentDidUpdate() {
        this.init();
    }

    render() {
        return <canvas ref={this.canvasRef} height={this.props.height} width={this.props.width} />;
    }
}
