import React, { useEffect, useState } from 'react';
import { getAllFaqs } from '../../redux/features/faq/faqSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import FaqCard from './FaqCard';

const FaqList = () => {
  const dispatch = useAppDispatch();
  const { faqs, isLoading, isError, message } = useAppSelector((state) => state.faq);
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
    <>
      {faqs.map((faq) => (
        <FaqCard key={faq._id} faq={faq} />
      ))}
    </>
  );
};

export default FaqList;
