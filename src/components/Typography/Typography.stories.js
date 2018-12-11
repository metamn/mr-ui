import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import Typography from "./Typography";
import description from "./Typography.md";

storiesOf("Components/Typography", module).add(
  "Overview",
  () => <Typography />,
  {
    info: {
      inline: true,
      text: description
    }
  }
);
