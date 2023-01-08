import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer';
import Navigation from './component/navigation/Navigation';
import ScrollToTop from './component/ScrollToTop';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Success from './pages/Success';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tour/:id" element={<ProductDetails />} />
            <Route path="/thankyou" element={<Success />} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
