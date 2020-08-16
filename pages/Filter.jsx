import React, { Component } from "react";
import Buttons from "./Button";

const Filter = ({ launch_year, onYearChange, onOptionSelection }) => {
  return (
    <div className="border bg-light p-3 ">
      <h4 className="text-center font-weight-light border-bottom mr-5 ml-5 p-1 ">
        Launch Year
      </h4>
      <div className="row" style={{ justifyContent: "center" }}>
        {launch_year.map((year) => (
          <button
            key={year}
            onClick={() => onYearChange(year)}
            className="btn btn-success btn-md col-5  m-2"
            style={{ cursor: "pointer" }}
          >
            {year}
          </button>
        ))}
        <Buttons
          text="Successfull Launch"
          textProperty="launch_success"
          onOptionSelection={onOptionSelection}
        />
        <Buttons
          text="Successfull Landing"
          textProperty="rocket.first_stage.cores[0].land_success"
          onOptionSelection={onOptionSelection}
        />
      </div>
    </div>
  );
};

Filter.defaultProps = {
  launch_year: [],
  onYearChange: () => {},
  onOptionSelection: () => {},
};

export default Filter;
