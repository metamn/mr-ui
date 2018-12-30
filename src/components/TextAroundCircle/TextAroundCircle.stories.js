import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import TextAroundCircle from './TextAroundCircle';
import description from './TextAroundCircle.md';

storiesOf('Components/Text/Text Around Circle', module)
	.add('Overview',
		() => (
			<TextAroundCircle
				text={text('Text', 'Demo test')}
				size={text('Size', '20em')}
			/>
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
			<TextAroundCircle
				text={text('Text', 'Demo test')}
				size={text('Size', '20em')}
			/>
		),
		{
			info: {
				disable: true
			}
		}
	)
	.add('Semi circle',
		() => (
			<TextAroundCircle
				text={text('Text', 'Demo test')}
				size={text('Size', '20em')}
				angleSpan={text('Angle span', '180deg')}
			/>
		),
		{
			info: {
				disable: true
			}
		}
	)
	.add('Semi circle rotated',
		() => (
			<TextAroundCircle
				text={text('Text', 'Demo test')}
				size={text('Size', '20em')}
				angleSpan={text('Angle span', '180deg')}
				angleOffset={text('Angle offset', '-90deg')}
			/>
		),
		{
			info: {
				disable: true
			}
		}
	)
