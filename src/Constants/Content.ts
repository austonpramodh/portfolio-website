import {
    Apps as AppsIcon,
    Web as WebIcon,
    Cloud as CloudIcon,
    FacebookMessenger as FacebookMessengerIcon,
    Email as EmailIcon,
    MapMarker as MapMarkerIcon,
    GithubBox as GithubBoxIcon,
    // Gitlab as GitlabIcon,
    Facebook as FacebookIcon,
    Linkedin as LinkedinIcon,
    // Twitter as TwitterIcon,
} from "mdi-material-ui";
// import AboutMeImage from "../Assets/ab-img.png";
import ProfilePic from "../Assets/profilePic.jpg";
import IContent, { IContact, ISocialLink } from "./ContentInterface";
import BasicInfo from "./BasicInfo";

// const temporaryDescription = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
// laoreet dolore magna aliquam erat volutpat.`;

const ContactsList: IContact[] = [
    { Icon: EmailIcon, content: BasicInfo.email, heading: "Email", link: `mailto:${BasicInfo.email}` },
    {
        Icon: FacebookMessengerIcon,
        content: BasicInfo.facebook,
        heading: "Facebook",
        link: BasicInfo.facebook,
        mobileOnlyClickable: false,
    },
    { Icon: MapMarkerIcon, content: BasicInfo.address, heading: "Address" },
];

const SocialLinks: ISocialLink[] = [
    { Icon: LinkedinIcon, link: "", name: "LinkedIn" },
    { Icon: FacebookIcon, link: BasicInfo.facebook, name: "Facebook" },
    // { Icon: TwitterIcon, link: "", name: "Twitter" },
    { Icon: GithubBoxIcon, link: "https://www.github.com/bom6", name: "Github" },
    // { Icon: GitlabIcon, link: "", name: "GitLab" },
];

const Content: IContent = {
    HomeSection: {
        name: BasicInfo.name,
        position: BasicInfo.position,
        email: BasicInfo.email,
        location: BasicInfo.address,
        // mobile: BasicInfo.number,
        contactsList: ContactsList,
        socialLinks: SocialLinks,
        profilePicture: ProfilePic,
        profilePictureAlt: BasicInfo.name,
    },
    AboutMeSection: {
        // descPicture: AboutMeImage,//Animation Added as replacement
        descPictureAlt: "Full Stack Developer, Available",
        cvDownloadurl: "brenda-resume.pdf",
        description: `Hello, I’m a Brenda, web-developer based on Chennai. I have rich experience in web site building and customization. Also I am good at`,
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "React Native",
            "Flutter",
            "NodeJS",
            "Docker",
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
                name: "Masters in Computer Science from ",
                listHeader: "Related coursework:",
                listItems: [
                    "Cloud Computing",
                    "Natural Language Processing",
                    "Ecommerce",
                    "Database management system",
                    "The Architecture of Large - Scale Information Systems",
                    "Operating Systems",
                    "Defending Computer Networks",
                    "Software Engineering",
                ],
                highlightedName: "Cornell University Graduate School",
                highlightedSubText: "2015-2015",
            },
            {
                name: "Bachelor's Degree in Computer Science Engineering from",
                highlightedName: "NMAM Institute of Techonology, VTU | Nitte, India",
                description: "",
                highlightedSubText: "2008-2012",
            },
            {
                name: "College, Chemistry, Physics, Maths and Biology  from",
                highlightedName: "St.Mary's College, Shirva-574116 Udupi, India.",
                description: "",
                highlightedSubText: "2006-2008",
            },
        ],
        workExperiences: [
            {
                name: "Software Engineer at",
                highlightedName: "Element Data, Bellevue, Washington.",
                highlightedSubText: "Jul 2017 – Apr 2019",
                listHeader: "Responsibility",
                listItems: [
                    "Setting up single sign-on (SSO) with JWT (Json Web Token)",
                    "Technical leadership in automation of Docker container deployment to Amazon EC2 container with load balancer (ELB)",
                    "Performance optimization measures for web applications to reduce response times and enhance the end user experience.",
                    "Developing web pages using Node.js, Express.js, React framework with Google analytics and NoSQL backend",
                    "Static asset management using awscli, shell script, s3cmd and CloudFront distribution",
                    "Real time memory, CPU utilization and log monitoring using AWS CloudWatch.",
                    "Aws lambda function for Slack webhook integration and Alexa skill setup for one of the products",
                    "Setup active passive database replication and configuring AWS ELB",
                    "Integration test and unit test for MVC framework using selenium with node.js and php-unit",
                    "Training new hires about the products",
                ],
            },
            {
                name: "Software Development Engineer at",
                highlightedName: "Schlumberger, HCS Product Center, Houston, Texas Area.",
                highlightedSubText: "Mar 2016 – Jun 2017",
                listHeader: "Responsibility",
                listItems: [
                    "Designed and implemented an algorithm for auto feature detection of a wireline tool as a lead developer",
                    "Developed and managed new product along with consistent support for unplanned critical issues from high-profile field jobs",
                    "Improved measurable code qualities such as code complexity, code duplication, unit test coverage and static analysis checks",
                ],
            },
            {
                name: "Software Developer Intern at",
                highlightedName: "GrammaTech, Ithaca, New York Area.",
                highlightedSubText: "Jun 2015 – Aug 2015",
                listHeader: "Responsibility",
                listItems: [
                    "Established a data warehouse that will support historical analysis of nightly test result. Designed and implemented a star schema, suitable for the running analytic queries to monitor trends in various test metrics.",
                    "Authored ETL workflows on the Pentaho Data Integration framework to migrate data from PostgreSQL to MonetDB",
                    "Assisted several projects with JSP/JavaScript/d3 pages and python to organize and present summary data for test results from the current database",
                ],
            },
            {
                name: "Associate Technical Analyst at",
                highlightedName: "Oracle India Pvt. Ltd",
                highlightedSubText: "Jun 2012 - Dec 2014",
                listHeader: "Responsibility",
                listItems: [
                    "Monitored and maintained Oracle database application of top twenty-five clients of Oracle",
                    "Performed database backup, recovery",
                    "Cloning the instance for development and testing",
                    "Applied application patches and upgrades for database software",
                    "Troubleshooting and resolving database issues",
                    "Optimised database performance by tuning and query optimisation",
                    "Implemented Oracle Real Application Cluster (RAC) on UNIX platform]",
                ],
            },
            {
                name: "Oracle Apps DBA at",
                highlightedName: "Oracle India Pvt. Ltd",
                highlightedSubText: "Jun 2012 - Nov 2014",
            },
        ],
        projects: [
            {
                name: "Reporting Generating Service - Internal -",
                highlightedName: "Handlebars, Lambda functions, NodeJS",
                highlightedSubText:
                    "A report generating service built around lambda which adds data to the template and generates pdf using headless chrome and pushes it to AWS S3",
                listHeader: "Responsibility",
                listItems: [
                    "Develop Template in Handlebar Templating Engine",
                    "Precompile handlebar for better useablility",
                    "Configure Webpack to pack handlebar and CSS together for better package handling",
                ],
            },
        ],
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
