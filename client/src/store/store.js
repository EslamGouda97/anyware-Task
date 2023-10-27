import { configureStore } from "@reduxjs/toolkit";
import userData from "./Slices/userSlice";
import announcementData from "./Slices/announcementSlice";

const store = configureStore({
  reducer: {
    user: userData,
    announcement: announcementData,
  },
});

export default store;
