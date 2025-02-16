import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#fc8be0',
      main: '#ff54d5',
      dark: '##8a0a6a',
      contrastText: '#fff',
    },
    secondary: {
      light: '#d67dfa',
      main: '#b343e0',
      dark: '#5e187a',
      contrastText: '#000',
    },
    common: {
      white: '#a64473',
    },
  },
  shape: {
    borderRadius: 4,
  },
});