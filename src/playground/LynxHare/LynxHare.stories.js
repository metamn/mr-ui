import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import LynxHare from "./LynxHare";
import description from "./LynxHare.md";

storiesOf("Playground", module)
	.add('Lynx & Hare',
		() => (
			<LynxHare />
		),
		{
			info: {
				disable: true
			}
		}
	)
