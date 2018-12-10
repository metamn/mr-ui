import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import TextAroundCircle from './TextAroundCircle';
import description from './TextAroundCircle.md';

storiesOf('Components/Text/TextAroundCircle', module)
	.addDecorator(withKnobs)
	.add('default',
		() => (
			<TextAroundCircle />
		),
		{
			info: {
				text: description,
			}
		}
	)
