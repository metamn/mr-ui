import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Responsiveness from "./Responsiveness";

describe("Responsiveness container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<Responsiveness />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
