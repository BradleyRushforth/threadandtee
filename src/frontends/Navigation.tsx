import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav style={navStyles}>
      <div style={navContainerStyles}>
        <Link to="/" style={linkStyles}>Home</Link>
        <Link to="/shop" style={linkStyles}>Shop</Link>
        <Link to="/about" style={linkStyles}>About</Link>
      </div>
    </nav>
  );
};

const navStyles: React.CSSProperties = {
  backgroundColor: '#333',
  padding: '1rem 0',
};

const navContainerStyles: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  gap: '2rem',
  paddingLeft: '1rem',
};

const linkStyles: React.CSSProperties = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1.1rem',
  fontWeight: '500',
};

export default Navigation;