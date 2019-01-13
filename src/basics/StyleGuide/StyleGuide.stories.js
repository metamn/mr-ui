import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import StyleGuide from './StyleGuide'

storiesOf('Basics/Style guide ✓', module).add(
    'Overview',
    () => <StyleGuide />,
    {
        info: {
            disable: true,
        },
    }
)
