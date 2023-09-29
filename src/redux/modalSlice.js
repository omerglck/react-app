import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalFunction: (state) => {
      state.modal = !state.modal;
    },
  },
});

export const {modalFunction} = modalSlice.actions;

export default modalSlice.reducer;
