import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

const ClassifierHeader = () => {
  const theme = useTheme();

  return (
    <>
      <Grid item>
        <Typography color={theme.palette.text.primary} variant='h2'>
          Image Classifier
        </Typography>
        <Box paddingTop={2}>
          <Typography color={theme.palette.text.secondary} variant='h5'>
            Select an Image for Classification
          </Typography>
        </Box>
      </Grid>
    </>
  );
};

export default ClassifierHeader;
