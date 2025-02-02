import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: { movies: [], pageCount: 0, isLoading: true },
  reducers: {
    allMovies: (state, action) => {
      state.movies = action.payload.data;
      state.pageCount = action.payload.pages;
      state.isLoading = false;
    },
  },
});

export const { allMovies } = movieSlice.actions;
const movieReducer = movieSlice.reducer;
export default movieReducer;
