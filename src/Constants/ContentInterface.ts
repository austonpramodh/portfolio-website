import { SvgIconProps } from "@material-ui/core/SvgIcon";

interface Service {
    Icon: (props: SvgIconProps) => JSX.Element;
    IconColor: string; //Color in hex code like #9774fa
    name: string;
    description: string;
}
interface IContent {
    HomeSection: {
        name: string;
    };
    AboutMeSection: {
        skills: string[];
        cvDownloadurl: string;
    };
    Services: Service[];
}

export default IContent;
