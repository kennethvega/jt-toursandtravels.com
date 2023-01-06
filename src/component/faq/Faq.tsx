import React from 'react';
import Container from '../utility/Container';
import FaqList from './FaqList';

const Faq = () => {
  return (
    <div className="my-20 pb-16 bg-[#F5F5F5] w-full" id="faq">
      <Container>
        <div className="flex justify-center">
          <h3 className="mb-6 mt-14 text-2xl font-semibold text-darkBlue border-b-8 border-blue py-2">FREQUENTLY ASKED QUESTIONS</h3>
        </div>
        <FaqList />
      </Container>
    </div>
  );
};

export default Faq;
