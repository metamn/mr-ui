import React from 'react'
import { storiesOf } from '@storybook/react'
import ColorsHSL from './ColorsHSL'

storiesOf('Basics/Colors ✓/HSL', module).add(
    'Monochrome palette',
    () => <ColorsHSL />,
    {}
)
