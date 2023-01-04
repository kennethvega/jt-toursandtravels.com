import React from 'react';
import Container from '../utility/Container';
import ReviewList from './ReviewList';

const Review = () => {
  return (
    <Container>
      <section className="mt-10">
        <div className="flex justify-center">
          <h3 className="mb-10 text-2xl font-semibold text-darkBlue border-b-8 border-blue py-2">WE MAKE PEOPLE GENUINELY HAPPY</h3>
        </div>
        <ReviewList />
      </section>
    </Container>
  );
};

export default Review;
