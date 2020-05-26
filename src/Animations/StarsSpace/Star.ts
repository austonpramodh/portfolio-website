import Color from "color";

function random(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

export interface StarOptions {
    x: { min: number; max: number };
    y: { min: number; max: number };
    z: { min: number; max: number };
    radius?: number;
    color?: string;
    shadowColor?: string;
    shadowBlurMultiplier?: number;
    speed?: number;
    focal: number;
}
class Star {
    public lastState: {
        x: number;
        y: number;
        radius: number;
        shadowBlur: number;
    };

    private defaultColor = "white";
    private defaultShadowColor = "#E3EAEF";
    private defaultShadowBlurMultiplier = 0.6;

    // init Boundries
    private xBoundry: { min: number; max: number; mid: number };
    private yBoundry: { min: number; max: number; mid: number };
    private zBoundry: { min: number; max: number };

    private x: number;
    private y: number;
    private z: number;

    // color
    private radius: number;
    private color: string;
    private colorRGB: { r: number; g: number; b: number };

    // private defaultColor = '#E3EAEF'
    private shadowColor: string;
    private shadowBlurMultiplier: number;
    private shadowBlur: number;
    private speed: number;
    private focal: number;

    private ColorObject: Color;

    constructor(options: StarOptions) {
        this.xBoundry = { ...options.x, mid: (options.x.max + options.x.min) / 2 };
        this.yBoundry = { ...options.y, mid: (options.y.max + options.y.min) / 2 };
        this.zBoundry = options.z;
        this.color = options.color || this.defaultColor;
        this.shadowColor = options.shadowColor || this.defaultShadowColor;
        this.radius = options.radius || 1;
        this.shadowBlurMultiplier = options.shadowBlurMultiplier || this.defaultShadowBlurMultiplier;

        this.speed = options.speed || 1;
        this.focal = options.focal;
        this.init();
        this.lastState = this.getState();
    }

    private init = () => {
        this.x = random(this.xBoundry.min, this.xBoundry.max);
        this.y = random(this.yBoundry.min, this.yBoundry.max);
        this.z = random(this.zBoundry.min, this.zBoundry.max);
        this.ColorObject = new Color(this.color);
        const rgbArray = this.ColorObject.rgb().array();
        this.colorRGB = {
            r: rgbArray[0],
            g: rgbArray[1],
            b: rgbArray[2],
        };
        this.shadowBlur = this.radius * this.shadowBlurMultiplier;
    };

    public update = () => {
        this.lastState = this.getState();
        this.z = this.z - this.speed;
        if (this.z <= 0) {
            this.init();
        }
    };

    public getState = () => {
        const centerX = this.xBoundry.mid;
        const centerY = this.yBoundry.mid;
        const focal = this.focal;
        // need to be updated

        const x = (this.x - centerX) * (focal / this.z) + this.x;
        const y = (this.y - centerY) * (focal / this.z) + this.y;
        const radius = this.radius * (focal / this.z);
        const opacity = (this.zBoundry.max - this.z) / this.zBoundry.max + 0.5;

        return {
            x,
            y,
            radius,
            color: this.color,
            colorRGB: this.colorRGB,
            opacity,
            shadowColor: this.shadowColor,
            shadowBlur: this.shadowBlur,
        };
    };
}

export default Star;
