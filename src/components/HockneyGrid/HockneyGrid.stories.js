import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import HockneyGrid from './HockneyGrid'
import description from './HockneyGrid.md'

storiesOf('Components/Layout/The Hockney Grid', module).add(
    'Overview',
    () => <HockneyGrid />,
    {
        info: {
            inline: true,
            text: description,
        },
    }
)
