import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Images from "./Images";

describe("Images container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<Images />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
