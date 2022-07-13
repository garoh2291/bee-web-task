import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./projectSlice";
import userSlice from "./userSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    project: projectSlice,
  },
});
