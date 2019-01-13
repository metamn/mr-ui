import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import StylingWithStyledComponents from './StylingWithStyledComponents'
import description from './StylingWithStyledComponents.md'

storiesOf('Basics/Styling ✓/Styling With Styled Components', module).add(
    'Overview',
    () => <StylingWithStyledComponents />,
    {
        info: {
            inline: true,
            text: description,
        },
    }
)
