import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import Colors from './Colors'

storiesOf('Basics/Colors ✓', module)
    .add('Overview', () => <Colors mdSource={'Colors'} />, {
        info: {
            disable: true,
        },
    })
    .add('Color Spaces', () => <Colors mdSource={'ColorSpaces'} />, {
        info: {
            disable: true,
        },
    })
