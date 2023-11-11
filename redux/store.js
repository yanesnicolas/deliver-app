import { configureStore } from '@reduxjs/toolkit';
import { imageReducer } from './reducers/imageReducer';
import qrReducer from './qrSlice';

const store = configureStore({
  reducer: {
    images: imageReducer,
    qr: qrReducer,
  },
});

export default store;
