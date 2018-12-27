import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import TypographyClassic from "./TypographyClassic";
import description from "./TypographyClassic.md";

storiesOf("Basics/Typography ✗/Classic", module)
	.add('Overview',
		() => (
			<TypographyClassic
			/>
		)
	)
	.add('Out of rhytm',
		() => (
			<TypographyClassic
				rhytm={true}
			/>
		)
	)
	.add('In rhytm',
		() => (
			<TypographyClassic
				rhytm={true}
				resetAll={true}
			/>
		)
	)
	.add('In rhytm with headings',
		() => (
			<TypographyClassic
				rhytm={true}
				resetAll={true}
				styleHeadings={true}
			/>
		)
	)
	.add('In rhytm with parapgraph margins',
		() => (
			<TypographyClassic
				rhytm={true}
				resetAll={true}
				styleHeadings={true}
				parapgraphMargins={true}
			/>
		)
	)
