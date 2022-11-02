import { configureStore } from "@reduxjs/toolkit";
import { reducer as userReducer } from "./user/userSlice";

const reducers = {
  user: userReducer,
};

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;

export default store;
