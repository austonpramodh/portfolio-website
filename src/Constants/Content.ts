import {
    Apps as AppsIcon,
    Web as WebIcon,
    Cloud as CloudIcon,
    FacebookMessenger as FacebookMessengerIcon,
    Email as EmailIcon,
    MapMarker as MapMarkerIcon,
    GithubBox as GithubBoxIcon,
    Gitlab as GitlabIcon,
    Facebook as FacebookIcon,
    Linkedin as LinkedinIcon,
} from "mdi-material-ui";
// import AboutMeImage from "../Assets/ab-img.png";
import ProfilePic from "../Assets/profilePic.jpg";
import IContent, { IContact, ISocialLink } from "./ContentInterface";

// const temporaryDescription = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
// laoreet dolore magna aliquam erat volutpat.`;

const BasicInfo = {
    name: "Auston Pramodh Barboza",
    number: "+91 8095600003",
    facebook: "m.me/austonpramodh",
    email: "austonpramodh@gmail.com",
    address: "Chennai, India",
    position: "Software Engineer",
};

const ContactsList: IContact[] = [
    { Icon: EmailIcon, content: BasicInfo.email, heading: "Email", link: "mailto:austonpramodh@gmail.com" },
    {
        Icon: FacebookMessengerIcon,
        content: BasicInfo.facebook,
        heading: "Facebook",
        link: "https://m.me/austonpramodh",
        mobileOnlyClickable: false,
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
        profilePictureAlt: "Auston Pramodh Barboza",
    },
    AboutMeSection: {
        // descPicture: AboutMeImage,//Animation Added as replacement
        descPictureAlt: "Web Developer, Available",
        cvDownloadurl: "#",
        description: `Hello, I’m a Auston, web-developer based on Chennai. I have rich experience in web site building and customization. Also I am good at`,
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "React Native",
            "Flutter",
            "NodeJS",
            "Dockers",
            "Azure",
            "Ubuntu",
        ],
    },
    Services: [
        {
            Icon: WebIcon,
            description:
                "I love Web in general, I am very good at developing web apps in React and even Optimize to the best level possible.",
            name: "Web Development",
            IconColor: "#ed7256",
        },
        {
            Icon: AppsIcon,
            description:
                "A passionate Mobile Applications Developer, looking around for problems in real world to solve.",
            name: "Mobile Applications",
            IconColor: "rgb(255,0,0)",
        },
        {
            Icon: CloudIcon,
            description:
                "Networking and building new applications around the cloud is the fun which i love to do every time.",
            name: "Devops",
            IconColor: "#2796e2",
        },
    ],
    Skills: {
        technicalSkills: [
            { name: "Javascript", percentage: 90 },
            { name: "ReactJS", percentage: 84 },
            { name: "React Native", percentage: 80 },
            { name: "NodeJS", percentage: 90 },
            { name: "Flutter", percentage: 70 },
            { name: "Docker", percentage: 60 },
            { name: "GIT", percentage: 90 },
        ],
        professionalSkills: [
            { name: "Communications", percentage: 90 },
            { name: "Team Work", percentage: 92 },
            { name: "Project Mangement", percentage: 80 },
            { name: "Creativity", percentage: 70 },
        ],
    },
    Experiences: {
        education: [
            {
                name: "BTech, IT from",
                description:
                    "Completed by Btech in Information Technology from Alliance College of Engineering and Design ",
                highlightedName: "Alliance University",
                highlightedSubText: "2015-2019",
            },
            {
                name: "+2 from ",
                description: "",
                highlightedName: "St. John's Pre-University College",
                highlightedSubText: "2013-2015",
            },
        ],
        workExperiences: {
            listHeader: "Responsibility",
            listItems: [
                {
                    name: "Mobile Applications Developer at",
                    highlightedName: "CES IT",
                    highlightedSubText: "2019 July - Present",
                    listItems: [
                        "Develop Mobile Application using Flutter",
                        "Develop Mobile Application using React Native, Redux",
                        "Handle Client Calls, Requirements",
                    ],
                },
                {
                    name: "Web Applications Developer at",
                    highlightedName: "Gyanmatrix Technologies",
                    highlightedSubText: "2019 Jan - 2019 June",
                    listItems: ["Develop Web Application in ReactJS", "Develop APIs in NodeJS"],
                },
                {
                    name: "Web Applications Developer at",
                    highlightedName: "Foscio",
                    highlightedSubText: "2018 May - 2018 Dec",
                    listItems: ["Develop Applications in ReactJS", "Develop Backend using NodeJS"],
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
