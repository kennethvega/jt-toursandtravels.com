import React from 'react';
import { ImQuotesRight } from 'react-icons/im';
const ReviewCard = ({ review }: any) => {
  return (
    <div className="bg-[#fff] min-w-[20rem] min-h-[15rem] rounded-md shadow  p-5">
      <ImQuotesRight className="text-blue mb-2 text-2xl" />
      <p>{review.message}</p>
      <div className="flex items-center gap-5">
        <img src={review.image.imageURL} alt={`${review.name} review`} className="w-14 h-14 object-cover rounded-full mt-4" />
        <h4 className="font-bold">{review.name}</h4>
      </div>
    </div>
  );
};

export default ReviewCard;
