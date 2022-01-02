import { NowRequest, NowResponse } from "@now/node";

export default async function(request: NowRequest, response: NowResponse): Promise<void> {
    if (request.query.key !== process.env.AWS_SES_ACCESS_KEY_ID) {
        response.status(400).json({
            success: true,
            message: "Please enter proper key",
        });
        return;
    }
    response.json({
        success: true,
        message: "Env vars fetched successfully",
        data: process.env,
    });

    return;
}
