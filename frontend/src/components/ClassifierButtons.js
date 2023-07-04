import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useTheme, useMediaQuery } from '@mui/material';
import ResetIcon from '@mui/icons-material/RotateLeft';
import SendIcon from '@mui/icons-material/SendToMobile';

const ClassifierButtons = ({ submitOnClick, resetOnClick }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <>
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
            Send Image
          </Button>
          <Box
            marginTop={{ xs: 2, sm: 0 }}
            marginLeft={{ sm: 1 }}
            width={{ xs: '100%', md: 'auto' }}
          >
            <Button
              variant='outlined'
              color='primary'
              size='medium'
              startIcon={<ResetIcon />}
              fullWidth={isMd ? false : true}
              disableElevation={true}
              onClick={resetOnClick}
              sx={{
                padding: '14px 30px',
                marginRight: '45px',
                fontSize: '18px',
                border: '2px solid ' + theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.common.white,
                  border: '2px solid ' + theme.palette.primary.main,
                },
              }}
            >
              Reset Image
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ClassifierButtons;
