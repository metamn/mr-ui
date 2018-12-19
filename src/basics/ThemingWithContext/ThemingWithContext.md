## Global Styles With React Context

- It's the most simple an unobtrusive way of theming, inspired by [React's own Dynamic Context.](https://reactjs.org/docs/context.html#dynamic-context)
- Define once the theme, use only where necessary, without having to pass it down the component tree.
- Skipping the pass down is important when a.) the theme can be changed by users on the UI and b.) not all components depend on the theme. In this case a theme change is rippled down even to components which might not need it.
- If all components are depending on a theme React Context can be fully skipped and the theme passed as any other `prop`.
- Other solutions which use constructs like [<ThemeProvider>](https://www.styled-components.com/docs/advanced#theming) usually end in wrapping hell.

### How it works?

1. In `theme.js` we set up the theme and create a theme context.
2. In the component where we want to use the theme we add a `contextType` to the component with the theme context from 1.
3. Now the component can use the theme (`let theme = this.context`), and pass to its children like props.
4. In `Button.js` we style the button with `props.theme`.

### Example

```Javascript
// theme.js
import React from 'react'

const theme = {
	foreground: 'black',
	background: 'white',
};

const ThemeContext = React.createContext(theme)
export default ThemeContext
```

```Javascript
// Button.js
import styled from 'styled-components'

const Button = styled.button`
	padding: 1.25em;
	border: 1px solid;
	background-color: ${props => props.theme.background};
	color: ${props => props.theme.foreground};
`
export default Button
```

```Javascript
// ThemingWithContext.js
// - Unnecessary code lines were removed !!

import Button from './Button'
import ThemeContext from './theme'

class ThemingWithContext extends React.Component {
	render() {
		let theme = this.context
		return (
			<Container>
				<Button theme={theme}>Styled by the theme</Button>
				<Button>Unstyled</Button>
			</Container>
		)
	}
}
ThemingWithContext.contextType = ThemeContext
```
