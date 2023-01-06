import React, { useEffect, useState } from 'react';
import { getAllFaqs } from '../../redux/features/faq/faqSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import FaqCard from './FaqCard';
import { motion } from 'framer-motion';
const FaqList = () => {
  const dispatch = useAppDispatch();
  const { faqs, isError, message } = useAppSelector((state) => state.faq);
  useEffect(() => {
    if (faqs.length === 0) {
      //fetch bookings
      dispatch(getAllFaqs());
    }
    if (isError) {
      console.log(message);
    }
  }, [isError, message, dispatch]);
  return (
    <motion.div viewport={{ once: true, amount: 0.4 }} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'linear' }}>
      {faqs.map((faq) => (
        <FaqCard key={faq._id} faq={faq} />
      ))}
    </motion.div>
  );
};

export default FaqList;
