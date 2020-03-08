interface BasicInfoInterface {
    name: string;
    email: string;
    [key: string]: string;
}

const BasicInfo: BasicInfoInterface = {
    name: "Brenda Olivia Martis",
    facebook: "https://m.me/brenda.martis.1",
    email: "brendaoliviamartis@gmail.com",
    address: "Seattle, US",
    position: "Senior Software Engineer",
    // number: "",
};

export default BasicInfo;
