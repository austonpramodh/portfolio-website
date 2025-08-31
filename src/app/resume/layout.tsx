import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resume",
    description:
        "Hardware-Enthusiast Turned Software Engineer | Full-Stack Dev | AI & Systems Builder",
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
