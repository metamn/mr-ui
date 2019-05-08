import React from 'react'
import { storiesOf } from '@storybook/react'
import FontLoadingWFL from './FontLoadingWFL'

storiesOf('Basics/Font loading ✓/Web Font Loader', module).add(
    'Overview',
    () => <FontLoadingWFL />,
    {}
)
