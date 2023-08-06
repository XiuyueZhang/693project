import React from 'react';
import { Box, useTheme, useMediaQuery, Button, TextField, Typography, Breadcrumbs, Link } from "@mui/material";

const ClassEdit = (props) => {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 600px)");

    return (
        <Box>
            <Box
                width="100%"
                backgroundColor={theme.palette.background.alt}
                p="1rem 3%"
                textAlign="center"
            >
            </Box>

            <Box
                width={isNonMobileScreens ? "90%" : "90%"}
                p="2rem"
                m="2rem auto"
                borderRadius="1.5rem"
                backgroundColor={theme.palette.background.alt}
                minWidth="350px"
            >
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    flexWrap="wrap"
                >
                    <Box alignSelf="flex-start" m="2rem 10%">
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link underline="hover" color="inherit" href="/">
                                Home
                            </Link>
                            <Link underline="hover" color="inherit" href="/">
                                Class
                            </Link>
                            <Typography color="text.primary">Update</Typography>
                        </Breadcrumbs>
                    </Box>
                    <Box width='80%' textAlign='center' my="1rem">
                        <TextField
                            fullWidth
                            label="Certificate title"
                            id="fullWidth"
                            placeholder="Title"
                        />
                    </Box>
                    <Box width='80%' textAlign='center' my="1rem">
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Certificate description"
                            multiline
                            minRows={4}
                            maxRows={10}
                            placeholder="Description"
                            fullWidth
                        />
                    </Box>
                    <Box component="div" my="2rem">
                        <Button color="primary" variant="contained">
                            Upload
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ClassEdit;