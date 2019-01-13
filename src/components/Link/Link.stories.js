import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import Link from './Link'
import description from './Link.md'

storiesOf('Components/HTML Elements/Link', module).add(
    'Overview',
    () => <Link />,
    {
        info: {
            inline: true,
            text: description,
        },
    }
)
