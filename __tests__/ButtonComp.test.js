import Button from "../pages/Button";
import React from "react";
const launch_year = ["2001", "2002", "2003"];

import { shallow } from "enzyme";

import "../setupTests";
import { wrap } from "lodash";

describe(" Test Button Component", () => {
  it("Verify button renders and displays properly ", () => {
    const wrapper = shallow(<Button></Button>);
    expect(wrapper.text()).toEqual("YesNo");
  });
});
