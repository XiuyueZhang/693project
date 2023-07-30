import React, { useEffect } from 'react';
import { Box, IconButton, Typography, useTheme, useMediaQuery, CardContent, CardMedia, Card } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getSelectedClassInfoRequest } from '../../services/requests';
import { setSelectedClass } from '../../store';
import { ArrowBackIcon } from '@mui/icons-material';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useParams } from 'react-router-dom';

function ClassDetail(props) {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 600px)");
    const isWideScreen = useMediaQuery("(min-width: 590px)");
    const selectedClass = useSelector((state) => state.classes.selectedClass);
    const dispatch = useDispatch();
    const { classId } = useParams();
    const imageRootPath = `${process.env.PUBLIC_URL}/images/`;

    // fetch the selected class data when first render
    useEffect(() => {
        const fetchClassDetailData = async () => {
            try {
                // Fetch the homepage content
                const response = await getSelectedClassInfoRequest(classId);

                // Check if the HTTP request was successful
                if (response.status === 200) {
                    const classDetail = response.data
                    console.log(classDetail);
                    dispatch(setSelectedClass({
                        selectedClass: response.data
                    }));
                }
            } catch (error) {
                // Handle any errors here
                console.error("Error fetching the class content:", error);
            }
        };

        fetchClassDetailData(); // Call the fetchData function when the component mounts
    }, [dispatch]);

    if (!selectedClass) {
        // If selectedClass is null (still loading), you can show a loading indicator or a message.
        return <div>Loading...</div>;
    }

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
                    justifyContent="space-evenly"
                    alignItems="center"
                    flexWrap="wrap"
                >
                    <Card sx={{
                        display: 'flex', width: isNonMobileScreens ? "90%" : "52%",
                        backgroundColor: "#bfa",
                        "&:hover": {
                            cursor: "pointer",
                        },
                    }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                component="img"
                                sx={{ width: "272px" }}
                                image={imageRootPath + "class01.jpg"}
                                alt="Class 01 info"
                            />
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography
                                    component="div"
                                    variant="h5"
                                    sx={{
                                        width: "240px",
                                        wordWrap: "break-word",
                                        color: "primary",
                                    }}>
                                    {selectedClass.title}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {selectedClass.level}
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                <IconButton aria-label="previous">
                                    {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                                </IconButton>
                                <IconButton aria-label="play/pause">
                                    <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                                </IconButton>
                                <IconButton aria-label="next">
                                    {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                                </IconButton>
                            </Box>
                        </Box>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {selectedClass.description}
                        </Typography>

                    </Card>
                </Box>
            </Box>

        </Box>
    );
};

export default ClassDetail;