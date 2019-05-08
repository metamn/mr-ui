import React from 'react'
import { storiesOf } from '@storybook/react'
import CSSReset from './CSSReset'
import markdownNotes from './CSSReset.md'

storiesOf('Components/CSSReset', module).add('Overview', () => <CSSReset />, {
    notes: { markdown: markdownNotes },
})
