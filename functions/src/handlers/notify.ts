import config from "../config/config.json";
import serviceAccountKey from "../config/serviceAccountKey.json";
import userNotificationTemplate from "../templates/user";
import HostNotificationTemplate from "../templates/host";
import { Request, Response } from "firebase-functions";
import { SES } from "aws-sdk";

import cors from "cors";
import admin from "firebase-admin";

const corsMiddleware = cors({ origin: true });
const SESConfig: SES.ClientConfiguration = {
    apiVersion: "2010-12-01",
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey,
    region: config.region,
};

const mailer = new SES(SESConfig);

interface RequestBody {
    //From::
    sourceAddress: string;
    replyToAddress: string;
    sourceName: string;
    //To:
    toAddress: string;
    message: string;
    toName: string;
}

const notifyHandler = (request: Request, response: Response) =>
    corsMiddleware(request, response, async () => {
        //Allow only POST requests
        if (request.method.toLowerCase() != "post") {
            return response.status(403).json({ success: false, message: "only post method allowed" });
        }
        try {
            const body = request.body as RequestBody;
            //initialize app for firestore access
            try {
                admin.initializeApp({
                    credential: admin.credential.cert({
                        clientEmail: serviceAccountKey.client_email,
                        privateKey: serviceAccountKey.private_key,
                        projectId: serviceAccountKey.project_id,
                    }),
                    databaseURL: `https://${serviceAccountKey.project_id}.firebaseio.com`,
                });
            } catch (error) {
                if (error && error.code != "app/duplicate-app") throw error;
            }

            //Store the reuquest in DB
            const firestoreCollection = admin.firestore().collection(config.firestoreCollection);

            await firestoreCollection.add({
                createdAt: new Date().getTime(),
                from: body.toName,
                message: body.message,
                name: body.toName,
                source: body.sourceAddress,
            });

            //send an email to the user for confirmation
            const userEmailParams = userNotificationTemplate({
                message: body.message,
                replyToAddress: body.replyToAddress,
                toName: body.toName,
                sourceEmail: body.sourceAddress,
                toAddress: body.toAddress,
                sourceName: body.sourceName,
            });
            await mailer.sendEmail(userEmailParams).promise();
            //send an email to the sender about being contacted
            const senderEmailParams = HostNotificationTemplate({
                message: body.message,
                replyToAddress: body.replyToAddress,
                toName: body.toName,
                sourceAddress: body.sourceAddress,
                toAddress: body.replyToAddress,
                sourceName: body.toName,
            });
            await mailer.sendEmail(senderEmailParams).promise();

            //TODO:Complete both above promises parallely
            return response.json({ success: true, message: "Notification sent successfully" });
        } catch (error) {
            return response.status(400).json({ success: false, error });
        }
    });

export default notifyHandler;
