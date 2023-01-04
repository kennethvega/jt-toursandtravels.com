import { useState } from 'react';
import Hero from './component/Hero';
import Navbar from './component/navigation/NavbarDesktop';
import Tours from './component/product/Tours';
import Review from './component/review/Review';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Tours />
      <Review />
    </div>
  );
}

export default App;
