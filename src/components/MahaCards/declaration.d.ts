declare module "react-tilt" {
  interface IProps {
    options?: {
      reverse?: boolean; // reverse the tilt direction
      max?: number; // max tilt rotation (degrees)
      perspective?: number; // Transform perspective, the lower the more extreme the tilt gets.
      scale?: number; // 2 = 200%, 1.5 = 150%, etc..
      speed?: number; // Speed of the enter/exit transition
      transition?: boolean; // Set a transition on enter/exit.
      axis?: any; // What axis should be disabled. Can be X or Y.
      reset?: boolean; // If the tilt effect has to be reset on exit.
      easing?: string; // Easing on enter/exit.
    };
    onMouseEnter?: (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => void;
    onMouseMove?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onMouseLeave?: (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => void;
  }
  export default class Tilt extends React.Component<IProps> {}
}
