import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import TypographyClassic from "./TypographyClassic";
import description from "./TypographyClassic.md";

storiesOf("Basics/Typography ✗/Classic", module).add(
	"Overview",
	() => <TypographyClassic />,
	{
		info: {
			inline: true,
			text: description
		}
	}
);
