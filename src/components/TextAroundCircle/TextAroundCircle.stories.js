import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import TextAroundCircle from './TextAroundCircle'
import markdownNotes from './TextAroundCircle.md'

storiesOf('Components/Text/Text Around Circle', module)
    .addDecorator(withKnobs)
    .add(
        'Overview',
        () => (
            <TextAroundCircle
                text={text('Text', 'Demo test')}
                size={text('Size', '20em')}
            />
        ),
        {
            notes: { markdown: markdownNotes },
        }
    )
    .add(
        'Simple',
        () => (
            <TextAroundCircle
                text={text('Text', 'Demo test')}
                size={text('Size', '20em')}
            />
        ),
        {}
    )
    .add(
        'Semi circle',
        () => (
            <TextAroundCircle
                text={text('Text', 'Demo test')}
                size={text('Size', '20em')}
                angleSpan={text('Angle span', '180deg')}
            />
        ),
        {}
    )
    .add(
        'Semi circle rotated',
        () => (
            <TextAroundCircle
                text={text('Text', 'Demo test')}
                size={text('Size', '20em')}
                angleSpan={text('Angle span', '180deg')}
                angleOffset={text('Angle offset', '-90deg')}
            />
        ),
        {}
    )
