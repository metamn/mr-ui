import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import HockneyGrid from "./HockneyGrid";

describe("HockneyGrid container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<HockneyGrid />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
