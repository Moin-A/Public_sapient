import ListGroup from "../pages/Components/ListGropup_mid";
import React from "react";

import { shallow } from "enzyme";

import "../setupTests";
import { wrap } from "lodash";

const launch = ["2006", "2007", "2008", "2009", "2010", "2012"];

const onYearChang = () => {};

describe(" Test Button Component", () => {
  it("Verify button renders and displays properly ", () => {
    const wrapper = shallow(
      <ListGroup mission_ids={launch} onYearChange={onYearChang} />
    );
  });
});
