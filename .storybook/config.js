import { configure, addDecorator } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withNotes } from '@storybook/addon-notes';
import { configureViewport } from '@storybook/addon-viewport';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { withOptions } from '@storybook/addon-options';
import { themes } from '@storybook/components';
import '@storybook/addon-console';

// Pick all stories.js files within the src/ folder
const req = require.context('../src', true, /.stories.js$/);

// Globally avaialable addons
// Options and theming
addDecorator(
	withOptions({
		name: 'MR UI',
		url: '#',
		addonPanelInRight: false,
		theme: {
			mainBackground: 'beige',
			mainBorder: '1px solid',
			mainBorderColor: 'black',
			dimmedTextColor: '#333',
			mainTextSize: '16px',
			mainTextFace: 'monospace',
			highlightColor: '#9fdaff',
			successColor: '#0edf62',
			failColor: '#ff3f3f',
			warnColor: 'orange',
		}
	})
);

// By default Info is not displayed.
// - Usually the first story overwrites this: `info: { inline: true, text: description }`
addDecorator(
	withInfo({
		header: false,
	})
);

addDecorator(checkA11y);
addDecorator(withNotes);
addDecorator(withKnobs);



// Automatic story loader
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
