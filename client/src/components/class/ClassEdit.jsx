import React, { useState, useCallback } from 'react';
import {
    Box, useTheme, useMediaQuery, Button, TextField, Typography, Breadcrumbs, Link,
    Radio, RadioGroup, FormControlLabel, FormControl, FormLabel
} from "@mui/material";
import { useDropzone } from 'react-dropzone';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { adminAddClassRequest } from '../../api/requests';

const ClassEdit = (props) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isNonMobileScreens = useMediaQuery("(min-width: 600px)");
    const location = useLocation();
    const token = useSelector(state => state.auth.token)
    const isAddClassPage = location.pathname === "/admin/class/add"

    const [certificateTitle, setCertificateTitle] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [certificateDescription, setCertificateDescription] = useState('');

    const handleCertificateTitleChange = (event) => {
        setCertificateTitle(event.target.value);
    };

    const handleLevelChange = (event) => {
        setSelectedLevel(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleCertificateDescriptionChange = (event) => {
        setCertificateDescription(event.target.value);
    };

    const handleUploadButtonClick = async () => {
        // Upload the video to S3 bucket
        const S3_BUCKET = "cloudtech-project-videos";
        const REGION = "ap-southeast-2";

        const s3 = new S3Client({
            region: REGION,
            credentials: {
                accessKeyId: process.env.REACT_APP_AWS_Access_Key_ID,
                secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
            },
        });


        // Loop through each selected file and upload
        for (const mp4File of mp4Files) {
            const uploadParams = {
                Bucket: S3_BUCKET,
                Key: mp4File.name, // Use file name as the key
                Body: mp4File,
                ContentType: 'video/mp4',
            };

            const uploadCommand = new PutObjectCommand(uploadParams);

            try {
                await s3.send(uploadCommand);
                const uploadedFileUrl = `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${mp4File.name}`;

                if (isAddClassPage) {
                    // Set request body
                    const data = {
                        title: certificateTitle,
                        level: selectedLevel,
                        videoPath: uploadedFileUrl,
                        category: selectedCategory,
                        description: certificateDescription,
                        isActive: true
                    }
                    // Send request to store data to DB
                    const response = await adminAddClassRequest(data, token, "admin")

                    if (!response.error) {
                        // Redirect to success message page
                        navigate("/admin/success")
                    } else {
                        console.error("Error uploading file:", response.error)
                    }
                } else {
                    // Edit page
                }

            } catch (error) {
                console.error("Error uploading file:", error);
            }
        }
    };

    // Only accept mp4 videos files
    const acceptedFileTypes = '.mp4';
    const [mp4Files, setMp4Files] = useState([]);

    const onDrop = useCallback((acceptedFiles) => {
        // Filter out files that are not of the desired format (MP4)
        const mp4Files = acceptedFiles.filter(file => file.type === 'video/mp4');
        setMp4Files(mp4Files);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: acceptedFileTypes,
    });

    const files = mp4Files.map(file => (
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
                            <Link underline="hover" color="inherit" onClick={() => navigate(-1)}>
                                Class
                            </Link>
                            <Typography color="text.primary">{isAddClassPage ? "Add" : "Edit"}</Typography>
                        </Breadcrumbs>
                    </Box>
                    <Box width={isNonMobileScreens ? "60%" : "90%"} textAlign='center' my="1rem">
                        <TextField
                            fullWidth
                            label="Certificate title"
                            id="fullWidth"
                            placeholder="Title"
                            onChange={handleCertificateTitleChange}
                        />
                    </Box>
                    <Box alignSelf="flex-start" m="0.5rem 20%">
                        <FormControl>
                            <FormLabel id="level-radio-group">Level</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                onChange={handleLevelChange}
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
                                onChange={handleCategoryChange}
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
                            onChange={handleCertificateDescriptionChange}
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
                            <p>Drag 'n' drop one mp4 file here, or click to select mp4 file</p>
                        </div>
                        <aside>
                            <h4>Files</h4>
                            <ul>{files}</ul>
                        </aside>
                    </section>
                    <Box my="2rem">
                        <Button color="primary" variant="contained" onClick={handleUploadButtonClick}>
                            {isAddClassPage ? "Add class" : "Update class"}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ClassEdit;