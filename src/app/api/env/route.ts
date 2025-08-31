export async function GET() {
    if (process.env.NEXT_ENABLE_ENV_ROUTE !== "true")
        return Response.json(
            { matchesGlob: "UNAUTHORIZED" },
            {
                status: 403,
            }
        );
    return Response.json(
        { env: process.env },
        {
            status: 200,
        }
    );
}
