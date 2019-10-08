import EmailJS from "emailjs-com";
import Config from "../Constants/Config";

interface IEmailParams {
    name: string;
    email: string;
    message: string;
}
export const sendEmail = (params: IEmailParams) => {
    return EmailJS.send(Config.ServiceId, Config.TemplateID, params, Config.UserID);
};
