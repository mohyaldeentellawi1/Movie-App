import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router";

const CardMovie = ({ movie }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
      <Link to={`/movie/${movie.id}`}>
        <div className="card">
          <img
            src={
              movie.poster_path === null
                ? require("../images/notfound.webp")
                : `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            }
            className="card__image"
            alt="hu"
          />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>Name : {movie.original_title}</p>
              <p>Year : {movie.release_date}</p>
              <p>Rating : {movie.vote_average}</p>
              <p>Number of residents : {movie.vote_count} </p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default CardMovie;

/*
{
            "backdrop_path": "/vYqt6kb4lcF8wwqsMMaULkP9OEn.jpg",
            "id": 1241982,
            "title": "Moana 2",
            "original_title": "Moana 2",
            "overview": "After receiving an unexpected call from her wayfinding ancestors, Moana journeys alongside Maui and a new crew to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.",
            "poster_path": "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
            "media_type": "movie",
            "adult": false,
            "original_language": "en",
            "genre_ids": [
                16,
                12,
                10751,
                35,
                9648
            ],
            "popularity": 2500.449,
            "release_date": "2024-11-21",
            "video": false,
            "vote_average": 7.1,
            "vote_count": 1045
        }
 */
