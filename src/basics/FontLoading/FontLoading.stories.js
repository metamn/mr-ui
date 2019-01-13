import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import FontLoading from './FontLoading'

storiesOf('Basics/Font loading ✓', module).add(
    'Overview',
    () => <FontLoading />,
    {
        info: {
            disable: true,
        },
    }
)
