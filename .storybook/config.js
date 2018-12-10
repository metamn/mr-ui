import { configure, addDecorator } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withNotes } from '@storybook/addon-notes';
import { configureViewport } from '@storybook/addon-viewport';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { withOptions } from '@storybook/addon-options';
import '@storybook/addon-console';

// Pick all stories.js files within the src/ folder
const req = require.context('../src', true, /.stories.js$/);

// Globally avaialable addons
addDecorator(
	withOptions({
		name: 'MR UI',
		url: '#',
		addonPanelInRight: true,
	})
);
addDecorator(checkA11y);
addDecorator(withNotes);
addDecorator(withKnobs);
addDecorator(withInfo({
	header: false,
}));


// Automatic story loader
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
