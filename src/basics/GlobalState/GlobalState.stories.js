import React from 'react'
import { storiesOf } from '@storybook/react'
import GlobalState from './GlobalState'
import markdownNotes from './GlobalState.md'

storiesOf('Basics/Responsiveness ✓/Global State', module).add(
    'Overview',
    () => <GlobalState />,
    {
        notes: { markdown: markdownNotes },
    }
)
