import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuClicked: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    isMenuClicked: (state, action) => {
      const st = state;
      st.menuClicked = action.payload;
    },
  },
});

export const { isMenuClicked } = menuSlice.actions;
export default menuSlice;
