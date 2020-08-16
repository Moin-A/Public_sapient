import React, { Component } from "react";
const Button = ({
  text = "",
  onOptionSelection = () => {},
  textProperty = true,
  SelectedOption = {},
}) => {
  return (
    <div className="row" style={{ justifyContent: "center" }}>
      <h4 className="text-center font-weight-light border-bottom mr-5 ml-5 p-1 ">
        {text}
      </h4>
      <button
        key={"btn-1"}
        onClick={() =>
          onOptionSelection({ textProperty, valueProperty: true, value: "Yes" })
        }
        className="btn btn-success btn-md col-5  m-1 "
        style={{ cursor: "pointer" }}
      >
        Yes
      </button>
      <button
        key={"btn-2"}
        onClick={() =>
          onOptionSelection({ textProperty, valueProperty: false, value: "No" })
        }
        className="btn btn-success btn-md col-5  m-1 "
        style={{ cursor: "pointer" }}
      >
        No
      </button>
    </div>
  );
};

export default Button;
