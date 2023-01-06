import React from 'react';
import Container from '../utility/Container';
import FaqList from './FaqList';
import { motion } from 'framer-motion';
const Faq = () => {
  return (
    <motion.div viewport={{ once: true, amount: 0.4 }} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'linear' }} className="my-20 pb-16 bg-[#F5F5F5] w-full" id="faq">
      <Container>
        <div className="flex justify-center">
          <h3 className="mb-6 mt-14 text-2xl font-semibold text-darkBlue border-b-8 border-blue py-2">FREQUENTLY ASKED QUESTION</h3>
        </div>
        <FaqList />
      </Container>
    </motion.div>
  );
};

export default Faq;
