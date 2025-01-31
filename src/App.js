import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";
import axios from "axios";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [pageCount, setPage] = useState(1);
  const getAllMovies = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODkyNzNmYjMxZTYyYjBiZDlhMzRhOWQ5ZjU4OGQ2YSIsIm5iZiI6MTczODI1NDQ4NC4zOTM5OTk4LCJzdWIiOiI2NzliYTg5NGIwMGQzYmFkOTJiZDhhMTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.27jex5OJ3KY87cWpJWSHq3E_oasrG4u5Cat9E2VXBCw`,
          },
        }
      );
      setMovies(res.data.results);
      setPage(res.data.total_pages);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  const getPage = async (page) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${page}`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODkyNzNmYjMxZTYyYjBiZDlhMzRhOWQ5ZjU4OGQ2YSIsIm5iZiI6MTczODI1NDQ4NC4zOTM5OTk4LCJzdWIiOiI2NzliYTg5NGIwMGQzYmFkOTJiZDhhMTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.27jex5OJ3KY87cWpJWSHq3E_oasrG4u5Cat9E2VXBCw`,
          },
        }
      );
      setMovies(res.data.results);
      setPage(res.data.total_pages);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    getAllMovies();
  }, []);
  const searchMovie = async (movie) => {
    try {
      if (movie === "") {
        getAllMovies();
        return;
      }
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${movie}`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODkyNzNmYjMxZTYyYjBiZDlhMzRhOWQ5ZjU4OGQ2YSIsIm5iZiI6MTczODI1NDQ4NC4zOTM5OTk4LCJzdWIiOiI2NzliYTg5NGIwMGQzYmFkOTJiZDhhMTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.27jex5OJ3KY87cWpJWSHq3E_oasrG4u5Cat9E2VXBCw`,
          },
        }
      );
      setMovies(res.data.results);
      setPage(res.data.total_pages);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      <dev className="font color-body">
        <NavBar searchMovie={searchMovie} />
        <Container>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <MoviesList
                    movies={movies}
                    getPage={getPage}
                    pageCount={pageCount}
                    isLoading={isLoading}
                  />
                }
              />
              <Route path="movie/:id" element={<MovieDetails />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </dev>
    </React.Fragment>
  );
}

export default App;
