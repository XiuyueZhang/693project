import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Container from './format';

function ClassList(props) {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    return (
        <Box>
            <Container >
                class list
            </Container>
        </Box>
    );
};

export default ClassList;