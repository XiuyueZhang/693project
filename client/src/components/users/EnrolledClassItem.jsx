import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/material';
import { userRemoveClassRequest } from '../../services/requests';
import { setEnrolledClaases } from '../../store';

export default function EnrolledClassItem(props) {
    const {classItem} = props;
    const enrolledClassList = useSelector(state => state.classes.enrolledClaases);
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const removeClassHandler = async (classId) => {
        try {
            // DELETE ENROLLED CLASS
            const response = await userRemoveClassRequest(user.id, classId);
            // Check if the HTTP request was successful
            if (response.status === 200) {
                // Successfully deleted enrolment
                const successMessage = "Successfully deleted enrolment";
                // Delete this class from enrolledClasses
                // Filter the enrolledClassesList
                const updatedEnrolledClassList = enrolledClassList.filter(item => item._id !== classId);
                dispatch(setEnrolledClaases({
                    enrolledClasses: updatedEnrolledClassList
                }))
                // You might want to display or use the successMessage here
                console.log(successMessage);
            } else {
                const errorMessage = "Error deleting enrollment: Status " + response.status;
                // You might want to display or use the errorMessage here
                console.error(errorMessage);
            }
        } catch (error) {
            const errorMessage = "Error deleting enrollment: " + error.message;
            // You might want to display or use the errorMessage here
            console.error(errorMessage);
        }
    }

    const navigateToClassDetail = () => {
        const classId = classItem._id;
        navigate(`/classes/${classId}`)
    }

    return (

            <CardContent sx={{width:"100%"}}>
                <Box display="flex" justifyContent="space-around">
                    <Box width="70%" onClick={navigateToClassDetail}
                    sx={{ cursor: 'pointer' }}>
                        <Typography variant="body2" fontWeight={550}>
                            title: {classItem.title}
                        </Typography>
                        <Typography variant="body1">
                            level: {classItem.level}
                        </Typography>
                    </Box>
                
                    <IconButton aria-label="delete" size="small" onClick={() => removeClassHandler(classItem._id)}>
                        <DeleteIcon/>
                    </IconButton>
                </Box>

            </CardContent>
    );
}