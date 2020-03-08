interface BasicInfoInterface {
    name: string;
    email: string;
    [key: string]: string;
}

const BasicInfo: BasicInfoInterface = {
    name: "Auston Pramodh Barboza",
    facebook: "m.me/austonpramodh",
    email: "austonpramodh@gmail.com",
    address: "Chennai, India",
    position: "Software Engineer",
    // number: "",
};

export default BasicInfo;
