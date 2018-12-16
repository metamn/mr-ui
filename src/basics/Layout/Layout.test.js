import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Layout from "./Layout";

describe("Layout container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<Layout />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
