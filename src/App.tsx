import { useState } from 'react';
import Hero from './component/Hero';
import Navbar from './component/navigation/NavbarDesktop';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
