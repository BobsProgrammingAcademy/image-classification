
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';


/*
PLCO: 
   'benign_ovcyst', 'endometriosis', 'uterine_fib', 'mammo_history', 'papsmear_history', 'pelvic_history', 'usound_history', 'ca125_history', 'bbd', 'ovariesr_f', 'age', 'weight_f', 'height_f', 'ovary_trial_flag' 
 

NHIS: 

 PAIAPG3M_A, PHQ85_A, DIFF_A 
*/
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

  return null;
}/*
        <Grid item>
            <Typography
                color={theme.palette.text.primary}
                variant='h2'
            >
                Survey
            </Typography>
            <Box paddingTop={2}>
                <Typography
                    color={theme.palette.text.secondary}
                    variant='h5'
                >
                    Select answers to the question prompts as best as possible, these answers will determine your results!
                </Typography>
            </Box>

            <Box padding={2}>
      <Typography variant='' color={theme.palette.text.secondary}>
      Does your family have history of any cancer?
      Any first-degree relative with cancer. Basal cell skin cancers are not included. First-degree relatives include parents, 
      full-siblings, and children. Half-siblings are not included.
      </Typography>
      <Menu
    id= "fh_cancer1"
    anchorEl={anchorEl}
    keepMounted
    open={Boolean(anchorEl)}
    onClose={handleClose}
  >
    <MenuItem onClick={handleClose}>No</MenuItem>
    <MenuItem onClick={handleClose}>Yes</MenuItem>
    <MenuItem onClick={handleClose}>Decline to answer</MenuItem>
  </Menu>

    </Box>
        
        </Grid>;*/
/*<Box sx={{ display: 'flex', justifyContent: 'center' }}>

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
        onClick={handleClick}>

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
          Does your family have history of any cancer?
          Any first-degree relative with cancer. Basal cell skin cancers are not included. First-degree relatives include parents, 
          full-siblings, and children. Half-siblings are not included.
          </Typography>
          <Menu
        id= "fh_cancer"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>No</MenuItem>
        <MenuItem onClick={handleClose}>Yes</MenuItem>
        <MenuItem onClick={handleClose}>Decline to answer</MenuItem>
      </Menu>

        </Box>
     </Box>
     </Box>

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
onClick={handleClick}>

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
          Does your family have history of ovarian, fallopian tube, or peritoneal cancers?
          (Family history in first-degree relatives. Includes parents, full-siblings, 
          and children. Ovarian summary cancers include ovarian, fallopian tube and peritoneal cancers.)
          </Typography>
          <Menu
        id= "ovarsumm_fh"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>No</MenuItem>
        <MenuItem onClick={handleClose}>Yes, Immediate Family Member</MenuItem>
        <MenuItem onClick={handleClose}>Possibly, Relative or Cancer Type Not Clear</MenuItem>
      </Menu>

        </Box>
</Box>
</Box>

    
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
        onClick={handleClick}>

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
          Enter the diagnosis age of the youngest first-degree relative diagnosed with ovarian, fallopian tube, or peritoneal 
          cancer. 
          Ovarian summary cancers include ovarian, fallopian tube and peritoneal cancers.
          </Typography>
          <Menu
        id= "ovarsumm_fh_cnt"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>####</MenuItem>
        <MenuItem onClick={handleClose}>Not Applicable</MenuItem>
      </Menu>

      </Box>
     </Box>
     </Box>

 </Box>
*/

export default ImageDropZone;
