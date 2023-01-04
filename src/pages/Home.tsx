import React from 'react';
import About from '../component/About';
import Faq from '../component/faq/Faq';
import Hero from '../component/Hero';
import Tours from '../component/product/Tours';
import Review from '../component/review/Review';

const Home = () => {
  return (
    <>
      <Hero />
      <section id="product" className="pt-[64px]">
        <Tours />
      </section>
      <div id="about" className="pt-[64px] bg-[#F5F5F5]"></div>
      <section className="mt-6">
        <About />
        <Review />
      </section>
      <Faq />
    </>
  );
};

export default Home;
