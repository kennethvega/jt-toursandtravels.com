import { useEffect, useState, useRef } from 'react';
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
  const nodeRef = useRef(null);
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
      {filteredProducts === undefined && <p>Tours not found</p>}
      <div className="flex gap-10 flex-wrap justify-center mt-10">
        {filteredProducts.map((product: any) => (
          <ToursCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default ToursList;
