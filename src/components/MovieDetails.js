import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router";
import CustomSpinner from "./CustomSpinner";
import axios from "axios";

const MovieDetails = () => {
  const [isLoading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const param = useParams();

  useEffect(() => {
    const getMovie = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${param.id}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            },
          }
        );
        setMovie(res.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    };
    getMovie();
  }, [param.id]);

  const handleWatchMovie = () => {
    if (movie.homepage) {
      window.location.href = movie.homepage;
    } else {
      alert("No URL available for this movie.");
    }
  };

  return (
    <div>
      {isLoading ? (
        <CustomSpinner />
      ) : (
        <>
          <Row className="justify-content-center">
            <Col xs="12" sm="12" md="12" className="mt-4">
              <div className="card-detalis d-flex align-items-center">
                <img
                  className="img-movie w-30"
                  src={
                    movie.poster_path === null
                      ? require("../images/notfound.webp")
                      : `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  }
                  alt="ascad"
                />
                <div>
                  <p>Name : {movie.title}</p>
                  <p>Year : {movie.release_date}</p>
                  <p>Rating : {movie.vote_average}</p>
                  <p>Number of residents : {movie.vote_count} </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs="12" sm="12" md="12" className="mt-1">
              <div className="card-story d-flex flex-column align-items-start">
                <div className="text-start p-4">
                  <p className="card-text-title border-bottom">Overview :</p>
                </div>
                <div className="text-start px-2">
                  <p className="card-text-story">{movie.overview}</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col
              xs="12"
              sm="12"
              md="10"
              className="mt-2 d-flex justify-content-center"
            >
              <Link to="/">
                <button
                  style={{ backgroundColor: "#b45b35", border: "none" }}
                  className="btn btn-primary mx-2"
                >
                  Back to Home
                </button>
              </Link>
              <button
                style={{ backgroundColor: "#b45b35", border: "none" }}
                className="btn btn-primary mx-2"
                onClick={handleWatchMovie}
              >
                Watch Movie
              </button>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
