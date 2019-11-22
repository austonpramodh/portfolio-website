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

export interface IContact {
    Icon: Icon;
    heading: string;
    content: string;
    link?: string;
    mobileOnlyClickable?: boolean;
}

export interface ISocialLink {
    Icon: Icon;
    name: string;
    link: string;
}
interface IContent {
    HomeSection: {
        name: string;
        position: string;
        email: string;
        mobile: string;
        location: string;
        contactsList: IContact[];
        socialLinks: ISocialLink[];
        profilePicture: string;
        profilePictureAlt: string;
    };
    AboutMeSection: {
        description: string;
        skills: string[];
        cvDownloadurl: string;
        descPicture: string;
        descPictureAlt: string;
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
        ContactsCard: IContact[];
    };
}

export default IContent;
