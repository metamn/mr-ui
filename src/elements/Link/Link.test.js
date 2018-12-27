import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Link from "./Link";

describe("Link container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<Link />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
