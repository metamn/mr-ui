import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import TextAroundCircle from './TextAroundCircle';
import description from './TextAroundCircle.md';

storiesOf('Components/Text/TextAroundCircle', module)
	.add('Overview',
		() => (
			<TextAroundCircle
				text={text('Text', 'Demo test')}
			/>
		),
		{
			info: { inline: true, text: description }
		}
	)
	.add('Simple',
		() => (
			<TextAroundCircle
				text={text('Text', 'Demo test')}
			/>
		)
	)
