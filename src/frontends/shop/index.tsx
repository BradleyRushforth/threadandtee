import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card,
  CardMedia,
  CardContent,
  Button,
  Container,
  Chip,
  Stack
} from '@mui/material';

const Shop: React.FC = () => {
  const products = [
    { id: 1, name: 'Essential White Tee', price: '€125', category: 'Essentials', status: 'New' },
    { id: 2, name: 'Premium Black Shirt', price: '€285', category: 'Premium', status: 'Limited' },
    { id: 3, name: 'Luxury Polo', price: '€195', category: 'Casual', status: '' },
    { id: 4, name: 'Classic Oxford', price: '€225', category: 'Formal', status: 'Bestseller' },
    { id: 5, name: 'Signature Hoodie', price: '€165', category: 'Casual', status: 'New' },
    { id: 6, name: 'Artisan Knit', price: '€345', category: 'Premium', status: 'Limited' }
  ];

  return (
    <Box>
      <Box sx={{ textAlign: 'center', mb: { xs: 6, sm: 8, md: 10 } }}>
        <Typography
          variant="h1"
          component="h1"
          sx={{
            mb: 3,
            fontFamily: '"Playfair Display", serif',
            fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
            fontWeight: 400,
            letterSpacing: '-0.01em'
          }}
        >
          Collection
        </Typography>
        
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Lato", sans-serif',
            fontWeight: 300,
            fontSize: { xs: '0.9rem', sm: '1rem' },
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'text.secondary',
            maxWidth: '500px',
            mx: 'auto'
          }}
        >
          Curated pieces for the discerning individual
        </Typography>
      </Box>

      <Grid container spacing={{ xs: 3, sm: 4, md: 5 }}>
        {products.map((product) => (
          <Grid size={{xs: 12, sm: 6, lg: 4}} key={product.id}>
            <Card 
              elevation={0}
              sx={{ 
                backgroundColor: 'transparent',
                border: 'none',
                '&:hover': {
                  '& .product-image': {
                    transform: 'scale(1.02)',
                  }
                }
              }}
            >
              <Box
                className="product-image"
                sx={{
                  height: { xs: '400px', sm: '450px', md: '500px' },
                  backgroundColor: 'grey.100',
                  mb: 3,
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.3s ease-in-out',
                  overflow: 'hidden'
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
                  [{product.name}]
                </Typography>
                
                {product.status && (
                  <Chip
                    label={product.status}
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      backgroundColor: product.status === 'Limited' ? 'secondary.main' : 'primary.main',
                      color: 'white',
                      fontFamily: '"Lato", sans-serif',
                      fontSize: '0.7rem',
                      fontWeight: 400,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase'
                    }}
                  />
                )}
              </Box>

              <CardContent sx={{ p: 0, textAlign: 'center' }}>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 1,
                    fontFamily: '"Lato", sans-serif',
                    fontSize: '0.75rem',
                    fontWeight: 400,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'text.secondary'
                  }}
                >
                  {product.category}
                </Typography>
                
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    mb: 2,
                    fontFamily: '"Lato", sans-serif',
                    fontSize: '1rem',
                    fontWeight: 400,
                    letterSpacing: '0.02em'
                  }}
                >
                  {product.name}
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    fontFamily: '"Lato", sans-serif',
                    fontSize: '1rem',
                    fontWeight: 300,
                    color: 'text.primary'
                  }}
                >
                  {product.price}
                </Typography>

                <Button
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{
                    py: 1.5,
                    fontSize: '0.75rem',
                    fontWeight: 400,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    border: '1px solid',
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      color: 'white'
                    }
                  }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center', mt: { xs: 8, sm: 10, md: 12 } }}>
        <Button
          variant="outlined"
          sx={{
            px: 6,
            py: 2,
            fontSize: '0.875rem',
            fontWeight: 400,
            letterSpacing: '0.15em',
            textTransform: 'uppercase'
          }}
        >
          Load More
        </Button>
      </Box>
    </Box>
  );
};

export default Shop;