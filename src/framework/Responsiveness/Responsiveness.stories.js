import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import Responsiveness from "./Responsiveness";
import description from "./Responsiveness.md";

storiesOf("Framework/Responsiveness", module)
	.add('Overview',
		() => (
			<Responsiveness />
		),
		{
			info: {
				inline: true,
				text: description,
			}
		}
	)
	.add('Simple',
		() => (
			<Responsiveness
				width={text('Width', '500px')}
				height={text('Height', '300px')}
			/>
		),
		{
			info: {
				disable: true
			}
		}
	)
