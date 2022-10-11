import { configureStore } from '@reduxjs/toolkit';
import popupSlice from './popup/popup';

const store = configureStore({
  reducer: {
    popup: popupSlice.reducer,
  },
});

export default store;
