import React, { Component } from "react";
import List from "./ListGropup_mid";
const Card = ({ card_details, index }) => {
  const {
    mission_name,
    flight_number,
    mission_id,
    links,
    launch_year,
    launch_success,
    rocket,
  } = card_details || {};
  let launch_s = card_details.launch_success ? "true" : "false";
  let land_s = rocket.first_stage.cores[0].land_success
    ? "true"
    : rocket.first_stage.cores[0].land_success == false
    ? "false"
    : "NA";

  return (
    <div className="card-group" key={index}>
      <div className="card m-1">
        <img
          className="card-img-top img-thumbnail"
          src={links.mission_patch_small}
          alt="Card image cap"
        ></img>
        <div className="card-body">
          <h5 className="card-title text-primary">{`${mission_name}#${flight_number}`}</h5>
          <List mission_ids={mission_id} />
          <p className="font-weight-bold">
            Launch Year<span> : </span>
            <span className="font-weight-light text-primary">
              {launch_year}
            </span>
          </p>
          <p className="font-weight-bold">
            Successfull launch<span> : </span>
            <span className="font-weight-light text-primary">{launch_s}</span>
          </p>
          <p className="font-weight-bold">
            Successfull landing<span> : </span>
            <span className="font-weight-light text-primary">{land_s}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
