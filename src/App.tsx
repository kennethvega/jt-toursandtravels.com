import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer';
import NavbarDesktop from './component/navigation/NavbarDesktop';
import Test from './component/Test';
import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarDesktop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tour/:id" element={<Test />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
