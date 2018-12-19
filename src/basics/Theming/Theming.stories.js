import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import Theming from './Theming';

storiesOf('Basics/Theming ✓', module)
	.add('Overview',
		() => ( <Theming/> ),
		{
			info: {
				disable: true
			}
		}
	)
