import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import ReactMeasure from "./ReactMeasure";
import description from "./ReactMeasure.md";

storiesOf("Basics/Responsiveness/React Measure", module).add(
	"Overview",
	() => (
		<ReactMeasure />
	),
	{
		info: {
			inline: true,
			text: description
		}
	}
);
