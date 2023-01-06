import React from 'react';
import About from '../component/About';
import Faq from '../component/faq/Faq';
import Hero from '../component/Hero';
import Tours from '../component/product/Tours';
import Review from '../component/review/Review';
import { motion } from 'framer-motion';
const Home = () => {
  return (
    <>
      <Hero />
      <section id="product" className="pt-[64px]">
        <Tours />
      </section>
      <div id="about" className="pt-[64px] bg-[#F5F5F5]"></div>
      <motion.section viewport={{ once: true, amount: 0.5 }} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'linear' }} className="mt-6">
        <About />
        <Review />
      </motion.section>
      <Faq />
    </>
  );
};

export default Home;
