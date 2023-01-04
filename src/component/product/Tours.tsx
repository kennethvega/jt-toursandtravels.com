import React from 'react';
import Search from '../Search';
import Container from '../utility/Container';
import ToursList from './ToursList';

const Tours = () => {
  return (
    <section>
      <Container>
        <h3 className="text-center mb-6 text-2xl font-semibold text-blue">DISCOVER OUR BEST DEALS</h3>
        <ToursList />
      </Container>
    </section>
  );
};

export default Tours;
