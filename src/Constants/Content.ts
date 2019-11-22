import {
    Bullseye,
    Xml,
    Ungroup,
    Phone as PhoneIcon,
    Email as EmailIcon,
    MapMarker as MapMarkerIcon,
    GithubBox as GithubBoxIcon,
    Gitlab as GitlabIcon,
    Facebook as FacebookIcon,
    Linkedin as LinkedinIcon,
} from "mdi-material-ui";
import AboutMeImage from "../Assets/ab-img.png";
import ProfilePic from "../Assets/profilePic.jpg";
import IContent, { IContact, ISocialLink } from "./ContentInterface";

const temporaryDescription = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
laoreet dolore magna aliquam erat volutpat.`;
const BasicInfo = {
    name: "Auston Pramodh Barboza",
    number: "+91 8095600003",
    email: "austonpramodh@gmail.com",
    address: "Navalur, Chennai",
    position: "Software Engineer",
};

const ContactsList: IContact[] = [
    { Icon: EmailIcon, content: BasicInfo.email, heading: "Email", link: "mailto:austonpramodh@gmail.com" },
    {
        Icon: PhoneIcon,
        content: BasicInfo.number,
        heading: "Phone",
        link: "callto:+918095600003",
        mobileOnlyClickable: true,
    },
    { Icon: MapMarkerIcon, content: BasicInfo.address, heading: "Address" },
];

const SocialLinks: ISocialLink[] = [
    { Icon: GithubBoxIcon, link: "https://www.github.com/austonpramodh", name: "Github" },
    { Icon: GitlabIcon, link: "https://www.gitlab.com/austonpramodh", name: "GitLab" },
    { Icon: FacebookIcon, link: "https://fb.me/austonpramodh", name: "Facebook" },
    { Icon: LinkedinIcon, link: "https://linkedin.com/in/austonpramodh", name: "LinkedIn" },
];

const Content: IContent = {
    HomeSection: {
        name: BasicInfo.name,
        position: BasicInfo.position,
        email: BasicInfo.email,
        location: BasicInfo.address,
        mobile: BasicInfo.number,
        contactsList: ContactsList,
        socialLinks: SocialLinks,
        profilePicture: ProfilePic,
    },
    AboutMeSection: {
        descPicture: AboutMeImage,
        skills: ["Dotnet", "Docker", "Craftsmen"],
        cvDownloadurl: "#",
        description: `Hello, I’m a Patrick, web-developer based on Paris. I have rich experience in web site design &
        building and customization. Also I am good at`,
    },
    Services: [
        {
            Icon: Bullseye,
            description: temporaryDescription,
            name: "Crafts Design",
            IconColor: "rgb(255,0,0)",
        },
        {
            Icon: Xml,
            description: temporaryDescription,
            name: "Web Development",
            IconColor: "#ed7256",
        },
        {
            Icon: Ungroup,
            description: temporaryDescription,
            name: "App Development",
            IconColor: "#2796e2",
        },
    ],
    Skills: {
        professionalSkills: [
            { name: "Communications", percentage: 80 },
            { name: "Team Work", percentage: 80 },
            { name: "Project Mangement", percentage: 80 },
            { name: "Creativity", percentage: 80 },
        ],
        technicalSkills: [
            { name: "Javascript", percentage: 90 },
            { name: "PHP", percentage: 50 },
            { name: "Tyescript", percentage: 60 },
            { name: "express", percentage: 90 },
        ],
    },
    Experiences: {
        education: [
            {
                name: "Art & Multimedia From",
                description: temporaryDescription,
                highlightedName: "Oxford University",
                highlightedSubText: "2005-2008",
            },
            {
                name: "Art & Multimedia From",
                description: temporaryDescription,
                highlightedName: "Oxford University",
                highlightedSubText: "2005-2008",
            },
            {
                name: "Art & Multimedia From",
                description: temporaryDescription,
                highlightedName: "Oxford University",
                highlightedSubText: "2005-2008",
            },
        ],
        workExperiences: {
            listHeader: "Responsibility",
            listItems: [
                {
                    name: "Dotnet Developer at",
                    highlightedName: "CES",
                    highlightedSubText: "2019-Present",
                    listItems: ["Backend Engineer", "Bottle Maker"],
                },
                {
                    name: "UI/UX Designer",
                    highlightedName: "IronSketch",
                    highlightedSubText: "2005-2008",
                    listItems: ["Validate CSS", "Project Management"],
                },
                {
                    name: "UI/UX Designer",
                    highlightedName: "IronSketch",
                    highlightedSubText: "2005-2008",
                    listItems: ["Validate CSS", "Project Management"],
                },
            ],
        },
    },
    Contact: {
        ContactsCard: ContactsList,
    },
};

export const HomeSection = Content.HomeSection;
export const AboutMeSection = Content.AboutMeSection;
export const ServicesSection = Content.Services;
export const SkillsSection = Content.Skills;
export const ExperiencesSection = Content.Experiences;
export const ContactsSection = Content.Contact;

export default Content;
