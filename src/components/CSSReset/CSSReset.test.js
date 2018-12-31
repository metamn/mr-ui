import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import CSSReset from "./CSSReset";

describe("CSSReset container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<CSSReset />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
