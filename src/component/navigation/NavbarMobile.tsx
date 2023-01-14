import { useState } from 'react';
import Hamburger from 'hamburger-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { HashLink as Link } from 'react-router-hash-link';
import Overlay from '../utility/Overlay';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
const NavbarMobile = () => {
  const scrollPosition = useScrollPosition();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className={classNames(scrollPosition > 100 ? 'shadow' : 'shadow-none', `sticky top-0  z-50 w-full bg-white  h-16 flex items-center px-2`)}>
        <Link to="/#">
          <h1 className="text-2xl font-semibold text-darkBlue">JT-Tours&Travels</h1>
        </Link>
      </header>
      <nav>
        <ul id="primary-navigation" className={`${isOpen ? 'active' : ''} primary-navigation  flex justify-center items-center gap-5 text-base z-[1000] bg-white`}>
          <li onClick={() => setIsOpen(false)}>
            <Link to="/#" className="link p-2">
              Home
            </Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link to="/#product" className="link p-2 ">
              Packages
            </Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link to="/#about" className="link p-2">
              About
            </Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link to="/#faq" className="link p-2">
              FAQ's
            </Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link to="/#contact" className="link p-2">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <button className="flex z-50 mobile-nav-toggle  fixed top-2 right-4" aria-controls="primary-navigation" aria-expanded="false" aria-label="button">
        <Hamburger toggled={isOpen} toggle={setIsOpen} aria-label="mobile menu navigation button" button-name="mobile hamburger navigation menu" />
      </button>

      {isOpen && <Overlay handleClose={() => setIsOpen(false)} />}
    </>
  );
};

export default NavbarMobile;
