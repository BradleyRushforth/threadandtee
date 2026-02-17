import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Grid, 
  Container,
  Divider,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <Box>
      <Box 
        sx={{ 
          textAlign: 'center',
          py: { xs: 8, sm: 12, md: 16 },
          mb: { xs: 8, sm: 12, md: 16 }
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            mb: 3,
            fontFamily: '"Playfair Display", serif',
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '-0.02em'
          }}
        >
          Crafted Excellence
        </Typography>
        
        <Typography
          variant="h4"
          component="h2"
          sx={{
            mb: 6,
            maxWidth: '600px',
            mx: 'auto',
            fontFamily: '"Lato", sans-serif',
            fontWeight: 300,
            fontSize: { xs: '1rem', sm: '1.25rem' },
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: 'text.secondary'
          }}
        >
          Where luxury meets conscious design
        </Typography>

        <Button
          variant="outlined"
          size="large"
          component={RouterLink}
          to="/shop"
          sx={{
            px: 6,
            py: 2,
            fontSize: '0.875rem',
            fontWeight: 400,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            border: '1px solid',
            borderColor: 'primary.main',
            color: 'primary.main',
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: 'primary.main',
              color: 'white',
              transform: 'translateY(-2px)',
            }
          }}
        >
          Discover Collection
        </Button>
      </Box>

      <Divider sx={{ mb: { xs: 8, sm: 12, md: 16 } }} />

      <Grid container spacing={{ xs: 4, sm: 6, md: 8 }} sx={{ mb: { xs: 8, sm: 12, md: 16 } }}>
        <Grid size={{xs: 12, md: 6}}>
          <Box 
            sx={{
              height: { xs: '300px', sm: '400px', md: '500px' },
              backgroundColor: 'grey.100',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                fontStyle: 'italic',
                letterSpacing: '0.1em'
              }}
            >
              [Luxury Image Placeholder]
            </Typography>
          </Box>
        </Grid>
        
        <Grid size={{xs: 12, md: 6}}>
          <Box sx={{ px: { xs: 0, md: 4 }, py: { xs: 4, md: 8 } }}>
            <Typography
              variant="h2"
              component="h3"
              sx={{
                mb: 4,
                fontFamily: '"Playfair Display", serif',
                fontSize: { xs: '2rem', sm: '2.5rem' },
                fontWeight: 400,
                lineHeight: 1.3
              }}
            >
              Timeless Sophistication
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontSize: '1.1rem',
                lineHeight: 1.7,
                fontWeight: 300,
                color: 'text.secondary'
              }}
            >
              Each piece in our collection is meticulously crafted with attention to detail 
              that defines true luxury. We believe in creating garments that transcend 
              seasonal trends and become treasured elements of your wardrobe.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 6,
                fontSize: '1.1rem',
                lineHeight: 1.7,
                fontWeight: 300,
                color: 'text.secondary'
              }}
            >
              Our commitment to excellence extends beyond aesthetics to embrace 
              sustainable practices and ethical manufacturing, ensuring each piece 
              reflects our values of responsibility and refinement.
            </Typography>

            <Button
              variant="outlined"
              component={RouterLink}
              to="/about"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '0.8rem',
                fontWeight: 400,
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}
            >
              Our Story
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Box 
        sx={{ 
          py: { xs: 6, sm: 8, md: 10 },
          backgroundColor: 'grey.50',
          mx: { xs: -2, sm: -3, md: -4 },
          px: { xs: 2, sm: 3, md: 4 }
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {[
              { title: 'Exclusive Drops', description: 'Limited collections released seasonally for discerning tastes' },
              { title: 'Premium Materials', description: 'Finest fabrics sourced from renowned mills worldwide' },
              { title: 'Artisan Craftsmanship', description: 'Each piece carefully constructed by skilled artisans' }
            ].map((feature, index) => (
              <Grid size={{xs: 12, sm: 4}} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      fontFamily: '"Lato", sans-serif',
                      fontSize: '0.9rem',
                      fontWeight: 400,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase'
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      fontWeight: 300,
                      maxWidth: '250px',
                      mx: 'auto'
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;