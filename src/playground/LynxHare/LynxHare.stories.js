import React from 'react'
import { storiesOf } from '@storybook/react'
import LynxHare from './LynxHare'
import markdownNotes from './LynxHare.md'

storiesOf('Playground', module).add('Lynx & Hare', () => <LynxHare />, {
    notes: { markdown: markdownNotes },
})
