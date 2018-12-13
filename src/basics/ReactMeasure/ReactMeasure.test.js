import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import ReactMeasure from "./ReactMeasure";

describe("ReactMeasure container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<ReactMeasure />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
