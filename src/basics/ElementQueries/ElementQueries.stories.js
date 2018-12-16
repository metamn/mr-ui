import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import ElementQueries from "./ElementQueries";
import description from "./ElementQueries.md";

storiesOf("Basics/Responsiveness ✓/Element Queries", module)
	.add("Overview",
		() => <ElementQueries width={text('Width', '300px')} />,
		{
			info: {
				inline: true,
				text: description
			}
		}
);
