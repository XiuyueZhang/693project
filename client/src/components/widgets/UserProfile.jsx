import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from "react-redux";
import StarIcon from '@mui/icons-material/Star';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function UserProfile() {

    const user = useSelector((state) => state.auth.user);
    const imageRootPath = `${process.env.PUBLIC_URL}/images/`;

    return (
        <Card sx={{ minWidth: 275, padding:"2rem" }}>
            <CardMedia
                component="img"
                sx={{ width: "100px", margin: "1rem" }}
                image={imageRootPath + "p1.jpeg"}
                alt="Class 01 info"
            />

            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    <StarIcon fontSize='10px' /><StarIcon fontSize='10px' /><StarIcon fontSize='10px' />
                </Typography>
                <Typography variant="h5" component="div">
                    {user.firstName} {user.lastName}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {user.role} account
                </Typography>
                <Typography variant="body2">
                    {user.email}
                    <br />
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Profile</Button>
            </CardActions>
        </Card>
    );
}