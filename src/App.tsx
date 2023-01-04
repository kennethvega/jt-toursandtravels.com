import { useState } from 'react';

import Hero from './component/Hero';
import Navbar from './component/navigation/NavbarDesktop';
import Tours from './component/product/Tours';
import Review from './component/review/Review';
import Faq from './component/faq/Faq';
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Tours />
      <Review />
      <Faq />
    </div>
  );
}

export default App;
