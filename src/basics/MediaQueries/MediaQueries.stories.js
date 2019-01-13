import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import MediaQueries from './MediaQueries'
import description from './MediaQueries.md'

storiesOf('Basics/Responsiveness ✓/Media Queries', module).add(
    'Overview',
    () => <MediaQueries />,
    {
        info: {
            inline: true,
            text: description,
        },
    }
)
