import { createTheme } from '@mui/material/styles';

export const luxuryTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
      light: '#333333',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#B8860B',
      light: '#DAA520', 
      dark: '#8B6914',
      contrastText: '#000000',
    },
    background: {
      default: '#FEFEFE',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: '#666666',
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
  },
  typography: {
    fontFamily: '"Playfair Display", "Times New Roman", serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 400,
      fontSize: '3.5rem',
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 400,
      fontSize: '2.5rem',
      letterSpacing: '-0.01em',
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 400,
      fontSize: '2rem',
      letterSpacing: '0em',
      lineHeight: 1.4,
    },
    h4: {
      fontFamily: '"Lato", sans-serif',
      fontWeight: 300,
      fontSize: '1.5rem',
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
    },
    h5: {
      fontFamily: '"Lato", sans-serif',
      fontWeight: 400,
      fontSize: '1.25rem',
      letterSpacing: '0.01em',
    },
    h6: {
      fontFamily: '"Lato", sans-serif',
      fontWeight: 500,
      fontSize: '1.1rem',
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
    },
    body1: {
      fontFamily: '"Lato", sans-serif',
      fontWeight: 300,
      fontSize: '1rem',
      letterSpacing: '0.01em',
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: '"Lato", sans-serif',
      fontWeight: 300,
      fontSize: '0.875rem',
      letterSpacing: '0.01em',
      lineHeight: 1.5,
    },
    button: {
      fontFamily: '"Lato", sans-serif',
      fontWeight: 400,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '12px 40px',
          fontSize: '0.875rem',
          fontWeight: 400,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          border: '1px solid transparent',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-1px)',
          },
        },
        contained: {
          backgroundColor: '#000000',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#333333',
          },
        },
        outlined: {
          borderColor: '#000000',
          color: '#000000',
          '&:hover': {
            backgroundColor: '#000000',
            color: '#ffffff',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          borderBottom: '1px solid #E0E0E0',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          color: 'inherit',
          transition: 'all 0.3s ease',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-2px',
            left: 0,
            width: 0,
            height: '1px',
            backgroundColor: 'currentColor',
            transition: 'width 0.3s ease',
          },
          '&:hover::after': {
            width: '100%',
          },
        },
      },
    },
  },
});