import { configureStore } from '@reduxjs/toolkit';

import productReducer from './features/products/productSlice';
import filterReducer from './features/products/filterSlice';
import bookingReducer from './features/bookings/bookingSlice';
import testimonialReducer from './features/testimonials/testimonialSlice';
import faqReducer from './features/faq/faqSlice';
export const store = configureStore({
  reducer: {
    product: productReducer,
    filter: filterReducer,
    booking: bookingReducer,
    testimonial: testimonialReducer,
    faq: faqReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
