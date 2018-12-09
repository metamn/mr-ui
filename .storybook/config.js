import { configure, addDecorator } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withNotes } from '@storybook/addon-notes';
import { configureViewport } from '@storybook/addon-viewport';
import '@storybook/addon-console';

// Pick all stories.js files within the src/ folder
const req = require.context('../src', true, /.stories.js$/);

// Globally avaialable addons
addDecorator(checkA11y);
addDecorator(withNotes);

// Automatic story loader
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
