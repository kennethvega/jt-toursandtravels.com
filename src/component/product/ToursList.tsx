import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../services/toursService';
import { ProductType } from '../../ts/toursType';
import Search from '../Search';
import ToursCard from './ToursCard';

const ToursList = () => {
  const [products, setProduct] = useState([]);
  // fetch data
  useEffect(() => {
    getAllProducts()
      .then((response) => {
        console.log(response);
        setProduct(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // useEffect(() => {
  //   // get all products
  //   if (isLoggedIn && products.length === 0) {
  //     dispatch(getAllProducts());
  //   }
  // }, [isLoggedIn]);

  // useEffect(() => {
  //   dispatch(FILTER_PRODUCTS({ products, search }));
  // }, [products, search, dispatch]);
  return (
    <div>
      <Search />
      <div className="flex gap-10 flex-wrap justify-center mt-10">
        {products.map((product: ProductType) => (
          <ToursCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ToursList;
