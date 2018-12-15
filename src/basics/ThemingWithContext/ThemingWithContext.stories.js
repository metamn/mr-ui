import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import ThemingWithContext from "./ThemingWithContext";
import description from "./ThemingWithContext.md";

storiesOf("Basics/Theming/Theming with React Context", module).add(
	"Overview",
	() => <ThemingWithContext />,
	{
		info: {
			inline: true,
			text: description
		}
	}
);
