import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme, useMediaQuery } from '@mui/material';
import SendIcon from '@mui/icons-material/SendToMobile';

const ClassifyAgain = ({ submitOnClick }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <>
      <Grid item xs={12}>
        <Box marginTop={4}>
          <Box
            display='flex'
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems='center'
            justifyContent='center'
            marginTop={4}
          >
            <Button
              variant='contained'
              color='primary'
              size='large'
              startIcon={<SendIcon />}
              fullWidth={isMd ? false : true}
              disableElevation={true}
              onClick={submitOnClick}
              sx={{
                padding: '14px 30px',
                marginRight: '15px',
                fontSize: '18px',
                border: '1px solid transparent',
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: theme.palette.primary.main,
                  border: '2px solid ' + theme.palette.primary.main,
                },
              }}
            >
              Classify Again
            </Button>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default ClassifyAgain;
