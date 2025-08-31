"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import z from "zod";

const schema = z.object({
    name: z.string().min(2, "Name is too short"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(5, "Message should be at least 5 characters"),
});

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

export const ContactForm = () => {
    const {
        handleSubmit,
        formState: { errors, submitCount },
        control,
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            email: "",
            message: "",
            name: "",
        },
    });

    return (
        <Box
            component="form"
            display="flex"
            flexDirection="column"
            gap={3}
            onSubmit={handleSubmit(sendEmail)}
        >
            {submitCount > 0 && Object.keys(errors).length > 0 && (
                <Typography variant="body1" color="error">
                    Please fix the highlighted fields.
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
                        error={!!errors.name}
                        helperText={errors.name?.message}
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
                        error={!!errors.email}
                        helperText={errors.email?.message}
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
                        error={!!errors.message}
                        helperText={errors.message?.message}
                    />
                )}
            />

            <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
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
                Send Message
            </Button>
        </Box>
    );
};
