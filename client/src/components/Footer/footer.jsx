import React, { ReactElement } from "react";
import { Box, Container, Grid, Typography, useTheme, IconButton, useMediaQuery } from "@mui/material";
import FlexBetween from "../widgets/FlexBetween";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer = () => {
    const theme = useTheme();
    const neutralLight = theme.palette.neutral.light;
    const dark = theme.palette.neutral.dark;
    const background = theme.palette.background.default;
    const primaryLight = theme.palette.primary.light;
    const alt = theme.palette.background.alt;
    const isWidthLessThan550px = useMediaQuery("(max-width: 650px)");

    return (
        <FlexBetween padding="3rem 15%" backgroundColor={theme.palette.background.alt}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: isWidthLessThan550px ? "column" : "row", // Set column direction when width is less than 550px
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "85%",
                    // ... other styles ...
                }}
            >
                <Box>
                    <Typography
                        fontWeight="bold"
                        fontSize="clamp(1rem, 2rem, 2.25rem)"
                        color="primary"
                        sx={{
                            "&:hover": {
                                color: primaryLight,
                            },
                        }}
                    >
                        CloudTech
                    </Typography>
                    <Typography sx={{ m: "0.2rem" }}>
                        @ 2023 Xiuyue Zhang
                    </Typography>
                </Box>
                <Box
                >
                    <Container maxWidth="lg">
                        <Grid container direction="column" alignItems="center">
                            <Grid item xs={12}>
                                <IconButton>
                                    <TwitterIcon sx={{ m: "0.5rem" }} />
                                </IconButton>
                                <IconButton>
                                    <FacebookIcon sx={{ m: "0.5rem" }} />
                                </IconButton>
                                <IconButton>
                                    <InstagramIcon sx={{ m: "0.5rem" }} />
                                </IconButton>
                                <Box display="flex" justifyContent="space-around">
                                    <Typography sx={{ m: "0.2rem" }}>
                                        About
                                    </Typography>
                                    <Typography sx={{ m: "0.2rem" }}>
                                        FQA
                                    </Typography>
                                    <Typography sx={{ m: "0.2rem" }}>
                                        Contact
                                    </Typography>
                                    <Typography sx={{ m: "0.2rem" }}>
                                        Blog
                                    </Typography>
                                </Box>

                            </Grid>
                        </Grid>
                    </Container>
                </Box>

            </Box>

        </FlexBetween>
    );
};

export default Footer;