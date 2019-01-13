import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import CSSReset from './CSSReset'
import description from './CSSReset.md'

storiesOf('Components/CSSReset', module).add('Overview', () => <CSSReset />, {
    info: {
        inline: true,
        text: description,
    },
})
