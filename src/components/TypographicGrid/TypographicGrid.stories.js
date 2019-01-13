import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import TypographicGrid from './TypographicGrid'
import description from './TypographicGrid.md'

storiesOf('Components/Typography/Typographic Grid', module).add(
    'Overview',
    () => (
        <TypographicGrid
            numberOfVerticalLines={10}
            numberOfHorizontalLines={10}
        />
    ),
    {
        info: {
            inline: true,
            text: description,
        },
    }
)
