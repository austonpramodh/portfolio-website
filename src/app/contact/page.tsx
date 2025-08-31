import { AppBar } from "@/components/AppBar";
import { Container, Paper, Typography } from "@mui/material";
import { ContactForm } from "./ContactForm";

const ContactPage = () => {
    return (
        <Container
            maxWidth={false}
            disableGutters
            sx={{
                minHeight: "100vh",
                backgroundColor: "background.paper",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <AppBar />
            <Container
                sx={{
                    mt: 6,
                    mb: 6,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant="h3"
                    fontWeight="bold"
                    gutterBottom
                    textAlign="center"
                    color="text.primary"
                >
                    {"Let's get in touch!"}
                </Typography>
                <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    textAlign="center"
                    maxWidth="sm"
                >
                    {
                        "Fill out the form below and I'll get back to you as soon as possible."
                    }
                </Typography>

                <Paper
                    sx={{
                        p: { xs: 4, sm: 6, md: 8 },
                        my: 6,
                        width: "100%",
                        maxWidth: "600px",
                        borderRadius: 4,
                        backgroundColor: "background.paper",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                        transition: "transform 0.2s ease, box-shadow 0.2s ease",
                        "&:hover": {
                            transform: "translateY(-4px)",
                            boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
                        },
                    }}
                >
                    <ContactForm />
                </Paper>
            </Container>
        </Container>
    );
};

export default ContactPage;
