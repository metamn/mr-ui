import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import FontLoadingWFL from "./FontLoadingWFL";

describe("FontLoadingWFL container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<FontLoadingWFL />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
