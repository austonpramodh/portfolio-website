import Home from "./Home";
import AboutMe from "./AboutMe";
import Service from "./Service";
import Skills from "./Skills";
import Experiences from "./Experiences";

interface Section {
    name: string;
    Component: any;
    id: string;
}

const Sections: Section[] = [
    { name: "Home", Component: Home, id: "home" },
    { name: "About Me", Component: AboutMe, id: "about" },
    { name: "Services", Component: Service, id: "services" },
    { name: "Skills", Component: Skills, id: "skills" },
    { name: "Experiences", Component: Experiences, id: "experiences" },
];

export default Sections;
