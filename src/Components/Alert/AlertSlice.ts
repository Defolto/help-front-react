import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  text: string;
}

const initialState: CounterState = {
  text: "",
};

export const alertSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    showAlert: (state, action: PayloadAction<string>) => {
      if (state.text === action.payload) {
        state.text = "";
      } else {
        state.text = action.payload;
      }
    },
  },
});

export const { showAlert } = alertSlice.actions;
export default alertSlice.reducer;
