import { IoLocationSharp } from 'react-icons/io5';
import { ProductType } from '../../ts/productTypes';
import { HashLink as Link } from 'react-router-hash-link';
import { motion } from 'framer-motion';
type ToursCardProps = {
  product: ProductType;
};

const ToursCard = ({ product }: ToursCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.3 }}
      className="bg-[#fff] rounded-md sm:rounded shadow overflow-hidden border-b-8 border-blue max-h-[23rem] max-w-[19rem] sm:max-h-[22rem] sm:max-w-[14rem] xxsm:max-w-[12rem] xsmall:max-w-[10rem]"
    >
      <img src={product.image?.imageURL} alt="tours image" className="h-[15rem] w-[20rem]" />
      <div className="p-2">
        <div className="flex justify-between">
          <Link to={`/tour/${product._id}`}>
            <h4 className="text-xl sm:text-sm font-bold text-darkBlue hover:text-blue cursor-pointer">{product.city.toUpperCase()}</h4>
          </Link>
          <p className="text-gray text-md sm:text-sm">₱{product.price}</p>
        </div>
        <span className="flex items-center text-gray text-lg sm:text-sm gap-1">
          <IoLocationSharp className="text-blue" /> {product.country.charAt(0).toUpperCase() + product.country.slice(1)}
        </span>
        <Link to={`/tour/${product._id}`}>
          <span className="link sm:text-sm text-gray mt-6 mb-3 cursor-pointer hover:text-blue">Learn more &rarr;</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default ToursCard;
