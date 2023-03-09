import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

const CustomDivider = () => {
    return (
        <Box
            maxWidth={{ sm: 720, md: 1236 }}
            width={1}
            margin='0 auto'
            paddingTop={9}
        >
            <Divider />
        </Box>
    );
};

export default CustomDivider;