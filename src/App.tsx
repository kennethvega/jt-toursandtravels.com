import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer';
import NavbarDesktop from './component/navigation/NavbarDesktop';
import ScrollToTop from './component/ScrollToTop';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Success from './pages/Success';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarDesktop />
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
