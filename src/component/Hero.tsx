import React from 'react';
import Container from './utility/Container';
import heroImage from '../assets/jt-hero-image.webp';
import cebuPacific from '../assets/cebu-pacific.webp';
import deptTourism from '../assets/department-tourism.webp';
import Button from './utility/Button';
const Hero = () => {
  return (
    <Container>
      <section className="min-h-[100vh] min-w-full flex items-center justify-center">
        <div className="-mt-12 flex justify-between w-full gap-5">
          <div className="flex flex-col gap-5 max-w-2xl">
            <h1 className="text-5xl font-bold text-darkBlue">Travel Around The World With JT Tours & Travels</h1>
            <h3 className="text-gray text-2xl">The best travel agency description, and the best travel agency description</h3>
            <div className="mt-10">
              <Button>Explore travel packages</Button>
            </div>
            <div className="mt-10">
              <p className="text-gray">Partnership with</p>
              <div className="flex gap-10 items-center">
                <img src={cebuPacific} alt="cebu pacific logo" />
                <img src={deptTourism} alt="department of tourism logo" />
              </div>
            </div>
          </div>
          <img src={heroImage} alt="tourist destination images" className="max-h-[27rem] -mt-5" />
        </div>
      </section>
    </Container>
  );
};

export default Hero;
