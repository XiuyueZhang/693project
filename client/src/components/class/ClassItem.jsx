import React from 'react';
import {
    Box,
    useTheme,
    useMediaQuery,
    Card,
    CardContent,
    CardMedia,
    IconButton,
    Typography,
} from "@mui/material";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

function ClassItem(props) {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const imageRootPath = `${process.env.PUBLIC_URL}/images/`;

    return (
        <Box sx={{ width:"500px"}}>
            <Card sx={{ display: 'flex', width:isNonMobileScreens ? "90%" : "50%" }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5"
                            sx={{ width: "250px" }}>
                            Class 01
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            AWS Professional level
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
                <CardMedia
                    component="img"
                    sx={{ width: 250 }}
                    image={imageRootPath + "class01.jpg"}
                    alt="Class 01 info"
                />
            </Card>
        </Box>
    );
};

export default ClassItem;