import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
};

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setStep: (state) => {
      state.step += 1;
    },
  },
});

export const { setStep } = paymentSlice.actions;

export default paymentSlice.reducer;
