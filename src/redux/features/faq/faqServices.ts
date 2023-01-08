import axios from 'axios';
import { Faq } from '../../../ts/faqTypes';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api/faq/`;

// GET ALL FAQ's
const getAllFaqs = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const faqService = {
  getAllFaqs,
};

export default faqService;
