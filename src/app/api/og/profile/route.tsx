import fs from "fs/promises";
import mime from "mime-types";
import { ImageResponse } from "next/og";
import { type NextRequest } from "next/server";
import path from "path";
import * as z from "zod";

export const runtime = "nodejs";

const schema = z.object({
    // height: z.coerce.number().default(630),
    // width: z.coerce.number().default(1200),
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
                        flexDirection: "row",
                        background: "linear-gradient(135deg, #1f2937, #3b82f6)",
                        fontFamily: "sans-serif",
                        color: "white",
                    }}
                >
                    {/* LEFT: Profile image section */}
                    <div
                        style={{
                            width: "40%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            background: "rgba(255,255,255,0.05)",
                            borderRight: "2px solid rgba(255,255,255,0.1)",
                        }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={base64Image}
                            alt="Profile"
                            style={{
                                width: 280 * parsedData.size,
                                height: 280 * parsedData.size,
                                maxWidth: "100%",
                                maxHeight: "100%",
                                borderRadius: "50%",
                                border: "8px solid rgba(255,255,255,0.9)",
                                boxShadow: "0 0 40px rgba(59,130,246,0.5)",
                                objectFit: "cover", // prevents squishing
                            }}
                        />
                    </div>

                    {/* RIGHT: Text section */}
                    <div
                        style={{
                            width: "60%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            padding: `${60 * parsedData.size}px`,
                            gap: `${20 * parsedData.size}px`,
                        }}
                    >
                        <h1
                            style={{
                                fontSize: 68 * parsedData.size,
                                fontWeight: "bold",
                                margin: 0,
                                lineHeight: 1.1,
                                textShadow: "0 4px 20px rgba(0,0,0,0.4)",
                            }}
                        >
                            👋 Hey, I’m Auston!
                        </h1>
                        <p
                            style={{
                                fontSize: 36 * parsedData.size,
                                margin: 0,
                                maxWidth: "90%",
                                lineHeight: 1.4,
                                color: "rgba(255,255,255,0.85)",
                                textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                            }}
                        >
                            Crafting code & ideas into something beautiful 🚀
                        </p>
                    </div>
                </div>
            ),
            {
                width: 1200 * parsedData.size,
                height: 630 * parsedData.size,
                // height: parsedData.height,
                // width: parsedData.width,
            }
        );
    } catch (e) {
        console.log(`${e}`);

        if (e instanceof z.ZodError) {
            // Validation error: return 400
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
