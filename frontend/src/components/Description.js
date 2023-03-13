import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import SendToMobileOutlinedIcon from '@mui/icons-material/SendToMobileOutlined';
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import FeedIcon from '@mui/icons-material/Feed';

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
                            md: '15px !important'
                        }
                    }}
                >
                    <Typography
                        data-aos='fade-up'
                        align='center'
                        color={theme.palette.text.primary}
                        variant='h1'
                        marginTop='30px'
                    >
                        Take the Survey!
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
                        Navigate to the survey page to take a survey and get a prediction of your risk of developing Ovarian Cancer.
                    </Typography>
                    <Grid container spacing={4} data-aos='fade-up'>
                        <DescriptionItem 
                            icon={<FeedIcon style={{ height: 25, width: 25 }} />}
                            title='Fill in your information'
                            subtitle='Are you interested in taking a proactive step towards your health? Participating in a survey for ovarian cancer can provide you with valuable information about your risk for this disease. By answering questions about your lifestyle, medical history, and family background, you can receive personalized predictive results that can help you make informed decisions about your health.'
                        />
                        <DescriptionItem 
                            icon={<SendToMobileOutlinedIcon style={{ height: 25, width: 25 }} />}
                            title='Get your result!'
                            subtitle='Ovarian cancer is a serious and often deadly disease, but early detection can significantly increase the chances of successful treatment. By completing this survey, you can gain insight into your risk factors and take the necessary steps to prevent or detect ovarian cancer early. Your participation in this survey can also help researchers better understand the risk factors for ovarian cancer and improve detection and treatment options for future generations.'
                        />
                        <DescriptionItem 
                            icon={<GetAppOutlinedIcon style={{ height: 25, width: 25 }} />}
                            title='Your results help both you and us!'
                            subtitle='Your participation in the survey is crucial in helping researchers better understand the risk factors for ovarian cancer and improve the accuracy of machine learning models. By taking a few minutes to fill out the survey, you can make a valuable contribution to the fight against ovarian cancer and help pave the way for more effective prevention and treatment strategies.'
                        />
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Description;