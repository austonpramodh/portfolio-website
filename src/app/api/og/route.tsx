import { type NextRequest } from "next/server";

import { ImageResponse } from "next/og";
import * as z from "zod";

const schema = z.object({
    title: z.string(),
    description: z.string().nullable().optional(),
    height: z.coerce.number().default(630),
    width: z.coerce.number().default(1200),
    background: z.string().default("white"),
    primaryTextColor: z.string().default("black"),
    secondaryTextColor: z.string().default("#666"),
    isBlank: z
        .string()
        .transform((val) => val === "true")
        .optional()
        .default(false),
});

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const rawData = {} as Record<string, string>;

        for (const [key, value] of searchParams.entries()) {
            rawData[key] = value;
        }

        const parsedData = schema.parse(rawData);

        if (parsedData.isBlank) {
            return new ImageResponse(
                (
                    <div
                        style={{
                            height: "100%",
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#000000",
                            padding: "40px",
                        }}
                    ></div>
                ),
                {
                    width: parsedData.width,
                    height: parsedData.height,
                }
            );
        }

        return new ImageResponse(
            (
                <div
                    style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        background: parsedData.background,
                        padding: "40px",
                    }}
                >
                    <div
                        style={{
                            fontSize: 60,
                            fontWeight: "bold",
                            color: parsedData.primaryTextColor,
                            textAlign: "center",
                        }}
                    >
                        {parsedData.title}
                    </div>
                    {parsedData.description && (
                        <div
                            style={{
                                fontSize: 30,
                                color: parsedData.secondaryTextColor,
                                marginTop: "20px",
                                textAlign: "center",
                            }}
                        >
                            {parsedData.description}
                        </div>
                    )}
                </div>
            ),
            {
                width: parsedData.width,
                height: parsedData.height,
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
