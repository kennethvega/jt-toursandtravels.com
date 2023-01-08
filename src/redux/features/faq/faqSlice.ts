import { FaqType } from './../../../ts/faqTypes';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Faq } from '../../../ts/faqTypes';
import faqService from './faqServices';
import { RootState } from '../../store';

type InitialState = {
  faq: Faq | null;
  faqs: FaqType[];
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: string | unknown;
};
const initialState: InitialState = {
  faq: null,
  faqs: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

// GET ALL FAQ's
export const getAllFaqs = createAsyncThunk('faq/getAllFaqs', async (_, thunkAPI) => {
  try {
    return await faqService.getAllFaqs();
  } catch (error: any) {
    // error message format
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    console.log(message);
    return thunkAPI.rejectWithValue(message);
  }
});

const faqSlice = createSlice({
  name: 'faq',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder //GET ALL BOOKINGS
      .addCase(getAllFaqs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllFaqs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.faqs = action.payload;
      })
      .addCase(getAllFaqs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const {} = faqSlice.actions;

export const selectIsLoading = (state: RootState) => state.faq.isLoading;
export const selectFaq = (state: RootState) => state.faq.faq;

export default faqSlice.reducer;
