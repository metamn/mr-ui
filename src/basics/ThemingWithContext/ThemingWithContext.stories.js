import React from 'react'
import { storiesOf } from '@storybook/react'
import ThemingWithContext from './ThemingWithContext'
import markdownNotes from './ThemingWithContext.md'

storiesOf('Basics/Theming ✓/Global styles with React Context', module).add(
    'Overview',
    () => <ThemingWithContext />,
    {
        notes: { markdown: markdownNotes },
    }
)
