import React from "react";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Service from "./Service";
import Skills from "./Skills";
import Experiences from "./Experiences";
import Contact from "./Contact";

interface Section {
    name: string;
    Component: React.ComponentType<any>;
    id: string;
}

export type SectionsInterface = Section[];

const Sections: SectionsInterface = [
    { name: "Home", Component: Home, id: "home" },
    { name: "About Me", Component: AboutMe, id: "about" },
    { name: "Services", Component: Service, id: "services" },
    { name: "Skills", Component: Skills, id: "skills" },
    { name: "Experiences", Component: Experiences, id: "experiences" },
    { name: "Contact", Component: Contact, id: "contact" },
];

export default Sections;
