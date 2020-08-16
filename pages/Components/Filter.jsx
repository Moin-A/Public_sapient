import React, { Component } from "react";
import Buttons from "./Button";

const Filter = ({ launch_year, onYearChange }) => {
  return (
    <div className="border bg-light p-3 ">
      <h4 className="text-center font-weight-light border-bottom mr-5 ml-5 p-1 ">
        Launch Year
      </h4>
      <div className="row" style={{ justifyContent: "center" }}>
        {launch_year.map((year) => (
          <button
            onClick={() => onYearChange(year)}
            className="btn btn-success btn-md col-5  m-2"
            style={{ cursor: "pointer" }}
          >
            {year}
          </button>
        ))}
        <Buttons text="Successfull Launch" />
        <Buttons text="Successfull Landing" />
      </div>
    </div>
  );
};

export default Filter;
