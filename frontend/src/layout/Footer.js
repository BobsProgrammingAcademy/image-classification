import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

const Footer = () => {
    const theme = useTheme();

    return (
        <React.Fragment>
            <Box
                backgroundColor={theme.palette.background.default}
                paddingTop='1px'
                paddingBottom='1px'
                // sticky footer - see four values below
                position='fixed'
                bottom='0'
                left='0'
                width='100%'
            >
                <Divider />
                <Box
                    backgroundColor={theme.palette.background.default}
                    position='relative'
                    padding={theme.spacing(0.25)}
                >
                    <Grid container spacing={0}>
                        <Hidden mdDown>
                            <Grid container item xs={12} md={4}>
                                <List
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        padding: 0
                                    }}
                                >
                                    <ListItemButton component='a' href='www.google.com'>
                                        <ListItemText 
                                            primary={
                                                <Typography 
                                                    variant='body2'
                                                    color={theme.palette.text.secondary}
                                                >
                                                    Privacy Policy
                                                </Typography>
                                            }
                                        />
                                    </ListItemButton>
                                    <ListItemButton component='a' href='#'>
                                        <ListItemText 
                                            primary={
                                                <Typography 
                                                    variant='body2'
                                                    color={theme.palette.text.secondary}
                                                >
                                                    Terms of Use
                                                </Typography>
                                            }
                                        />
                                    </ListItemButton>
                                </List>
                            </Grid>
                        </Hidden>
                        <Grid container item xs={12} md={4} justifyContent='center'>
                            <List>
                                <ListItemButton>
                                    <ListItemText 
                                        primary={
                                            <Typography 
                                                variant='body2'
                                                color={theme.palette.text.secondary}
                                            >
                                                Copyright &copy; {new Date().getFullYear()} Queen's University Faculty of Engineering.
                                            </Typography>
                                        }
                                    />
                                </ListItemButton>
                            </List>
                        </Grid>

                        <Grid container item xs={12} md={4} justifyContent='center'>
                            <List>
                                <ListItemButton>
                                    <ListItemText 
                                        primary={
                                            <Typography 
                                                variant='body2'
                                                color={theme.palette.text.secondary}
                                            >
                                                A project by
                                                {' '}
                                                <Link 
                                                    href='https://github.com/naoddereje/ELEC_498_capstone_project'
                                                    alt='ELEC 498'
                                                    target='_blank'
                                                    rel='noreferrer'
                                                    color={theme.palette.text.secondary}
                                                >
                                                    ELEC 498 Group 16
                                                </Link>
                                                {' '}
                                                under the supervision of 
                                                {' '} 
                                                <Link 
                                                    href='https://www.ece.queensu.ca/people/MJ-Korenberg/index.html'
                                                    alt='KorenBurg'
                                                    target='_blank'
                                                    rel='noreferrer'
                                                    color={theme.palette.text.secondary}
                                                >
                                                    Dr. Michael Korenburg
                                                </Link>.
                                            </Typography>
                                        }
                                    />
                                </ListItemButton>
                            </List>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </React.Fragment>
    );
};

export default Footer;