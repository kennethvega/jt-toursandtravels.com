import Navbar from './component/navigation/NavbarDesktop';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test from './component/Test';
import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tour/:id" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
