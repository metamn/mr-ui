import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Styling from "./Styling";

describe("Styling container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<Styling />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
