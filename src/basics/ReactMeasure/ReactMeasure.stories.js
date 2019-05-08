import React from 'react'
import { storiesOf } from '@storybook/react'
import ReactMeasure from './ReactMeasure'
import markdownNotes from './ReactMeasure.md'

storiesOf('Basics/Responsiveness ✓/React Measure', module).add(
    'Overview',
    () => <ReactMeasure />,
    {
        notes: { markdown: markdownNotes },
    }
)
