import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import FontLoading from "./FontLoading";

describe("FontLoading container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<FontLoading />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
