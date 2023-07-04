import React, { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import { useTheme } from '@mui/material';

import ImageDropzone from '../components/ImageDropzone';
import ClassifierButtons from '../components/ClassifierButtons';
import ClassifierHeader from '../components/ClassifierHeader';
import ClassifierResult from '../components/ClassifierResult';
import ClassifyAgain from '../components/ClassifyAgain';
import Spacer from '../components/Spacer';
import replaceUnderscore from '../utils/replaceUnderscore';
import capitalizeFirstLetter from '../utils/capitalizeFirstLetter';

const Classifier = () => {
  const theme = useTheme();
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);

  const handleDrop = (files) => {
    setIsLoading(true);
    setFiles(files);
    setImage(null);
    loadImage(files);
  };

  const handleRemove = () => {
    setFiles([]);
  };

  const loadImage = (files) => {
    setTimeout(() => {
      setFiles(files);
      if (setFiles.length) {
        setIsLoading(false);
      }
      setImage(null);
    }, 3000);
  };

  const sendData = () => {
    setFiles([]);
    setIsLoading(true);

    const formData = new FormData();
    formData.append('image', files[0], files[0].name);

    axios
      .post('http://127.0.0.1:8000/api/classifier/', formData, {
        headers: {
          accept: 'application/json',
          'content-type': 'multipart/form-data',
        },
      })
      .then((response) => {
        getClassificationResult(response);
      })
      .catch((err) => console.log(err));
  };

  const getClassificationResult = (obj) => {
    axios
      .get(`http://127.0.0.1:8000/api/classifier/${obj.data.id}/`, {
        headers: {
          accept: 'application/json',
        },
      })
      .then((response) => {
        setImage(response);
      })
      .catch((err) => console.log(err));

    setIsLoading(false);
  };

  const classifyAnother = () => {
    setImage(null);
  };

  return (
    <>
      <Head>
        <title>Image Classifier | Image Classification</title>
      </Head>
      <Box
        backgroundColor={theme.palette.background.default}
        minHeight='100%'
        paddingTop={15}
        paddingBottom={15}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid
              item
              container
              alignItems='center'
              justifyContent='space-between'
              marginTop='-30px'
              spacing={3}
              xs={12}
            >
              <ClassifierHeader />
              <Grid item xs={12}>
                {isLoading && (
                  <Box marginBottom={3} marginTop={2}>
                    <LinearProgress color='success' />
                  </Box>
                )}
              </Grid>
            </Grid>
            {!image && (
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Box
                      display='flex'
                      flexDirection='row'
                      alignItems='flex-start'
                      justifyContent='center'
                    >
                      <ImageDropzone
                        accept='image/jpeg,image/jpg,image/png,image/gif'
                        onDrop={handleDrop}
                      />
                    </Box>
                    <Box
                      display='flex'
                      flexDirection='row'
                      alignItems='flex-start'
                      justifyContent='center'
                    >
                      {files.length > 0 && !isLoading && (
                        <Box marginTop={2} color={theme.palette.text.secondary}>
                          Loaded image: <Button>{files[0].name}</Button>
                        </Box>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            )}
            {image && (
              <>
                <ClassifierResult
                  selectedImage={image.data.image}
                  classificationResult={capitalizeFirstLetter(
                    replaceUnderscore(image.data.result)
                  )}
                />
                <ClassifyAgain submitOnClick={classifyAnother} />
              </>
            )}
            <Grid item xs={12}>
              {files.length > 0 && !isLoading && (
                <ClassifierButtons
                  submitOnClick={sendData}
                  resetOnClick={handleRemove}
                />
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Spacer sx={{ pt: 6 }} />
    </>
  );
};

export default Classifier;
