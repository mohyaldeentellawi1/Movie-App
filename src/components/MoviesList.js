import React from "react";
import CardMovie from "./CardMovie";
import CustomPagination from "./CustomPagination";
import CustomSpinner from "./CustomSpinner";
import { Row } from "react-bootstrap";

const MoviesList = ({ movies, getPage, pageCount, isLoading }) => {
  return (
    <Row className="mt-3">
      {isLoading ? (
        <CustomSpinner />
      ) : movies.length >= 1 ? (
        movies.map((movie) => <CardMovie key={movie.id} movie={movie} />)
      ) : (
        <h2 className="center-screen">No Movies Found !</h2>
      )}
      <CustomPagination getPage={getPage} pageCount={pageCount} />
    </Row>
  );
};

export default MoviesList;
