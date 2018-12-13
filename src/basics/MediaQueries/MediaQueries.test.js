import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import MediaQueries from "./MediaQueries";

describe("MediaQueries container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<MediaQueries />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
