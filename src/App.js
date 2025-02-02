import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <React.Fragment>
      <dev className="font color-body">
        <NavBar />
        <Container>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MoviesList />} />
              <Route path="movie/:id" element={<MovieDetails />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </dev>
    </React.Fragment>
  );
}

export default App;
