import ErrorResponseModel from "../classes/errorResponse";
import { IRequestBody } from "../notify";
import * as yup from "yup";
import ErrorCodesMessages from "./ErrorCodesMessages";

// function validateProperty(
//     keyType: { key: string; type: string; message: string },
//     body: IRequestBody,
//     errMessages: string[],
// ) {
//     if (typeof body[keyType.key] != keyType.type) errMessages.push(keyType.message);
// }

// const validateBody = (body: IRequestBody) => {
//     const keysTypes = [
//         { key: "email", type: "string", message: "Email is required, Missing Parameter in body" },
//         { key: "message", type: "string", message: "Message is required, Missing Parameter in body" },
//         { key: "name", type: "string", message: "Name is required, Missing Parameter in body" },
//     ];
//     const errMessages: string[] = [];
//     keysTypes.forEach(eachKeyType => {
//         validateProperty(eachKeyType, body, errMessages);
//     });
//     // validate
//     if (errMessages.length > 0)
//         throw new ErrorResponseModel({ code: 400, message: "Validation Error", statusCode: 400 });
// };

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup
        .string()
        .email()
        .required(),
    message: yup.string().required(),
});

const validateBody = async (bodyJSON: IRequestBody) => {
    try {
        await schema.validate(bodyJSON, { abortEarly: false });
    } catch (error) {
        const { validationError } = ErrorCodesMessages;
        throw new ErrorResponseModel({
            code: validationError.code,
            message: validationError.message,
            statusCode: validationError.statusCode,
            error: error?.errors,
        });
    }
};

export default validateBody;
