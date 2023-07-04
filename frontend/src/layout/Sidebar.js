import React, { useEffect } from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useTheme, useMediaQuery } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';

const Sidebar = ({ onMobileClose, openMobile }) => {
  const theme = useTheme();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, []);

  return (
    <>
      <Drawer
        anchor='left'
        onClose={onMobileClose}
        open={!lgUp && openMobile}
        variant='temporary'
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.background.default,
            width: 256,
          },
        }}
      >
        <Box
          alignItems='flex-start'
          display='flex'
          flexDirection='column'
          height='100%'
          padding={2}
        >
          <Link href='/' style={{ textDecoration: 'none' }}>
            <Box>
              <IconButton size='large' disabled>
                <CameraAltIcon
                  style={{
                    color: theme.palette.primary.main,
                    height: 30,
                    width: 30,
                  }}
                />
                <Typography
                  component='h1'
                  variant='h6'
                  color={theme.palette.text.primary}
                  flexGrow={1}
                  fontWeight='bold'
                  textDecoration='none'
                  marginLeft='10px'
                >
                  Image Classification
                </Typography>
              </IconButton>
            </Box>
          </Link>
          <Box display='flex' paddingBottom={2} paddingTop={5}>
            <Button
              color='primary'
              component='a'
              href='/'
              size='small'
              variant='text'
              sx={{
                color: theme.palette.text.secondary,
                fontSize: theme.typography.body2,
                fontWeight: 'medium',
                mr: 2,
                '& svg': {
                  mr: 0.5,
                },
              }}
            >
              <HomeOutlinedIcon /> Home
            </Button>
          </Box>
          <Button
            color='primary'
            component='a'
            href='/classifier'
            size='small'
            variant='text'
            sx={{
              color: theme.palette.text.secondary,
              fontSize: theme.typography.body2,
              fontWeight: 'medium',
              mr: 2,
              '& svg': {
                mr: 0.5,
              },
            }}
          >
            <InsertPhotoOutlinedIcon style={{ height: 23, width: 23 }} /> Image
            Classifier
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
