import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../sliceReducers/movieReducer";

const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});

export default store;
