// import EmailJS from "emailjs-com";
// import Config from "../Constants/Config";

interface IEmailParams {
    name: string;
    email: string;
    message: string;
}
export const sendEmail = ({ email, message, name }: IEmailParams) => {
    return (
        fetch("/.netlify/functions/notify", {
            method: "post",
            body: JSON.stringify({ name, message, email }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            // .then(res => console.log(res))
            .then(res => res.json())
    );
    // return EmailJS.send(Config.ServiceId, Config.TemplateID, params, Config.UserID);
};
