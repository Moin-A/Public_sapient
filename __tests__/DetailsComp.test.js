import Details from "../pages/Components/Details";
import React from "react";
const launch_year = ["2001", "2002", "2003"];

import { shallow } from "enzyme";

const details = [{ test: 1 }, { test: 2 }];

import "../setupTests";
import { wrap } from "lodash";

describe(" Test Button Component", () => {
  it("Verify button renders and displays properly ", () => {
    const wrapper = shallow(<Details data={details}></Details>);
    expect(wrapper.debug());
  });
});
