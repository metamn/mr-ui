import React from 'react'
import { configure, addParameters, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withConsole } from '@storybook/addon-console'
import theme from './theme'

// Settings
addParameters({
    options: {
        theme: theme,
    },
    backgrounds: [
        { name: 'beige', value: 'beige', default: true },
        { name: 'white', value: '#fff' },
    ],
})

// Global addons
addDecorator(withKnobs)
addDecorator((storyFn, context) => withConsole()(storyFn)(context))

// Load stories into the sidebar
const req = require.context('../src', true, /.stories.js$/)

function loadStories() {
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
