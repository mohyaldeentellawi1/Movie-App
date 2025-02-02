import axios from "axios";
import { allMovies } from "../sliceReducers/movieReducer";

export const fetchMovies = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        }
      );
      dispatch(
        allMovies({
          data: res.data.results,
          pages: res.data.total_pages,
        })
      );
    } catch (e) {
      console.log(e);
    }
  };
};

export const fetchMoviesByPage = (page) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        }
      );
      dispatch(
        allMovies({
          data: res.data.results,
          pages: res.data.total_pages,
        })
      );
    } catch (e) {
      console.log(e);
    }
  };
};

export const searchMovies = (movie) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${movie}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        }
      );
      dispatch(
        allMovies({
          data: res.data.results,
          pages: res.data.total_pages,
        })
      );
    } catch (e) {
      console.log(e);
    }
  };
};
