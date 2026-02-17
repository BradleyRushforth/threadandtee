import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, CssBaseline, GlobalStyles } from '@mui/material';
import { luxuryTheme } from './theme/luxuryTheme';
import AppRouter from './AppRouter';

const globalStyles = (
  <GlobalStyles
    styles={{
      '@import': [
        'url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&display=swap")',
        'url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap")',
      ],
      '*': {
        boxSizing: 'border-box',
      },
      body: {
        fontFamily: '"Lato", sans-serif',
        background: 'linear-gradient(135deg, #FEFEFE 0%, #FAFAFA 100%)',
        minHeight: '100vh',
      },
      '#root': {
        minHeight: '100vh',
      },
    }}
  />
);

function App() {
  return (
    <ThemeProvider theme={luxuryTheme}>
      <CssBaseline />
      {globalStyles}
      <Router>
        <AppRouter />
      </Router>
    </ThemeProvider>
  );
}

export default App;
