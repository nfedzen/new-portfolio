import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Stack from './components/Stack'
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Stack />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
