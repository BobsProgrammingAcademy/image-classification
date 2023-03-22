import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme, useMediaQuery } from '@mui/material';
import InfoIcon from '@mui/icons-material/HelpOutline';
import PlayIcon from '@mui/icons-material/PlayCircleOutlineOutlined';

//these are the buttons that we see on the main page.
const HeroButtons = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(
        theme.breakpoints.up('md'),
        { defaultMatches: true }
    );

    return (
        <React.Fragment>
            <Box
                display='flex'
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'stretched', sm: 'flex-start' }}
                justifyContent='center'
                marginTop={4}
            >
            
            </Box>
        </React.Fragment>
    );
};

export default HeroButtons;