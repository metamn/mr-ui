import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import App from './App';

storiesOf('App', module)
	.addDecorator(withKnobs)
	.add('with a button',
		() => (
			<App width={text('Width', 'auto')} />
		),
		{
			notes: 'A note here'
		},
	)
