import React, { Component } from "react";
import List from "./ListGropup_mid";
import styled from "styled-components";
import _, { wrap } from "lodash";
import { Media } from "react-bootstrap";
const Card = ({ card_details, index }) => {
  const Div = styled.div`
    @media (max-width: 4000px) {
      width: 12rem;
    }
    @media (max-width: 1321px) {
      width: 11rem;
    }
    @media (max-width: 1217px) {
      width: 10rem;
    }
    @media (max-width: 1121px) {
      width: 9rem;
    }
    @media (max-width: 1000px) {
      width: 14rem;
    }
    @media (max-width: 916px) {
      width: 13rem;
    }
    @media (max-width: 847px) {
      width: 12rem;
    }
    @media (max-width: 782px) {
      width: 11rem;
    }
    @media (max-width: 702px) {
      width: auto;
    }

    h5 {
      width: min-content;
    }
  `;

  const H5 = styled.h5`
    width: min-content;
  `;

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
  let land_s = _.get(rocket, "first_stage.cores[0].land_success")
    ? "true"
    : rocket.first_stage.cores[0].land_success == false
    ? "false"
    : "NA";

  return (
    <div className="card-deck p-1" key={index}>
      <Div className="card m-3 ">
        <img
          className="card-img-top img-thumbnail"
          src={links.mission_patch_small}
          alt="Card image cap"
        ></img>
        <div className="card-body">
          <H5 className="card-title text-primary">{`${mission_name}#${flight_number}`}</H5>
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
      </Div>
    </div>
  );
};

Card.defaultProps = {
  card_details: {
    rocket: { first_stage: { cores: [{ land_success: true }] } },
    links: { mission_patch_small: true },
  },
  index: 1,
};

export default Card;
