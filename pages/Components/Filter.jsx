import React, { Component } from "react";

const Filter = ({ launch_year }) => {
  return (
    <div className="border bg-light p-2 ">
      <h4 className="text-center font-weight-light border-bottom mr-5 ml-5 p-1 ">
        Launch Year
      </h4>
      <div className="row" style={{ justifyContent: "center" }}>
        {launch_year.map((year) => (
          <button
            className="btn btn-success btn-md col-5  m-2"
            style={{ cursor: "pointer" }}
          >
            {year}
          </button>
        ))}
        <div className="row" style={{ justifyContent: "center" }}>
          <h4 className="text-center font-weight-light border-bottom mr-5 ml-5 p-1 ">
            Successfull Launch
          </h4>

          <button className="btn btn-success btn-md col-5  m-2"> Yes</button>
          <button className="btn btn-success btn-md col-5  m-2"> No</button>
        </div>
        <div className="row" style={{ justifyContent: "center" }}>
          <h4 className="text-center font-weight-light border-bottom mr-5 ml-5 p-1 ">
            Successfull Landing
          </h4>

          <button className="btn btn-success btn-md col-5  m-2"> Yes</button>
          <button className="btn btn-success btn-md col-5  m-2"> No</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
