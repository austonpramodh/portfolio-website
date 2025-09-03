import { Box, Container, Typography } from "@mui/material";
import NextImage from "next/image";
import { ModeSwitcher } from "./ModeSwitcher";
import { Navigator } from "./navigator";
import ProfileImage from "./profile.jpg";

export default function Home() {
    return (
        <div>
            <Container
                maxWidth={false}
                sx={{
                    minHeight: "100vh",
                    backgroundColor: "background.paper",
                }}
            >
                <ModeSwitcher />
                <main>
                    {/* <AppBar /> */}
                    <Container
                        maxWidth={"lg"}
                        sx={{
                            padding: 2,
                            // backgroundColor: "yellow",
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                            height: "100vh",
                        }}
                    >
                        <Box
                            sx={{
                                borderRadius: "50%",
                                background: "black",
                                overflow: "hidden",
                                maxHeight: "200px",
                                maxWidth: "200px",
                                width: "200px", // Give it a fixed size or calculate dynamically
                                height: "200px", // Give it a fixed size or calculate dynamically
                                position: "relative", // <-- REQUIRED for the 'fill' prop to work
                                // Optional: Use media queries in sx for responsiveness if needed
                            }}
                        >
                            <NextImage
                                src={ProfileImage}
                                alt="User Profile Picture" // <-- Update alt text for accessibility
                                fill // <-- Make the image fill its parent container
                                // Remove width/height props when using fill
                                // layout="responsive" is deprecated and removed

                                // How the image should fit inside the container
                                // 'cover' is typically used for profile pictures to crop if necessary
                                // but ensure the area is covered.
                                objectFit="cover"
                                // Center the image content
                                objectPosition="center"

                                // Optional: Add 'priority' prop if this image is above the fold
                                // priority
                            />
                        </Box>

                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: {
                                    xs: "2.5rem",
                                    sm: "3rem",
                                    md: "4rem",
                                    lg: "5rem",
                                },
                                textAlign: "center",
                            }}
                            color="text.primary"
                        >
                            Auston Barboza
                        </Typography>
                        <Typography
                            sx={{
                                // fontSize: {
                                //     xs: "1.5rem",
                                //     sm: "2rem",
                                //     md: "2.5rem",
                                //     lg: "3rem",
                                // },
                                marginBottom: 2,
                                textAlign: "center",
                            }}
                            color="text.primary"
                        >
                            Hardware-Enthusiast Turned Software Engineer |
                            Full-Stack Dev | AI & Systems Builder
                        </Typography>
                        <Typography
                            sx={{
                                // fontSize: {
                                //     xs: "1rem",
                                //     sm: "1.25rem",
                                //     md: "1.5rem",
                                //     lg: "1.75rem",
                                // },
                                marginBottom: 2,
                                textAlign: "center",
                            }}
                            color="text.secondary"
                        >
                            {`From racking servers and tinkering with Proxmox
                             clusters to deploying AI-powered web apps and 
                             scalable microservices, I bridge the worlds of 
                             hardware and software. With a strong foundation in 
                             systems engineering and a passion for building cutting-edge AI solutions, 
                             I specialize in crafting performant, scalable, and intelligent 
                             applications—end-to-end. Whether it's designing intuitive 
                             React frontends, optimizing backend APIs, 
                             managing containers in Kubernetes, or 
                             fine-tuning machine learning models, 
                             I bring a hands-on, full-stack approach rooted in both low-level 
                             infrastructure and high-level development.`}
                        </Typography>
                        <Box>
                            <Navigator />
                        </Box>
                    </Container>
                </main>
                <footer></footer>
            </Container>
        </div>
    );
}
