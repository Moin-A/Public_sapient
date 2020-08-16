import React, { Component } from "react";
import Card from "./Card";

const Details = ({ data }) => {
  return (
    <div className="border bg-light p-3 ">
      <div className="row" key={1} style={{ justifyContent: "center" }}>
        {data.map((card_details, index) => (
          <Card key={index} card_details={card_details} />
        ))}
      </div>
    </div>
  );
};

Details.defaultProps = {
  data: [],
};

export default Details;
