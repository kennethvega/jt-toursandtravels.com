import React from 'react';
import Search from '../Search';
import Container from '../utility/Container';
import ToursList from './ToursList';

const Tours = () => {
  return (
    <section>
      <Container>
        <div className="flex justify-center">
          <h3 className="text-center mb-6 text-2xl font-semibold text-darkBlue border-b-8 border-blue py-2">DISCOVER OUR BEST DEALS</h3>
        </div>
        <ToursList />
      </Container>
    </section>
  );
};

export default Tours;
