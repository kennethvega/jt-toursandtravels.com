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

// GET ALL BOOKINGS.
export const getAllBookings = createAsyncThunk('booking/getAllBookings', async (_, thunkAPI) => {
  try {
    return await bookingService.getAllBookings();
  } catch (error: any) {
    // error message format
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    console.log(message);
    return thunkAPI.rejectWithValue(message);
  }
});

type UpdateStatusProps = {
  id: string;
  status: boolean;
};
// UPDATE BOOKING STATUS
export const updateStatus = createAsyncThunk('booking/updateStatus', async ({ id, status }: UpdateStatusProps, thunkAPI) => {
  try {
    return await bookingService.updateStatus(id, status);
  } catch (error: any) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    console.log(message);
    return thunkAPI.rejectWithValue(message);
  }
});
// DELETE A BOOKING
export const deleteBooking = createAsyncThunk('booking/delete', async (id: string, thunkAPI) => {
  try {
    return await bookingService.deleteBooking(id);
  } catch (error: any) {
    // error message format
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    console.log(message);
    return thunkAPI.rejectWithValue(message);
  }
});

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
    builder //GET ALL BOOKINGS
      .addCase(getAllBookings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBookings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.bookings = action.payload;
      })
      .addCase(getAllBookings.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      }) // UPDATE BOOKING STATUS
      .addCase(updateStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
      })
      .addCase(updateStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      }) //DELETE A BOOKING
      .addCase(deleteBooking.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBooking.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
      })
      .addCase(deleteBooking.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      }) //CREATE BOOKING
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
