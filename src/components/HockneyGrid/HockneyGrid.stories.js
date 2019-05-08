import React from 'react'
import { storiesOf } from '@storybook/react'
import HockneyGrid from './HockneyGrid'
import markdownNotes from './HockneyGrid.md'

storiesOf('Components/Layout/The Hockney Grid', module).add(
    'Overview',
    () => <HockneyGrid />,
    {
        notes: { markdown: markdownNotes },
    }
)
