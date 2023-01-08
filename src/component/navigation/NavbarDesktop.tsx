import Container from '../utility/Container';
import { HashLink as Link } from 'react-router-hash-link';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { motion } from 'framer-motion';
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
const NavbarDesktop = () => {
  const scrollPosition = useScrollPosition();
  return (
    <header className={classNames(scrollPosition > 100 ? 'shadow' : 'shadow-none', `sticky top-0  z-50 w-full bg-white `)}>
      <Container>
        <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="h-16 flex justify-between items-center">
          <Link to="/#">
            <h1 className="text-2xl font-semibold text-darkBlue">JT-Tours&Travels</h1>
          </Link>
          <ul className="flex gap-7">
            <li>
              <Link to="/#" className="link p-2">
                Home
              </Link>
            </li>
            <li>
              <Link to="/#product" className="link p-2">
                Travel packages
              </Link>
            </li>
            <li>
              <Link to="/#about" className="link p-2">
                About
              </Link>
            </li>
            <li>
              <Link to="/#faq" className="link p-2">
                FAQ's
              </Link>
            </li>
            <li>
              <Link to="/#contact" className="link p-2">
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>
      </Container>
    </header>
  );
};

export default NavbarDesktop;
