import { useState } from 'react';
import Hero from './component/Hero';
import Navbar from './component/navigation/NavbarDesktop';
import Tours from './component/product/Tours';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Tours />
    </div>
  );
}

export default App;
