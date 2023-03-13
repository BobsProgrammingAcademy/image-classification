import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';


// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faImage as ImageIcon } from'@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(ImageIcon)

const ImageDropZone = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        alignItems='center'
        border={1}
        borderRadius={1}
        borderColor={theme.palette.divider}
        display='flex'
        flexWrap='wrap'
        justifyContent='center'
        padding={6}
        sx={{
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
            cursor: 'pointer',
          }
        }}
        onClick={handleClick}
      >
        <Box
          sx={{
            '& img': {
              width: 100
            }
          }}
        >
          <Typography variant='h1' align='center'>
          <HomeOutlinedIcon /> 
          </Typography>
        </Box>
        <Box padding={2}>
          <Typography variant='' color={theme.palette.text.secondary}>
            Select survey structure
          </Typography>
        </Box>
      </Box>
      
    </Box>
  );
};

export default ImageDropZone;
