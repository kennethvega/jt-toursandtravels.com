import React from 'react';
import Container from '../utility/Container';
import logo from '../../assets/JT-tours&travels.jpg';
import { useScrollPosition } from '../../hooks/useScrollPosition';
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
const NavbarDesktop = () => {
  const scrollPosition = useScrollPosition();
  return (
    <div className={classNames(scrollPosition > 100 ? 'shadow' : 'shadow-none', `sticky top-0  z-50 w-full `)}>
      <Container>
        <div className="h-20 flex justify-between items-center">
          {/* <img src={logo} alt="jt-toursandtravels-logo" /> */}
          <h1 className="text-2xl font-semibold text-darkBlue">JT-Tours&Travels</h1>
          <ul className="flex gap-7 text-lg">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Travel packages</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">FAQ's</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default NavbarDesktop;
