import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import TextAroundCircle from './TextAroundCircle';

storiesOf('Components/Text/TextAroundCircle', module)
	.addDecorator(withKnobs)
	.add('default',
		() => (
			<TextAroundCircle />
		)
	)
