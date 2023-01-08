import axios from 'axios';
import { Booking } from '../../../ts/bookingTypes';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api/booking/`;


// CREATE NEW BOOKING
const createBooking = async (formData: Booking) => {
  const response = await axios.post(API_URL, formData, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  return response.data;
};




const bookingService = {

  createBooking,
};
export default bookingService;
