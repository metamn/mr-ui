import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import LynxHare from "./LynxHare";

describe("LynxHare container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<LynxHare />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
