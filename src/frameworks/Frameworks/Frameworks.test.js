import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Frameworks from "./Frameworks";

describe("Frameworks container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<Frameworks />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
