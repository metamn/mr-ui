import React from 'react'
import { storiesOf } from '@storybook/react'
import StylingWithStyledComponents from './StylingWithStyledComponents'
import markdownNotes from './StylingWithStyledComponents.md'

storiesOf('Basics/Styling ✓/Styling With Styled Components', module).add(
    'Overview',
    () => <StylingWithStyledComponents />,
    {
        notes: { markdown: markdownNotes },
    }
)
