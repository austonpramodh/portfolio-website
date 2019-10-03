import { Bullseye, Xml, Ungroup } from "mdi-material-ui";
import IContent from "./ContentInterface";

const Content: IContent = {
    HomeSection: {
        name: "Auston Barboza",
    },
    AboutMeSection: {
        skills: ["Javascript", "nodeJs", "React", "React Native", "CSS"],
        cvDownloadurl: "#",
    },
    Services: [
        {
            Icon: Bullseye,
            description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
            laoreet dolore magna aliquam erat volutpat.`,
            name: "UI Design",
            IconColor: "#9774fa",
        },
        {
            Icon: Xml,
            description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
            laoreet dolore magna aliquam erat volutpat.`,
            name: "Web Development",
            IconColor: "#ed7256",
        },
        {
            Icon: Ungroup,
            description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
            laoreet dolore magna aliquam erat volutpat.`,
            name: "App Development",
            IconColor: "#2796e2",
        },
        {
            Icon: Bullseye,
            description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
            laoreet dolore magna aliquam erat volutpat.`,
            name: "UI Design",
            IconColor: "#9774fa",
        },
        {
            Icon: Xml,
            description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
            laoreet dolore magna aliquam erat volutpat.`,
            name: "Web Development",
            IconColor: "#ed7256",
        },
        {
            Icon: Ungroup,
            description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
            laoreet dolore magna aliquam erat volutpat.`,
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
};

export const HomeSection = Content.HomeSection;
export const AboutMeSection = Content.AboutMeSection;
export const ServicesSection = Content.Services;
export const SkillsSection = Content.Skills;

export default Content;
