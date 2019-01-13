import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import FontLoadingWFL from './FontLoadingWFL'

storiesOf('Basics/Font loading ✓/Web Font Loader', module).add(
    'Overview',
    () => <FontLoadingWFL />,
    {
        info: {
            disable: true,
        },
    }
)
