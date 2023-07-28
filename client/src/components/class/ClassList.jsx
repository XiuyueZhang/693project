import React, { useEffect } from 'react';
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import ClassItem from './ClassItem';
import { useSelector, useDispatch } from "react-redux";
import { getHomepageContentRequest } from '../../services/requests';
import { setClassList } from '../../store';
import MultipleSelect from '../widgets/MultipleSelect';

function ClassList(props) {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 600px)");
    const isWideScreen = useMediaQuery("(min-width: 590px)");
    let classList = useSelector((state) => state.classes.allClasses);
    const filteredclassList = useSelector((state) => state.classes.filteredClasses);
    const dispatch = useDispatch();

    // fetch all class data when first render
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch the homepage content
                const response = await getHomepageContentRequest();

                // Check if the HTTP request was successful
                if (response.status === 200) {
                    dispatch(setClassList({
                        allClasses: response.data.classes
                    }));
                }
            } catch (error) {
                // Handle any errors here
                console.error("Error fetching homepage content:", error);
            }
        };

        fetchData(); // Call the fetchData function when the component mounts
    }, []);



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
                    <MultipleSelect />
                </Box>
                <Box
                    display="flex"
                    justifyContent="space-evenly"
                    alignItems="center"
                    flexWrap="wrap"
                >

                    {filteredclassList.length === 0 ? (
                        classList.map((classItem) => (
                            <Box key={classItem._id} sx={{ minWidth: "350px" }}>
                                <ClassItem classItem={classItem} />
                            </Box>
                        ))
                    ) : (
                        filteredclassList.map((classItem) => (
                            <Box key={classItem._id} sx={{ minWidth: "350px" }}>
                                <ClassItem classItem={classItem} />
                            </Box>
                        ))
                    )}
                </Box>
            </Box>

        </Box>
    );
};

export default ClassList;