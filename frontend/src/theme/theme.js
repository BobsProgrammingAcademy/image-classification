import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: 'rgb(242, 243, 245)',
      paper: 'rgb(255, 255, 255)',
    },
    primary: {
      main: 'rgb(76, 48, 135)',
    },
    secondary: {
      main: 'rgb(255, 255, 255)',
    },
    text: {
      primary: 'rgb(60, 60, 60)',
      secondary: 'rgb(123, 132, 140)',
    },
    success: {
      main: 'rgb(0, 176, 85)',
    },
    info: {
      main: 'rgb(0, 149, 211)',
    },
    warning: {
      main: 'rgb(243, 149, 48)',
    },
    error: {
      main: 'rgb(255, 40, 52)',
    },
    divider: 'rgb(197, 197, 197)',
  },
  typography: {
    button: {
      fontWeight: 600,
    },
    fontFamily: '"Roboto", sans-serif',
    fontSize: 13,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.25,
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.25,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.25,
    },
    h4: {
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: 1.25,
    },
    h5: {
      fontSize: '1.0625rem',
      fontWeight: 500,
      lineHeight: 1.25,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.25,
    },
    overline: {
      fontWeight: 600,
    },
  },
});

export default theme;
