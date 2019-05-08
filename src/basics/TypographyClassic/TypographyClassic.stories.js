import React from 'react'
import { storiesOf } from '@storybook/react'
import TypographyClassic from './TypographyClassic'

storiesOf('Basics/Typography ✓/Classic', module)
    .add('Overview', () => <TypographyClassic />)
    .add('Out of rhytm', () => <TypographyClassic rhytm={true} />)
    .add('In rhytm', () => <TypographyClassic rhytm={true} resetAll={true} />)
    .add('In rhytm with headings', () => (
        <TypographyClassic rhytm={true} resetAll={true} styleHeadings={true} />
    ))
    .add('In rhytm with paragraph margins', () => (
        <TypographyClassic
            rhytm={true}
            resetAll={true}
            styleHeadings={true}
            parapgraphMargins={true}
        />
    ))
    .add('Vertical grid', () => (
        <TypographyClassic
            rhytm={true}
            resetAll={true}
            styleHeadings={true}
            parapgraphMargins={true}
            verticalRhytm={true}
        />
    ))
