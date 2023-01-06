import Container from './utility/Container';
import heroImage from '../assets/jt-hero-image.webp';
import cebuPacific from '../assets/cebu-pacific.webp';
import deptTourism from '../assets/department-tourism.webp';
import Button from './utility/Button';
import { HashLink as Link } from 'react-router-hash-link';
import { motion } from 'framer-motion';
const Hero = () => {
  return (
    <Container>
      <section className="min-h-[100vh] min-w-full flex items-center justify-center">
        <div className="-mt-3 flex justify-between w-full gap-5">
          <div className="flex flex-col gap-5 max-w-2xl">
            <motion.h1 initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.2, ease: 'easeInOut' }} className="text-5xl font-bold text-darkBlue">
              Travel Around The World With JT Tours & Travels
            </motion.h1>
            <motion.h3 initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.3, ease: 'easeInOut' }} className="text-gray text-2xl">
              The best travel agency description, and the best travel agency description
            </motion.h3>
            <motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.4, ease: 'easeInOut' }} className="mt-6">
              <Link to="/#product">
                <Button>Explore travel packages</Button>
              </Link>
            </motion.div>
            <motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.5, ease: 'easeInOut' }} className="mt-10">
              <p className="text-gray">Partnership with</p>
              <div className="flex gap-10 items-center">
                <img src={cebuPacific} alt="cebu pacific logo" />
                <img src={deptTourism} alt="department of tourism logo" />
              </div>
            </motion.div>
          </div>
          <motion.img initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: 'easeInOut' }} src={heroImage} alt="tourist destination images" className="max-h-[27rem] -mt-5" />
        </div>
      </section>
    </Container>
  );
};

export default Hero;
