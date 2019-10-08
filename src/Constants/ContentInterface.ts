import { SvgIconProps } from "@material-ui/core/SvgIcon";

type Icon = (props: SvgIconProps) => JSX.Element;
interface Service {
    Icon: Icon;
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

interface ContactCard {
    Icon: Icon;
    heading: string;
    content: string;
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
    Contact: {
        ContactsCard: ContactCard[];
    };
}

export default IContent;
