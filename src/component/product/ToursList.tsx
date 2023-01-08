import { useEffect, useState, useRef } from 'react';
import { FILTER_PRODUCTS, selectFilteredProducts } from '../../redux/features/products/filterSlice';
import { getAllProducts } from '../../redux/features/products/productSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Search from '../Search';
import ToursCard from './ToursCard';
import { AnimatePresence, motion } from 'framer-motion';
import { ProductType } from '../../ts/productTypes';

const ToursList = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.product);
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
    <motion.div viewport={{ once: true, amount: 0.3 }} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'linear' }}>
      <Search value={search} onChange={(e: any) => setSearch(e.target.value)} />
      {filteredProducts.length > 0 ? (
        <>
          <motion.div layout className="flex gap-6 sm:gap-3 flex-wrap justify-center items-center mt-10">
            <AnimatePresence>
              {filteredProducts.map((product: any) => (
                <ToursCard product={product} key={product._id} />
              ))}
            </AnimatePresence>
          </motion.div>
        </>
      ) : (
        <p className="text-center mt-10">No tour package found</p>
      )}
    </motion.div>
  );
};

export default ToursList;
