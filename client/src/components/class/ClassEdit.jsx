import React from 'react';
import {
    Box, useTheme, useMediaQuery, Button, TextField, Typography, Breadcrumbs, Link,
    Radio, RadioGroup, FormControlLabel, FormControl, FormLabel
} from "@mui/material";
import { useDropzone } from 'react-dropzone';

const ClassEdit = (props) => {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 600px)");
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

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
                width="90%"
                p="2rem"
                m="2rem auto"
                borderRadius="1.5rem"
                backgroundColor={theme.palette.background.alt}
                minWidth="350px"
            >
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    flexWrap="wrap"
                >
                    <Box alignSelf="flex-start" m="2rem 20%">
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link underline="hover" color="inherit" href="/">
                                Home
                            </Link>
                            <Link underline="hover" color="inherit" href="/">
                                Class
                            </Link>
                            <Typography color="text.primary">Update</Typography>
                        </Breadcrumbs>
                    </Box>
                    <Box width={isNonMobileScreens ? "60%" : "90%"} textAlign='center' my="1rem">
                        <TextField
                            fullWidth
                            label="Certificate title"
                            id="fullWidth"
                            placeholder="Title"
                        />
                    </Box>
                    <Box alignSelf="flex-start" m="0.5rem 20%">
                        <FormControl>
                            <FormLabel id="level-radio-group">Level</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="Associate" control={<Radio />} label="Associate" />
                                <FormControlLabel value="Professional" control={<Radio />} label="Professional" />
                                <FormControlLabel value="Fundamental" control={<Radio />} label="Fundamental" />
                                <FormControlLabel value="Expert" control={<Radio />} label="Expert" />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <Box alignSelf="flex-start" m="0.5rem 20%">
                        <FormControl>
                            <FormLabel id="category-radio-group">Category</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="aws" control={<Radio />} label="AWS" />
                                <FormControlLabel value="google" control={<Radio />} label="Google" />
                                <FormControlLabel value="azure" control={<Radio />} label="Azure" />
                                <FormControlLabel value="ibm" control={<Radio />} label="IBM" />
                            </RadioGroup>
                        </FormControl>
                    </Box>

                    <Box width={isNonMobileScreens ? "60%" : "90%"} textAlign='center' my="1rem">
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Certificate description"
                            multiline
                            minRows={4}
                            maxRows={10}
                            placeholder="Description"
                            fullWidth
                        />
                    </Box>
                    <section className="container" style={{ width: isNonMobileScreens ? "60%" : "90%" }}>
                        <div {...getRootProps({
                            style: {
                                width: '100%',
                                border: '2px dashed #ccc',
                                padding: '20px',
                                textAlign: 'center',
                                cursor: 'pointer',
                            },
                        })}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                        <aside>
                            <h4>Files</h4>
                            <ul>{files}</ul>
                        </aside>
                    </section>
                    <Box my="2rem">
                        <Button color="primary" variant="contained">
                            Upload
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ClassEdit;