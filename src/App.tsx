import Hero from './component/Hero';
import Navbar from './component/navigation/NavbarDesktop';
import Tours from './component/product/Tours';
import Review from './component/review/Review';
import Faq from './component/faq/Faq';
import About from './component/About';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Tours />
      <About />
      <Review />
      <Faq />
    </BrowserRouter>
  );
}

export default App;
