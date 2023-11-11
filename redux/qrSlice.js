import { createSlice } from '@reduxjs/toolkit';

const qrSlice = createSlice({
  name: 'qr',
  initialState: null,
  reducers: {
    setQrData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setQrData } = qrSlice.actions;
export default qrSlice.reducer;
