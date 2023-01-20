import { SvgIconProps } from "@mui/material";

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

export interface ExperienceCard {
  name: string;
  highlightedName?: string;
  description?: string;
  highlightedSubText?: string;
  listItems?: string[];
  listHeader?: string;
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
    // mobile: string;
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
    // descPicture: string; //Animations Added
    descPictureAlt: string;
  };
  Services: Service[];
  Skills: Skills;
  Experiences: {
    education: ExperienceCard[];
    workExperiences: ExperienceCard[];
    projects: ExperienceCard[];
  };
  Contact: {
    ContactsCard: IContact[];
  };
}

export default IContent;
