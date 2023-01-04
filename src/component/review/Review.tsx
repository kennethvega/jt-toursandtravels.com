import React from 'react';
import Container from '../utility/Container';
import ReviewList from './ReviewList';

const Review = () => {
  return (
    <Container>
      <section className="m-20">
        <h3 className="text-center mb-6 text-2xl font-semibold text-blue">WE MAKE PEOPLE GENUINELY HAPPY</h3>
        <ReviewList />
      </section>
    </Container>
  );
};

export default Review;
