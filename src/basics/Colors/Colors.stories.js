import React from 'react'
import { storiesOf } from '@storybook/react'
import Colors from './Colors'

storiesOf('Basics/Colors ✓', module)
    .add('Overview', () => <Colors mdSource={'Colors'} />, {})
    .add('Color Spaces', () => <Colors mdSource={'ColorSpaces'} />, {})
