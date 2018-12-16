import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Typography from "./Typography";

describe("Typography container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<Typography />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
