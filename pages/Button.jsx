import React, { Component } from "react";
const Button = ({
  text = "",
  onOptionSelection = () => {},
  textProperty = true,
  Options = { value: "" },
}) => {
  return (
    <div className="row" style={{ justifyContent: "center" }}>
      <h4 className="text-center font-weight-light border-bottom mr-5 ml-5 p-1 ">
        {text}
      </h4>
      <button
        key={"btn-1"}
        onClick={() => {
          onOptionSelection({
            textProperty,
            valueProperty: true,
            value: `${text}-Yes`,
          });
        }}
        className={
          Options.value === `${text}-Yes`
            ? "btn btn-info btn-sm col-5  m-1"
            : "btn btn-success btn-sm col-5  m-1"
        }
        style={{ cursor: "pointer" }}
      >
        Yes
      </button>
      <button
        key={"btn-2"}
        onClick={() => {
          onOptionSelection({
            textProperty,
            valueProperty: false,
            value: `${text}-No`,
          });
        }}
        className={
          Options.value === `${text}-No`
            ? "btn btn-info btn-sm col-5  m-1"
            : "btn btn-success btn-sm col-5  m-1"
        }
        style={{ cursor: "pointer" }}
      >
        No
      </button>
    </div>
  );
};

export default Button;
