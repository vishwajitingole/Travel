import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  isAuthModalOpen: false,
  isDropDownModalOpen: false,
  selectedTab: "login",
  username: "",
  number: "",
  email: "",
  password: "",
};

const auth_slice = createSlice({
  name: "auth",
  initialState: initialValue,
  reducers: {
    toggleAuthModal(state) {
      state.isAuthModalOpen = !state.isAuthModalOpen;
    },
    selectedTab(state, action) {
      state.selectedTab = action.payload;
    },
  },
});

export const { toggleAuthModal, selectedTab } = auth_slice.actions;
export default auth_slice.reducer;
