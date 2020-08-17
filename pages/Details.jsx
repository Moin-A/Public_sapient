import React, { Component } from "react";
import Card from "./Card";

const Details = ({ data }) => {
  function renderDetails() {
    if (data.length == 0) {
      return (
        <h1 className="text-secondary p-2">
          No Results found, Try another filter
        </h1>
      );
    }
    return (
      <div className="border bg-light p-3 ">
        <div className="row" key={1} style={{ justifyContent: "center" }}>
          {data.map((card_details, index) => (
            <Card key={index} card_details={card_details} />
          ))}
        </div>
      </div>
    );
  }

  return renderDetails();
};

Details.defaultProps = {
  data: [],
};

export default Details;
