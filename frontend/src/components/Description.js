import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import SendToMobileOutlinedIcon from '@mui/icons-material/SendToMobileOutlined';
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';

import DescriptionItem from './DescriptionItem';

const Description = () => {
  const theme = useTheme();

  return (
    <Box
      maxWidth={{ sm: 720, md: 1236 }}
      width={1}
      margin='0 auto'
      paddingTop={2}
      paddingBottom={2}
    >
      <Box
        data-aos='fade-up'
        backgroundColor={theme.palette.background.default}
        paddingTop={4}
      >
        <Container
          maxWidth='lg'
          display='flex'
          sx={{
            alignItems: 'center',
            flexDirection: 'column',
            px: {
              md: '15px !important',
            },
          }}
        >
          <Typography
            data-aos='fade-up'
            align='center'
            color={theme.palette.text.primary}
            variant='h1'
            marginTop='30px'
          >
            How Does It Work?
          </Typography>
          <Typography
            data-aos='fade-up'
            align='center'
            color={theme.palette.text.secondary}
            variant='h4'
            paddingTop={3}
            paddingBottom={3}
            marginBottom='15px'
          >
            A step-by-step guide on how to use the app
          </Typography>
          <Grid container spacing={4} data-aos='fade-up'>
            <DescriptionItem
              icon={<AddAPhotoOutlinedIcon style={{ height: 25, width: 25 }} />}
              title='Select an Image'
              subtitle='Select an image for classification and drag-and-drop it into the provided dropzone in the browser.'
            />
            <DescriptionItem
              icon={
                <SendToMobileOutlinedIcon style={{ height: 25, width: 25 }} />
              }
              title='Send the Image for Classification'
              subtitle='Press the Send Image button to send the image to the machine learning model for classification.'
            />
            <DescriptionItem
              icon={<GetAppOutlinedIcon style={{ height: 25, width: 25 }} />}
              title='Get the Classification Result'
              subtitle='Next, the machine learning model classifies the image, and the result of the classification is then printed on the screen.'
            />
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Description;
