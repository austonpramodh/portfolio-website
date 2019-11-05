import { Bullseye, Xml, Ungroup } from "mdi-material-ui";
import IContent from "./ContentInterface";

const temporaryDescription = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
laoreet dolore magna aliquam erat volutpat.`;

const Content: IContent = {
    HomeSection: {
        name: "Aswathy Mohan",
    },
    AboutMeSection: {
        skills: ["Dotnet", "Docker", "Craftsmen"],
        cvDownloadurl: "#",
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
};

export const HomeSection = Content.HomeSection;
export const AboutMeSection = Content.AboutMeSection;
export const ServicesSection = Content.Services;
export const SkillsSection = Content.Skills;
export const ExperiencesSection = Content.Experiences;

export default Content;
