import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchMovies, searchMovies } from "../Redux/actions/movieActions";

const NavBar = () => {
  const dispatch = useDispatch();
  const handleSearch = (word) => {
    searchMovie(word);
  };

  const searchMovie = (word) => {
    if (word === "") {
      dispatch(fetchMovies());
    } else {
      dispatch(searchMovies(word));
    }
  };

  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2">
          <Col xs="2" lg="1">
            <img
              className="logo"
              src={require("../images/logo.png")}
              alt="dfs"
            />
          </Col>
          <Col xs="10" lg="11" className="d-flex align-items-center">
            <div className="search w-100">
              <i className="fa fa-search">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search ..."
                  onChange={(e) => handleSearch(e.target.value)}
                ></input>
              </i>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
