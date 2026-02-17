import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Navigation from './frontends/Navigation';
import Home from './frontends/home';
import Shop from './frontends/shop';
import About from './frontends/about';
import Archive from './frontends/archive/archive';

const AppRouter: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navigation />
      <Box 
        component="main" 
        sx={{
          flex: 1,
          py: { xs: 4, sm: 6, md: 8 },
        }}
      >
        <Container 
          maxWidth="xl" 
          sx={{ 
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/archive" element={<Archive />} />
          </Routes>
        </Container>
      </Box>
    </Box>
  );
};

export default AppRouter;