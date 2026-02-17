import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  Link,
  Container,
  Stack
} from '@mui/material';

const Navigation: React.FC = () => {
  return (
    <AppBar 
      position="static" 
      elevation={0}
      sx={{ 
        backgroundColor: 'transparent',
        color: 'text.primary',
        borderBottom: '1px solid',
        borderColor: 'grey.200',
        py: 2
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ px: { xs: 0, sm: 0 }, justifyContent: 'space-between' }}>
          <Typography
            variant="h3"
            component={RouterLink}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              fontFamily: '"Playfair Display", serif',
              fontWeight: 400,
              fontSize: { xs: '1.8rem', sm: '2.2rem' },
              letterSpacing: '-0.02em',
              '&:hover': {
                textDecoration: 'none',
              }
            }}
          >
            Thread & Tee
          </Typography>

          <Stack 
            direction="row" 
            spacing={{ xs: 3, sm: 5 }}
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            {[
              { label: 'Shop', path: '/shop' },
              { label: 'About', path: '/about' },
              { label: 'Archive', path: '/archive' },
            ].map((item) => (
              <Link
                key={item.path}
                component={RouterLink}
                to={item.path}
                sx={{ 
                  color: 'text.primary',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 300,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontFamily: '"Lato", sans-serif',
                  position: 'relative',
                  py: 1,
                  transition: 'all 0.3s ease-in-out',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -4,
                    left: 0,
                    width: 0,
                    height: '1px',
                    backgroundColor: 'primary.main',
                    transition: 'width 0.3s ease-in-out',
                  },
                  '&:hover': {
                    color: 'primary.main',
                    '&::after': {
                      width: '100%',
                    }
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
          </Stack>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Typography
              variant="body2"
              sx={{
                fontFamily: '"Lato", sans-serif',
                fontWeight: 300,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontSize: '0.75rem'
              }}
            >
              Menu
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;