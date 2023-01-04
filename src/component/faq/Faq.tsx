import React from 'react';
import Container from '../utility/Container';
import FaqList from './FaqList';

const Faq = () => {
  return (
    <Container>
      <section>
        <div className="flex justify-center">
          <h3 className="my-10 text-2xl font-semibold text-darkBlue border-b-8 border-blue py-2">FREQUENTLY ASKED QUESTION</h3>
        </div>
        <FaqList />
      </section>
    </Container>
  );
};

export default Faq;
