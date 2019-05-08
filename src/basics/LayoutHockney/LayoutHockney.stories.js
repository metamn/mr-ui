import React from 'react'
import { storiesOf } from '@storybook/react'
import LayoutHockney from './LayoutHockney'
import markdownNotes from './LayoutHockney.md'

storiesOf('Basics/Layout ✓/Hockney style composition', module).add(
    'Overview',
    () => <LayoutHockney isStorybook={true} />,
    {
        notes: { markdown: markdownNotes },
    }
)
