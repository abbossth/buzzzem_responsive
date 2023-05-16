import { createSlice } from "@reduxjs/toolkit";

const sidebarOpenSlice = createSlice({
  name: "sidebar",
  initialState: { sidebar: false },
  reducers: {
    setOpenSidebar: (state, action) => {
      state.sidebar = action.payload;
    },
  },
});

export const { setOpenSidebar } = sidebarOpenSlice.actions;
export default sidebarOpenSlice.reducer;
