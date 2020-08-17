import React, { Component } from "react";
import Buttons from "./Button";

const Filter = ({
  launch_year,
  onYearChange,
  onOptionSelection,
  SelectedLaunchYear,
  SelectedOptions,
}) => {
  return (
    <div className="border-auto bg-light p-4 ">
      <h3 className="text-center font-weight-bold">Filters</h3>
      <h4 className="text-center font-weight-light border-bottom   p-1 ">
        Launch Year
      </h4>
      <div className="row" style={{ justifyContent: "center" }}>
        {launch_year.map((year) => (
          <button
            key={year}
            onClick={() => onYearChange(year)}
            className="btn btn-success btn-md col-5  m-2"
            className={
              year == SelectedLaunchYear
                ? "btn btn-info btn-md col-5  m-2"
                : "btn btn-success btn-md col-5  m-2"
            }
            style={{ cursor: "pointer" }}
          >
            {year}
          </button>
        ))}
        <Buttons
          text="Successfull Launch"
          textProperty="launch_success"
          onOptionSelection={onOptionSelection}
          Options={SelectedOptions}
        />
        <Buttons
          text="Successfull Landing"
          textProperty="rocket.first_stage.cores[0].land_success"
          onOptionSelection={onOptionSelection}
          Options={SelectedOptions}
        />
      </div>
    </div>
  );
};

Filter.defaultProps = {
  launch_year: [],
  onYearChange: () => {},
  onOptionSelection: () => {},
  SelectedLaunchYear: "",
  SelectedOption: {},
};

export default Filter;
