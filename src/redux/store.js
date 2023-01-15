import { configureStore } from '@reduxjs/toolkit';
import popupSlice from './popup/popup';
import menuSlice from './menu/menu';

const store = configureStore({
  reducer: {
    popup: popupSlice.reducer,
    menu: menuSlice.reducer,
  },
});

export default store;
