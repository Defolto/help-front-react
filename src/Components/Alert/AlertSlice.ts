import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SizeAlert = {
  width?: number;
  height?: number;
};

interface CounterState {
  content: string | JSX.Element | null;
  sizeAlert: SizeAlert | undefined;
}

const initialState: CounterState = {
  content: "",
  sizeAlert: undefined,
};

export const alertSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    showAlert: (
      state,
      action: PayloadAction<{
        content: string | JSX.Element;
        size?: SizeAlert;
      }>
    ) => {
      state.content = action.payload.content;
      state.sizeAlert = action.payload.size ? action.payload.size : undefined;
    },
    clearAlert: (state) => {
      state.content = null;
    },
  },
});

export const { showAlert, clearAlert } = alertSlice.actions;
export default alertSlice.reducer;
