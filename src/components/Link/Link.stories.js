import React from 'react'
import { storiesOf } from '@storybook/react'
import Link from './Link'
import markdownNotes from './Link.md'

storiesOf('Components/HTML Elements/Link', module).add(
    'Overview',
    () => <Link />,
    {
        notes: { markdown: markdownNotes },
    }
)
