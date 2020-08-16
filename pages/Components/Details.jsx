import React, { Component } from "react";
import Card from "./Card";

const Details = ({ data }) => {
  return (
    <div className="border bg-light p-3 ">
      <div className="row" style={{ justifyContent: "center" }}>
        {data.map((card_details) => (
          <Card card_details={card_details} />
        ))}
      </div>
    </div>
  );
};

export default Details;
