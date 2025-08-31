"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
    Box,
    Button,
    CircularProgress,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import z from "zod";

/* ---------------------------------- */
/* 1️⃣  Validation schema            */
/* ---------------------------------- */
const schema = z.object({
    name: z.string().min(2, "Name is too short"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(5, "Message should be at least 5 characters"),
});

/* ---------------------------------- */
/* 2️⃣  API helper                   */
/* ---------------------------------- */
export const sendEmail = ({ email, message, name }: z.infer<typeof schema>) => {
    return fetch("/api/notify", {
        method: "post",
        body: JSON.stringify({ name, message, email }),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    }).then((res) => res.json());
};

/* ---------------------------------- */
/* 3️⃣  Error box (fixed height, centered) */
/* ---------------------------------- */
const ErrorBox = ({ message }: { message: string | null }) => (
    <Box
        sx={{
            minHeight: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center", // <‑‑ Centered
        }}
    >
        {message && (
            <Typography variant="body1" color="error">
                {message}
            </Typography>
        )}
    </Box>
);

/* ---------------------------------- */
/* 4️⃣  ContactForm component        */
/* ---------------------------------- */
export const ContactForm = () => {
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const {
        handleSubmit,
        formState: { errors, submitCount, isSubmitting },
        control,
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            email: "",
            message: "",
            name: "",
        },
    });

    const onSubmit = async (data: z.infer<typeof schema>) => {
        setSubmitError(null);
        setSuccess(false);

        try {
            await sendEmail(data);
            setSuccess(true);
        } catch (err) {
            console.error(err);
            const errMsg =
                err instanceof Error && err.message.includes("Failed to fetch")
                    ? "Network error"
                    : err instanceof Error
                      ? err.message
                      : "Unknown error occurred";
            setSubmitError(errMsg);
        }
    };

    const errorMessage =
        submitCount > 0 && Object.keys(errors).length > 0
            ? "Please fix the highlighted fields."
            : submitError
              ? `Form submission failed: ${submitError}`
              : null;

    return (
        <Box
            component="form"
            display="flex"
            flexDirection="column"
            gap={1}
            onSubmit={handleSubmit(onSubmit)}
        >
            <ErrorBox message={errorMessage} />

            {success && (
                <Typography variant="body1" color="success.main" align="center">
                    Form submitted successfully.
                </Typography>
            )}

            <Controller
                name="name"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        id="contactform-name"
                        label="Your Name"
                        placeholder="John Doe"
                        variant="outlined"
                        fullWidth
                        disabled={isSubmitting}
                        error={!!errors.name}
                        helperText={errors.name?.message ?? " "}
                    />
                )}
            />

            <Controller
                name="email"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        id="contactform-email"
                        label="Email Address"
                        placeholder="john@example.com"
                        variant="outlined"
                        fullWidth
                        disabled={isSubmitting}
                        error={!!errors.email}
                        helperText={errors.email?.message ?? " "}
                    />
                )}
            />

            <Controller
                name="message"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        id="contactform-message"
                        label="Your Message"
                        placeholder="Write your message here..."
                        variant="outlined"
                        fullWidth
                        multiline
                        minRows={4}
                        disabled={isSubmitting}
                        error={!!errors.message}
                        helperText={errors.message?.message ?? " "}
                    />
                )}
            />

            <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                disabled={isSubmitting}
                sx={{
                    py: 1.5,
                    fontSize: "1rem",
                    fontWeight: "bold",
                    textTransform: "none",
                    borderRadius: 2,
                    boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                        backgroundColor: "primary.dark",
                        boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                    },
                }}
            >
                {isSubmitting ? (
                    <CircularProgress size={24} sx={{ color: "white" }} />
                ) : (
                    "Send Message"
                )}
            </Button>
        </Box>
    );
};
