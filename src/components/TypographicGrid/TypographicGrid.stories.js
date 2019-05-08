import React from 'react'
import { storiesOf } from '@storybook/react'
import TypographicGrid from './TypographicGrid'
import markdownNotes from './TypographicGrid.md'

storiesOf('Components/Typography/Typographic Grid', module).add(
    'Overview',
    () => (
        <TypographicGrid
            numberOfVerticalLines={10}
            numberOfHorizontalLines={10}
        />
    ),
    {
        notes: { markdown: markdownNotes },
    }
)
