import axios from 'axios';
// GET ALL PRODUCTS
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api/products/`;

export const getAllProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
