import React, { useEffect } from 'react';
import { Box, Button, IconButton, Typography, useTheme, useMediaQuery, CardContent, CardMedia, Card, CardActions } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getSelectedClassInfoRequest } from '../../services/requests';
import { setSelectedClass } from '../../store';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import BasicCard from '../widgets/UserProfile';

function ClassDetail(props) {
    const theme = useTheme();
    const isWideScreens = useMediaQuery("(min-width: 1600px)");
    const isScreenWidthMothThan1000 = useMediaQuery("(min-width: 1000px)");
    const selectedClass = useSelector((state) => state.classes.selectedClass);
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const { classId } = useParams();
    const imageRootPath = `${process.env.PUBLIC_URL}/images/`;
    const navigate = useNavigate();

    const enrolClassHandler = () => {
        if(user){
            if(user.role === "user"){
                // ENROL CLASS
            }
            // ADMIN role
        }else{
            // NON USER - Navigate to login page
            navigate("/login")
        }
    }

    // fetch the selected class data when first render
    useEffect(() => {
        const fetchClassDetailData = async () => {
            try {
                // Fetch the homepage content
                const response = await getSelectedClassInfoRequest(classId);

                // Check if the HTTP request was successful
                if (response.status === 200) {
                    const classDetail = response.data
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

            {isWideScreens ? (
                // DESKTOP SCREENS MORE THAN 1600PX VIEW
                <Box
                    width="80%"
                    p="2rem"
                    m="2rem auto"
                    borderRadius="1.5rem"
                    backgroundColor={theme.palette.background.alt}

                >

                    <Box
                        display="flex"
                        justifyContent={user ? "space-around" : "center"}
                        alignItems="space-arouond"
                        flexWrap="wrap"
                    >
                        <Card sx={{
                            display: 'flex', width: "60%",
                            pr: "1rem",
                            "&:hover": {
                                cursor: "pointer",
                            },
                        }}
                        >
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                    <IconButton sx={{ marginLeft: "1.1rem" }}>
                                        <ArrowBackIosIcon />
                                    </IconButton>
                                    <Typography variant="subtitle1" color="text.secondary" component="div"
                                        sx={{ margin: "1.1rem" }}
                                        onClick={() => navigate("/")}>
                                        Back to class List
                                    </Typography>
                                </Box>

                                <CardMedia
                                    component="img"
                                    sx={{ width: "90%", margin: "1rem" }}
                                    image={imageRootPath + "class01.jpg"}
                                    alt="Class 01 info"
                                />
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography
                                        component="div"
                                        variant="h5"
                                        sx={{
                                            width: "400px",
                                            wordWrap: "break-word",
                                            color: "primary",
                                        }}>
                                        {selectedClass.title}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Level: {selectedClass.level}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Cloud: {selectedClass.category}
                                    </Typography>
                                </CardContent>
                                <Box width="90%"
                                    sx={{ display: 'flex', justifyContent: 'space-between', pl: 1, pb: 1 }}>
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
                                    <Box m="0.7rem">
                                        <Button variant="contained"
                                        onClick={enrolClassHandler}>ENROLL NOW</Button>
                                    </Box>
                                </Box>

                            </Box>
                            <Box
                                m="1rem"
                            >
                                <Typography variant="subtitle1" color="text.primary" component="div" sx={{ marginTop: "10rem" }}>
                                    Description:
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {selectedClass.description}
                                </Typography>
                            </Box>
                        </Card>
                        <Box>
                            <Card>
                                {user ? (
                                    <BasicCard />
                                ) : null}
                            </Card>
                        </Box>
                    </Box>
                </Box>

            ) : (
                isScreenWidthMothThan1000 ? (
                    // SCREENS 1000PX ~ 1600PX
                    <Box
                        width="80%"
                        p="2rem"
                        m="2rem auto"
                        borderRadius="1.5rem"
                        backgroundColor={theme.palette.background.alt}

                    >

                        <Box
                            display="flex"
                            justifyContent={user ? "space-around" : "center"}
                            alignItems="space-arouond"
                            flexWrap="wrap"
                        >
                            <Card sx={{
                                display: 'flex', width: "60%",
                                pr: "1rem",
                                "&:hover": {
                                    cursor: "pointer",
                                },
                            }}
                            >
                                <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: "wrap", width: "99%", alignItems: "center" }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: "99%", flexWrap: "wrap" }}>
                                        <IconButton sx={{ marginLeft: "1.1rem" }}>
                                            <ArrowBackIosIcon />
                                        </IconButton>
                                        <Typography variant="subtitle1" color="text.secondary" component="div"
                                            sx={{ margin: "1.1rem" }}
                                            onClick={() => navigate("/")}>
                                            Back to class List
                                        </Typography>
                                    </Box>

                                    <CardMedia
                                        component="img"
                                        sx={{ width: "93%", margin: "1rem" }}
                                        image={imageRootPath + "class01.jpg"}
                                        alt="Class 01 info"
                                    />
                                    <CardContent sx={{ flex: '1 0 auto', width: "95%", flexWrap: "wrap" }}>
                                        <Typography
                                            component="div"
                                            variant="h5"
                                            sx={{
                                                width: "400px",
                                                wordWrap: "break-word",
                                                color: "primary",
                                            }}>
                                            {selectedClass.title}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            Level: {selectedClass.level}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            Cloud: {selectedClass.category}
                                        </Typography>
                                    </CardContent>
                                    <Box width="90%"
                                        sx={{ display: 'flex', justifyContent: 'space-between', pl: 1, pb: 1 }}>
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
                                        <Box m="0.7rem">
                                            <Button variant="contained">ENROLL NOW</Button>
                                        </Box>
                                    </Box>
                                    <Box
                                        m="1rem"
                                        maxWidth="800px"
                                        width="90%"
                                    >
                                        <Typography variant="subtitle1" color="text.primary" component="div">
                                            Description:
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            {selectedClass.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Card>
                            <Box>
                                <Card>
                                    {user ? (
                                        <BasicCard />
                                    ) : null}
                                </Card>
                            </Box>
                        </Box>
                    </Box>
                ) : (
                    // SCREENS UNDER 800PX
                    <Box
                        p="1rem"
                        m="1rem auto"
                        borderRadius="1.5rem"
                        backgroundColor={theme.palette.background.alt}
                        width="100%"
                        display="flex"
                        justifyContent="center"
                        minWidth="350px"
                    >

                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            flexWrap="wrap"
                            width="100%"
                        >
                            <Card sx={{
                                width: "99%",
                                display: 'flex',
                                justifyContent: "center",
                                "&:hover": {
                                    cursor: "pointer",
                                },
                            }}
                            >
                                <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: "wrap", width: "99%", alignItems: "center" }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: "99%", flexWrap: "wrap" }}>
                                        <IconButton sx={{ marginLeft: "1.1rem" }}>
                                            <ArrowBackIosIcon />
                                        </IconButton>
                                        <Typography variant="subtitle1" color="text.secondary" component="div"
                                            sx={{ margin: "1.1rem" }}
                                            onClick={() => navigate("/")}>
                                            Back to class List
                                        </Typography>
                                    </Box>

                                    <CardMedia
                                        component="img"
                                        sx={{ width: "93%", margin: "1rem" }}
                                        image={imageRootPath + "class01.jpg"}
                                        alt="Class 01 info"
                                    />
                                    <CardContent sx={{ flex: '1 0 auto', width: "95%", flexWrap: "wrap" }}>
                                        <Typography
                                            component="div"
                                            variant="h5"
                                            sx={{
                                                width: "400px",
                                                wordWrap: "break-word",
                                                color: "primary",
                                            }}>
                                            {selectedClass.title}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            Level: {selectedClass.level}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            Cloud: {selectedClass.category}
                                        </Typography>
                                    </CardContent>
                                    <Box width="90%"
                                        sx={{ display: 'flex', justifyContent: 'space-between', pl: 1, pb: 1 }}>
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
                                        <Box m="0.7rem">
                                            <Button variant="contained">ENROLL NOW</Button>
                                        </Box>
                                    </Box>
                                    <Box
                                        m="1rem"
                                        maxWidth="800px"
                                        width="90%"
                                    >
                                        <Typography variant="subtitle1" color="text.primary" component="div">
                                            Description:
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            {selectedClass.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Card>
                        </Box>
                    </Box>
                )


            )}


        </Box>
    );
};

export default ClassDetail;