import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

const ClassifierResult = ({ selectedImage, classificationResult }) => {
  const theme = useTheme();

  return (
    <>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Box>
              <Box
                display='flex'
                justifyContent='center'
                marginBottom={2}
                marginTop={1}
              >
                <Typography variant='h2' align='center' gutterBottom>
                  Result
                </Typography>
              </Box>
              <Box flexDirection='flex' justifyContent='center'>
                <Typography variant='subtitle1' align='center' gutterBottom>
                  The image you have selected:
                  <br />
                  <br />
                </Typography>
                <Box
                  sx={{
                    transition: 'all .2s ease-in-out',
                    '&:hover': {
                      transform: `translateY(-${theme.spacing(1 / 2)})`,
                    },
                  }}
                >
                  <img
                    src={selectedImage}
                    height='250'
                    style={{
                      display: 'block',
                      margin: '0 auto',
                      boxShadow: '6px 6px 3px #c5c5c5',
                      borderRadius: '25px',
                    }}
                  />
                </Box>
                <br />
                <br />
                <Typography variant='subtitle1' align='center' gutterBottom>
                  The machine learning model has classified this image as:
                  <br />
                  <br />
                </Typography>
                <Typography
                  variant='h3'
                  color='primary'
                  align='center'
                  gutterBottom
                >
                  {classificationResult}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default ClassifierResult;
