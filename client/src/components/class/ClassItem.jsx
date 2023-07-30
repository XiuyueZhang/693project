import React from 'react';
import { Box, Button, Typography, useTheme, useMediaQuery, CardActionArea, CardActions, CardContent, CardMedia, Card } from "@mui/material";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useNavigate } from "react-router-dom";


function ClassItem(props) {
    const { classItem } = props
    const isNonMobileScreens = useMediaQuery("(min-width: 650px)");
    const imageRootPath = `${process.env.PUBLIC_URL}/images/`;
    const navigate = useNavigate();

    const theme = useTheme();
    const neutralLight = theme.palette.neutral.light;
    const dark = theme.palette.neutral.dark;
    const background = theme.palette.background.default;
    const primaryLight = theme.palette.primary.light;
    const alt = theme.palette.background.alt;

    const navigateToClassDetail = () => {
        const classId = classItem._id;
        navigate(`/classes/${classId}`)
    }

    return (
        <Box sx={{ width: "530px", padding: "1rem", }}>
            <Card sx={{ maxWidth: 345 }}
                   onClick={navigateToClassDetail}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={imageRootPath + "class02.jpg"}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {classItem.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {classItem.level}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        View Details
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
};

export default ClassItem;