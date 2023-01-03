import React from 'react';
import Container from '../utility/Container';
import logo from '../../assets/JT-tours&travels.jpg';
const NavbarDesktop = () => {
  return (
    <div className="border-b">
      <Container>
        <div className="h-20 flex justify-between items-center">
          <img src={logo} alt="jt-toursandtravels-logo" />
          <ul className="flex gap-7">
            <li>
              <a href="" className="hover">
                Home
              </a>
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
