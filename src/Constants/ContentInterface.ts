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

interface Education {
    name: string;
    highlightedName: string;
    highlightedSubText: string;
    description: string;
}

interface WorkExperiences {
    name: string;
    highlightedName: string;
    highlightedSubText: string;
    listItems: string[];
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
    Experiences: {
        education: Education[];
        workExperiences: {
            listHeader: string;
            listItems: WorkExperiences[];
        };
    };
}

export default IContent;
