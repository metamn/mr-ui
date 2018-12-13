import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import Responsiveness from './Responsiveness';

storiesOf('Basics/Responsiveness', module)
	.add('Overview',
		() => ( <Responsiveness/> ),
	)
