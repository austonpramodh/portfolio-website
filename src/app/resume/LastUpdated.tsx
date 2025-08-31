"use client";

import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

const LastUpdatedOn: React.FunctionComponent<{ date: string }> = ({ date }) => {
    const [relativeTime, setRelativeTime] = useState("");

    useEffect(() => {
        const updatedDate = new Date(date);
        const now = new Date();
        const diffMs = now.getTime() - updatedDate.getTime();

        const seconds = Math.floor(diffMs / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        let text = "";
        if (days > 0) {
            text = `${days} day${days > 1 ? "s" : ""} ago`;
        } else if (hours > 0) {
            text = `${hours} hour${hours > 1 ? "s" : ""} ago`;
        } else if (minutes > 0) {
            text = `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
        } else {
            text = "just now";
        }

        setRelativeTime(text);
    }, [date]);

    return (
        <Typography style={{ marginTop: "1rem" }} color="textPrimary">
            Updated {relativeTime}
        </Typography>
    );
};

export default LastUpdatedOn;
