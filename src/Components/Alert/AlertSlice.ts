import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  text: string;
  component?: JSX.Element;
}

const initialState: CounterState = {
  text: "",
};

export const alertSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    showTextAlert: (state, action: PayloadAction<string>) => {
      if (state.text === action.payload) {
        state.text = "";
      } else {
        state.text = action.payload;
      }
    },
    clearTextAlert: (state) => {
      state.text = "";
    },
  },
});

export const { showTextAlert, clearTextAlert } = alertSlice.actions;
export default alertSlice.reducer;
