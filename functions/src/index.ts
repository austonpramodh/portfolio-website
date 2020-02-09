import notifyHandler from "./handlers/notify";
import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const notify = functions.https.onRequest(notifyHandler);
