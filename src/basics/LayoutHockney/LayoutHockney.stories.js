import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import LayoutHockney from "./LayoutHockney";
import description from "./LayoutHockney.md";

storiesOf("Basics/Layout ✓/Hockney style composition", module)
	.add(
		"Overview",
		() => <LayoutHockney isStorybook={true} />,
	)
