import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './frontends/Navigation';
import Home from './frontends/home';
import Shop from './frontends/shop';
import About from './frontends/about';

const AppRouter: React.FC = () => {
  return (
    <div className="App">
      <Navigation />
      <main style={mainStyles}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
};

const mainStyles: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '2rem 1rem',
};

export default AppRouter;