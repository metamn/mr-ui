import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import GlobalState from "./GlobalState";
import description from "./GlobalState.md";

storiesOf("Basics/Responsiveness ✓/Global State", module).add(
	"Overview",
	() => <GlobalState />,
	{
		info: {
			inline: true,
			text: description
		}
	}
);
