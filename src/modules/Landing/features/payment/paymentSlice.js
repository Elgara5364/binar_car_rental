import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  isSelectedBank: false,
  bank_selection: "",
  index: null,
};

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    addStep: (state) => {
      state.step += 1;
    },
    delStep: (state) => {
      state.step -= 1;
    },
    resetStep: (state) => {
      state.step == 1;
    },
    setSelectedBank: (state) => {
      state.isSelectedBank = true;
    },
    delSelectedBank: (state) => {
      state.isSelectedBank = false;
    },
    setBankSelection: (state, action) => {
      state.bank_selection = action.payload.bank_selection;
      state.index = action.payload.index;
    },
    delBankSelection: (state) => {
      state.bank_selection = "";
    },
  },
});

export const {
  addStep,
  delStep,
  resetStep,
  setSelectedBank,
  delSelectedBank,
  setBankSelection,
  delBankSelection,
} = paymentSlice.actions;

export default paymentSlice.reducer;
