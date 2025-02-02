import React, { useEffect } from "react";
import CardMovie from "./CardMovie";
import CustomPagination from "./CustomPagination";
import CustomSpinner from "./CustomSpinner";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../Redux/actions/movieActions";

const MoviesList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  const { movies, isLoading } = useSelector((state) => state.movies);

  return (
    <Row className="mt-3">
      {isLoading ? (
        <CustomSpinner />
      ) : movies.length >= 1 ? (
        movies.map((movie) => <CardMovie key={movie.id} movie={movie} />)
      ) : (
        <h2 className="center-screen">No Movies Found !</h2>
      )}
      <CustomPagination />
    </Row>
  );
};

export default MoviesList;
