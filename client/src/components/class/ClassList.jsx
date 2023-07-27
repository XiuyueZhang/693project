import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import ClassItem from './ClassItem';
import { useDispatch, useSelector } from "react-redux";

function ClassList(props) {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const isWideScreen = useMediaQuery("(min-width: 590px)");
    const classList = useSelector((state) => state.auth.allClasses)
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
                <Box >
                    <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
                        Explore classes ...
                    </Typography>
                </Box>
                <Box
                    display="flex"
                    justifyContent="space-evenly"
                    alignItems="center"
                    flexWrap="wrap"
                >
                    {classList.map((classItem) => (
                        <Box
                            key={classItem._id}
                            sx={{ minWidth: "350px", marginLeft: isWideScreen ? "0" : "50px" }}
                        >
                            <ClassItem classItem={classItem} />
                        </Box>
                    ))}
                </Box>
            </Box>

        </Box>
    );
};

export default ClassList;