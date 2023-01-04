import { useEffect, useState } from 'react';
import { FILTER_PRODUCTS, selectFilteredProducts } from '../../redux/features/products/filterSlice';
import { getAllProducts } from '../../redux/features/products/productSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Search from '../Search';
import ToursCard from './ToursCard';

const ToursList = () => {
  const dispatch = useAppDispatch();
  const { products, isLoading, isError, message } = useAppSelector((state) => state.product);
  const filteredProducts = useAppSelector(selectFilteredProducts);
  const [search, setSearch] = useState('');
  useEffect(() => {
    // get all products
    if (products.length === 0) {
      dispatch(getAllProducts());
    }
  }, []);

  useEffect(() => {
    dispatch(FILTER_PRODUCTS({ products, search }));
  }, [products, search, dispatch]);

  return (
    <div>
      <Search value={search} onChange={(e: any) => setSearch(e.target.value)} />
      <div className="flex gap-10 flex-wrap justify-center mt-10">
        {filteredProducts.map((product: any) => (
          <ToursCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ToursList;
