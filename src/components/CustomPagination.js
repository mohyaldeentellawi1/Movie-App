import React from "react";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import { fetchMoviesByPage } from "../Redux/actions/movieActions";

const CustomPagination = () => {
  const dispatch = useDispatch();
  const { pageCount, searchQuery } = useSelector((state) => state.movies);
  const handlePageClick = (data) => {
    dispatch(fetchMoviesByPage(data.selected + 1, searchQuery));
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="< previous"
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default CustomPagination;
