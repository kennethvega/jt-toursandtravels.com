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

// CREATE NEW CUSTOMER REVIEW
export const createTestimonial = createAsyncThunk('testimonial/create', async (formData: FormData, thunkAPI) => {
  try {
    return await testimonialService.createTestimonial(formData);
  } catch (error: any) {
    // error message format
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    console.log(message);
    return thunkAPI.rejectWithValue(message);
  }
});

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
// GET A SINGLE TESTIMONIAL
export const getTestimonial = createAsyncThunk('testimonial/getTestimonial', async (id: string | undefined, thunkAPI) => {
  try {
    return await testimonialService.getTestimonial(id);
  } catch (error: any) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    console.log(message);
    return thunkAPI.rejectWithValue(message);
  }
});

type UpdateProps = {
  id: string | undefined;
  formData: FormData;
};
// UPDATE A REVIEW
export const updateTestimonial = createAsyncThunk('products/updateTestimonial', async ({ id, formData }: UpdateProps, thunkAPI) => {
  try {
    return await testimonialService.updateTestimonial(id, formData);
  } catch (error: any) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    console.log(message);
    return thunkAPI.rejectWithValue(message);
  }
});

// DELETE A REVIEW
export const deleteTestimonial = createAsyncThunk('testimonial/delete', async (id: string, thunkAPI) => {
  try {
    return await testimonialService.deleteTestimonial(id);
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
    builder
      .addCase(createTestimonial.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTestimonial.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.testimonials.unshift(action.payload);
      })
      .addCase(createTestimonial.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      }) //GET ALL TESTIMONIALS
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
      }) //GET A SINGLE REVIEW
      .addCase(getTestimonial.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTestimonial.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.customer = action.payload;
      })
      .addCase(getTestimonial.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      }) //UPDATE A REVIEW
      .addCase(updateTestimonial.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateTestimonial.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
      })
      .addCase(updateTestimonial.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      }) //DELETE REVIEW
      .addCase(deleteTestimonial.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTestimonial.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
      })
      .addCase(deleteTestimonial.rejected, (state, action) => {
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
