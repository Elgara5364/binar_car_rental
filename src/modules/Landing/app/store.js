import { configureStore } from "@reduxjs/toolkit";
import detailReducer from "../features/detail/detailSlice";
import paymentReducer from "../features/payment/paymentSlice";

export const store = configureStore({
  reducer: {
    detail: detailReducer,
    payment: paymentReducer,
  },
});
