import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

const DescriptionItem = ({ icon, title, subtitle }) => {
    const theme = useTheme();
    
    return (
        <Grid item xs={12} md={4}>
            <Box
                width={1}
                height={1}
            >
                <Box
                    display='flex'
                    flexDirection='column'
                    alignItems='flex-start'
                >
                    <Box
                        component={Avatar}
                        width={50}
                        height={50}
                        marginBottom={2}
                        backgroundColor={theme.palette.primary.main}
                        color={theme.palette.background.paper}
                    >
                        {icon}
                    </Box>
                    <Typography
                        variant='h6'
                        gutterBottom
                        fontWeight={700}
                    >
                        {title}
                    </Typography>
                    <Typography color={theme.palette.text.secondary}>
                        {subtitle}
                    </Typography>
                </Box>
            </Box>
        </Grid>
    );
};

export default DescriptionItem;