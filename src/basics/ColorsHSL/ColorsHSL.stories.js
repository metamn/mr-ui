import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import ColorsHSL from './ColorsHSL'

storiesOf('Basics/Colors ✓/HSL', module).add(
    'Monochrome palette',
    () => <ColorsHSL />,
    {
        info: {
            disable: true,
        },
    }
)
