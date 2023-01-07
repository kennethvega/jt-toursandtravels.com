import axios from 'axios';
import { Booking } from '../../../ts/bookingTypes';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api/booking/`;

// GET ALL BOOKINGS
const getAllBookings = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// CREATE NEW BOOKING
const createBooking = async (formData: Booking) => {
  const response = await axios.post(API_URL, formData, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  return response.data;
};

// UPDATE BOOKING STATUS
const updateStatus = async (id: string, status: boolean) => {
  const response = await axios.patch(`${API_URL}${id}`, { status: status });
  return response.data;
};

// DELETE A BOOKING
const deleteBooking = async (id: string) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};

const bookingService = {
  getAllBookings,
  updateStatus,
  deleteBooking,
  createBooking,
};
export default bookingService;
