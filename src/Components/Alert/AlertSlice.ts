import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  content: string | JSX.Element | null;
}

const initialState: CounterState = {
  content: "",
};

export const alertSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    showAlert: (state, action: PayloadAction<string | JSX.Element>) => {
      state.content = action.payload;
    },
    clearAlert: (state) => {
      state.content = null;
    },
  },
});

export const { showAlert, clearAlert } = alertSlice.actions;
export default alertSlice.reducer;
