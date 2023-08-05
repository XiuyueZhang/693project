import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/material';
import { setEnrolledClaases, setErrorMessage, setSuccessMessage } from '../../store';
import { userRemoveClassRequest } from '../../api/requests';

export default function EnrolledClassItem(props) {
    const { classItem } = props;
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
                dispatch(setErrorMessage({
                    errorMessage: ""
                }))
                dispatch(setSuccessMessage({
                    successMessage: successMessage
                }))
                // Delete this class from enrolledClasses
                // Filter the enrolledClassesList
                const updatedEnrolledClassList = enrolledClassList.filter(item => item._id !== classId);
                dispatch(setEnrolledClaases({
                    enrolledClasses: updatedEnrolledClassList
                }))
                // display or use the successMessage here

            } else {
                const errorMessage = "Error deleting enrollment: Status " + response.status;
                //display or use the errorMessage here
                dispatch(setErrorMessage({
                    errorMessage: errorMessage
                }))
                dispatch(setSuccessMessage({
                    successMessage: ""
                }))

            }
        } catch (error) {
            const errorMessage = "Error deleting enrollment: " + error.message;
            // display or use the errorMessage here
            dispatch(setErrorMessage({
                errorMessage: errorMessage
            }))
            dispatch(setSuccessMessage({
                successMessage: ""
            }))

        }
    }

    const navigateToClassDetail = () => {
        const classId = classItem._id;
        navigate(`/classes/${classId}`)
    }

    return (

        <CardContent sx={{ width: "100%" }}>
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
                    <DeleteIcon />
                </IconButton>
            </Box>
        </CardContent>
    );
}