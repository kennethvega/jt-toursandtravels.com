import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { ProductType } from '../../ts/productTypes';

type ToursCardProps = {
  product: ProductType;
};

const ToursCard = ({ product }: ToursCardProps) => {
  return (
    <div className="bg-[#fff] rounded-md shadow overflow-hidden">
      <img src={product.image?.imageURL} alt="tours image" className="w-[20rem]" />
      <div className="p-2">
        <div className="flex justify-between">
          <h4 className="text-xl font-bold text-darkBlue hover:text-blue cursor-pointer">{product.city.toUpperCase()}</h4>
          <p className="text-gray text-md">₱{product.price}</p>
        </div>
        <span className="flex items-center text-gray text-lg gap-1">
          <IoLocationSharp className="text-blue" /> {product.country.charAt(0).toUpperCase() + product.country.slice(1)}
        </span>
        <div className="mt-3">
          <span className="text-gray mt-10 cursor-pointer hover:text-blue">Learn more &rarr;</span>
        </div>
      </div>
    </div>
  );
};

export default ToursCard;
