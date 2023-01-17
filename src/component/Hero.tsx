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
      <section className="mt-36 mb-16 xl:mt-20 sm:mt-10  w-full flex  xl:justify-center">
        <div className=" flex justify-between xl:flex-col w-full">
          <div className="flex flex-col xl:items-center xl:mx-auto  xl:text-center gap-5 justify-between max-w-2xl">
            <motion.h1 initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.2, ease: 'easeInOut' }} className="text-5xl xmd:text-4xl xxsm:text-2xl font-bold  text-darkBlue">
              START YOUR <span className="text-blue">NEW ADVENTURE AROUND THE WORLD</span> WITH US
            </motion.h1>
            <motion.h3 initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.3, ease: 'easeInOut' }} className="text-gray text-xl xmd:text-xl xxsm:text-base">
              Airline Tickets | Hotel Accommodation | Tour Packages | Travel Insurance | Visa Assistance
            </motion.h3>
            <motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.4, ease: 'easeInOut' }} className="mt-6 sm:mt-3">
              <Link to="/#product">
                <Button>Explore tour packages</Button>
              </Link>
            </motion.div>
            <motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.5, ease: 'easeInOut' }} className="mt-10 xmd:mt-0">
              <div className="flex gap-10 items-center sm:mb-6">
                <img src={cebuPacific} alt="cebu pacific logo" className="sm:h-10" />
                <img src={deptTourism} alt="department of tourism logo" className="sm:h-10" />
              </div>
            </motion.div>
          </div>
          <div className="xl:mx-auto">
            <motion.img
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              src={heroImage}
              alt="tourist destination images"
              className="max-h-[27rem] xmd:max-h-[20rem] -mt-5 sm:max-h-[15rem]"
            />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Hero;
