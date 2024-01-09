import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  start_rent_at: "",
  finish_rent_at: "",
  start_date: "",
  end_date: "",
  is_disabled: false,
  loading: false,
  id: "",
  day_rent: null,
};

export const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    isLoading: (state) => {
      state.loading = !state.loading;
    },
    disableButton: (state) => {
      state.is_disabled = false;
    },
    enableButton: (state) => {
      state.is_disabled = true;
    },
    saveDateRent: (state, action) => {
      state.start_date = action.payload.start_date;
      state.end_date = action.payload.end_date;
      state.start_rent_at = action.payload.start_rent_at;
      state.finish_rent_at = action.payload.finish_rent_at;
      state.day_rent = action.payload.day_rent;
    },
    resetDateRent: (state) => {
      (state.start_rent_at = ""),
        (state.finish_rent_at = ""),
        (state.start_date = ""),
        (state.end_date = "");
    },
    sendOrderId: (state, action) => {
      state.id = action.payload.orderId;
    },
  },
});

export const {
  disableButton,
  enableButton,
  saveDateRent,
  resetDateRent,
  sendOrderId,
  isLoading,
} = detailSlice.actions;

export default detailSlice.reducer;
