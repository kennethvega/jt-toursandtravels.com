import { Product } from '../../../ts/productTypes';
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api/products/`;

// GET ALL PRODUCTS
const getAllProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// GET A PRODUCT
const getProduct = async (id: string | undefined) => {
  const response = await axios.get(API_URL + id);
  return response.data;
};

const productService = {
  getAllProducts,
  getProduct,
};

export default productService;
