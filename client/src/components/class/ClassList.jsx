import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import ClassItem from './ClassItem';
import { useDispatch, useSelector } from "react-redux";

function ClassList(props) {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const classes = useSelector((state) => state.auth.classes)
    console.log(classes)
    return (
        <Box>
            {classes.map((c) => c.title)}
            <Box
                width="100%"
                backgroundColor={theme.palette.background.alt}
                p="1rem 3%"
                textAlign="center"
            >
            </Box>

            <Box
                width={isNonMobileScreens ? "90%" : "93%"}
                p="2rem"
                m="2rem auto"
                borderRadius="1.5rem"
                backgroundColor={theme.palette.background.alt}
            >
                <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
                    Explore classes ...
                </Typography>
                
                <ClassItem />
            </Box>
        </Box>
    );
};

export default ClassList;