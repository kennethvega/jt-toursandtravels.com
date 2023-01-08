import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Booking, BookingsType } from '../../../ts/bookingTypes';

import bookingService from './bookingService';

type InitialState = {
  booking: Booking | null;
  bookings: BookingsType[];
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: string | unknown;
};
const initialState: InitialState = {
  booking: null,
  bookings: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

// CREATE NEW BOOKING
export const createBooking = createAsyncThunk('booking/create', async (formData: Booking, thunkAPI) => {
  try {
    return await bookingService.createBooking(formData);
  } catch (error: any) {
    // error message format
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    console.log(message);
    return thunkAPI.rejectWithValue(message);
  }
});

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder //CREATE BOOKING
      .addCase(createBooking.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const {} = bookingSlice.actions;

export default bookingSlice.reducer;
