import React, { Component } from "react";
const Button = ({ text }) => {
  return (
    <div className="row" style={{ justifyContent: "center" }}>
      <h4 className="text-center font-weight-light border-bottom mr-5 ml-5 p-1 ">
        {text}
      </h4>
      <button
        className="btn btn-success btn-md col-5  m-1 "
        style={{ cursor: "pointer" }}
      >
        Yes
      </button>
      <button
        className="btn btn-success btn-md col-5  m-1 "
        style={{ cursor: "pointer" }}
      >
        No
      </button>
    </div>
  );
};

export default Button;
