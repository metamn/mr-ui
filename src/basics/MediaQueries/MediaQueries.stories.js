import React from 'react'
import { storiesOf } from '@storybook/react'
import MediaQueries from './MediaQueries'
import markdownNotes from './MediaQueries.md'

storiesOf('Basics/Responsiveness ✓/Media Queries', module).add(
    'Overview',
    () => <MediaQueries />,
    {
        notes: { markdown: markdownNotes },
    }
)
