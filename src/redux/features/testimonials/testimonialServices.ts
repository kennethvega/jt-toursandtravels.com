import axios from 'axios';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api/testimonial/`;

// GET ALL TESTIMONIAL
const getAllTestimonial = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const testimonialService = {
  getAllTestimonial,
};

export default testimonialService;
