import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  popupClicked: false,
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    isPopupClicked: (state) => {
      const st = state;
      st.popupClicked = !st.popupClicked;
    },
  },
});

export const { isPopupClicked } = popupSlice.actions;
export default popupSlice;
