import React from 'react'
import { configure, addParameters, addDecorator } from '@storybook/react'
import theme from './theme'

// Console imports ... more complicated than the rest
import { withConsole } from '@storybook/addon-console'
import { setConsoleOptions } from '@storybook/addon-console'
import '@storybook/addon-console'

// General settings
addParameters({
    options: {
        theme: theme,
        panelPosition: 'right',
    },
    backgrounds: [
        { name: 'beige', value: 'beige', default: true },
        { name: 'white', value: '#fff' },
    ],
})

// Console settings
setConsoleOptions({
    panelExclude: [],
})
addDecorator((storyFn, context) => withConsole()(storyFn)(context))

// Load stories into the sidebar
const req = require.context('../src', true, /.stories.js$/)

function loadStories() {
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
