import { Product, ProductType } from '../../../ts/productTypes';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import productService from './productServices';
import { RootState } from '../../store';

type State = {
  product: ProductType | null;
  products: ProductType[];
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: string | unknown;
};
const initialState: State = {
  product: null,
  products: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

// GET ALL PRODUCTS
export const getAllProducts = createAsyncThunk('products/getAllProducts', async (_, thunkAPI) => {
  try {
    return await productService.getAllProducts();
  } catch (error: any) {
    // error message format
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    console.log(message);
    return thunkAPI.rejectWithValue(message);
  }
});

// GET A SINGLE PRODUCT
export const getProduct = createAsyncThunk('products/getProduct', async (id: string | undefined, thunkAPI) => {
  try {
    return await productService.getProduct(id);
  } catch (error: any) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    console.log(message);
    return thunkAPI.rejectWithValue(message);
  }
});

// ProductSlice------------
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    SET_PRODUCT(state, action) {
      state.product === action.payload;
    },
  },
  // loading,success,error state asyncThunk
  extraReducers: (builder) => {
    builder //GET ALL PRODUCTS
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      }) //GET A SINGLE PRODUCT
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.product = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});
// ACTIONS-
export const { SET_PRODUCT } = productSlice.actions;
//STATE
export const selectIsLoading = (state: RootState) => state.product.isLoading;
export const selectProduct = (state: RootState) => state.product.product;
export default productSlice.reducer;
