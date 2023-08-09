import React from 'react';
import { Box, Button, Typography, CardActionArea, CardActions, CardContent, CardMedia, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";


function ClassItem(props) {
    const { classItem } = props
    const navigate = useNavigate();
    const imageRootPath = `${process.env.PUBLIC_URL}/images/cover/`;

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
                        component="video"
                        poster={imageRootPath + classItem.poster}
                        height="200"
                        src={classItem.videoPath}
                        alt={classItem.title}
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