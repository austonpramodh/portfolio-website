import { SvgIconProps } from "@material-ui/core/SvgIcon";

interface Service {
    Icon: (props: SvgIconProps) => JSX.Element;
    IconColor: string; //Color in hex code like #9774fa
    name: string;
    description: string;
}

export interface Skill {
    name: string;
    percentage: number;
}

interface Skills {
    technicalSkills: Skill[];
    professionalSkills: Skill[];
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
    Skills: Skills;
}

export default IContent;
