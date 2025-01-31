import React from "react";
import { Spinner } from "react-bootstrap";

const CustomSpinner = () => {
  return (
    <div className="center-screen">
      <button className="loading-button" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
          style={{
            width: "30px",
            height: "30px",
            marginTop: "5px",
            justifyContent: "center",
            justifyItems: "center",
          }}
        />
        <span className="visually-hidden">Loading...</span>
      </button>
    </div>
  );
};

export default CustomSpinner;
