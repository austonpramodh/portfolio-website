import IContent from "./ContentInterface";

const Content: IContent = {
    HomeSection: {
        name: "Auston Barboza",
    },
    AboutMeSection: {
        skills: ["Javascript", "nodeJs", "React", "React Native", "CSS"],
        cvDownloadurl: "#",
    },
};

export const HomeSection = Content.HomeSection;
export const AboutMeSection = Content.AboutMeSection;

export default Content;
