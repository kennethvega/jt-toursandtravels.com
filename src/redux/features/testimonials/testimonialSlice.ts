import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Customer, CustomerType } from '../../../ts/testimonialTypes';
import { RootState } from '../../store';
import testimonialService from './testimonialServices';

type State = {
  customer: Customer | null;
  testimonials: CustomerType[];
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: string | unknown;
};

const initialState: State = {
  customer: null,
  testimonials: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

// GET ALL TESTIMONIAL
export const getAllTestimonial = createAsyncThunk('testimonial/getAllTestimonial', async (_, thunkAPI) => {
  try {
    return await testimonialService.getAllTestimonial();
  } catch (error: any) {
    // error message format
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    console.log(message);
    return thunkAPI.rejectWithValue(message);
  }
});

const testimonialSlice = createSlice({
  name: 'testimonial',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder //GET ALL TESTIMONIALS
      .addCase(getAllTestimonial.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllTestimonial.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.testimonials = action.payload;
      })
      .addCase(getAllTestimonial.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const {} = testimonialSlice.actions;
// state
export const selectIsLoading = (state: RootState) => state.testimonial.isLoading;
export const selectCustomer = (state: RootState) => state.testimonial.customer;
export default testimonialSlice.reducer;
