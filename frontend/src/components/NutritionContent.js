import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import { TextField, createTheme } from '@mui/material';
import { Input, ariaLabel } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import axios from 'axios';

const NutritionContent = () => {
const theme = createTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const [question1, setQuestion1] = useState('');

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(question1 > 4000){
    window.location.href = "/classifier";}
    else {
        window.location.href = "/nutritionSubmissionPage";}
};



  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const formData = {
    question1
  };
    
    return(
    <form onSubmit={handleSubmit}>
            <Typography
                color={theme.palette.text.primary}
                variant='h2'
            >
                Nutrition
            </Typography>
            <Box paddingTop={2}>
                <Typography
                    color={theme.palette.text.secondary}
                    variant='h5'
                >
                    Indicate daily calories.
                </Typography>
            </Box>

            <Box padding={2}>
            <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                   1. Input number of calories per day.
                    <Typography></Typography> 
                    
                     <Typography></Typography>
                </Typography>
            <TextField id="cals" label="#" value={question1}
            onChange={(e) => setQuestion1(e.target.value)} variant="standard" />
    
      
    </Box>

    

    <Box
  m={1}
 //margin
  display="flex"
  justifyContent="flex-end"
  alignItems="flex-end"
>
<Button variant="contained" type="submit"> Enter </Button>
</Box>


        </form>
    );
};

export default NutritionContent;