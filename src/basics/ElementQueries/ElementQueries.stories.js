import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import ElementQueries from './ElementQueries'
import markdownNotes from './ElementQueries.md'

storiesOf('Basics/Responsiveness ✓/Element Queries', module).add(
    'Overview',
    () => <ElementQueries width={text('Width', '300px')} />,
    {
        notes: { markdown: markdownNotes },
    }
)
