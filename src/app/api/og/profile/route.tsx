import fs from "fs/promises";
import mime from "mime-types";
import { ImageResponse } from "next/og";
import { type NextRequest } from "next/server";
import path from "path";
import * as z from "zod";

export const runtime = "nodejs";

const schema = z.object({
    size: z.coerce.number().default(1),
});

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const rawData = {} as Record<string, string>;

        for (const [key, value] of searchParams.entries()) {
            rawData[key] = value;
        }

        const parsedData = schema.parse(rawData);

        // Load profile image
        const imagePath = path.join(process.cwd(), "src", "app", "profile.jpg");
        const imageBuffer = await fs.readFile(imagePath);
        const ext = path.extname(imagePath);
        const mimeType = mime.lookup(ext) || "application/octet-stream";
        const base64Image = `data:${mimeType};base64,${imageBuffer.toString("base64")}`;

        return new ImageResponse(
            (
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "linear-gradient(135deg, #1f2937, #3b82f6)",
                        fontFamily: "sans-serif",
                        color: "white",
                        textAlign: "center",
                        padding: `${40 * parsedData.size}px`,
                    }}
                >
                    {/* Profile image in center */}
                    <img
                        src={base64Image}
                        alt="Profile"
                        style={{
                            width: 360 * parsedData.size,
                            height: 360 * parsedData.size,
                            borderRadius: "50%",
                            border: "10px solid rgba(255,255,255,0.9)",
                            boxShadow: "0 0 60px rgba(59,130,246,0.6)",
                            objectFit: "cover",
                            marginBottom: `${40 * parsedData.size}px`,
                        }}
                    />

                    {/* Name / Heading */}
                    <h1
                        style={{
                            fontSize: 72 * parsedData.size,
                            fontWeight: "bold",
                            margin: 0,
                            lineHeight: 1.2,
                            textShadow: "0 6px 24px rgba(0,0,0,0.5)",
                        }}
                    >
                        👋 Hey, I’m Auston!
                    </h1>

                    {/* Tagline */}
                    <p
                        style={{
                            fontSize: 40 * parsedData.size,
                            margin: 0,
                            maxWidth: "90%",
                            lineHeight: 1.4,
                            color: "rgba(255,255,255,0.9)",
                            textShadow: "0 3px 10px rgba(0,0,0,0.4)",
                            marginTop: `${20 * parsedData.size}px`,
                        }}
                    >
                        Crafting code & ideas into something beautiful 🚀
                    </p>
                </div>
            ),
            {
                width: 1200 * parsedData.size,
                height: 630 * parsedData.size,
            }
        );
    } catch (e) {
        console.log(`${e}`);

        if (e instanceof z.ZodError) {
            return Response.json(
                {
                    error: "Invalid query parameters",
                    details: JSON.parse(e.message),
                },
                { status: 400 }
            );
        }

        return Response.json(
            { error: "Internal Server Error" },
            {
                status: 500,
            }
        );
    }
}
