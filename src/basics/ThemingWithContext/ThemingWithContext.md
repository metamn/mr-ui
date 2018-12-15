## Theming With React Context

It's the most simple an unobtrusive way of theming, inspired by [React's own Dynamic Context.](https://reactjs.org/docs/context.html#dynamic-context)

### How it works?

1. In `theme.js` we set up the theme and create a theme context.
2. In the component where we want to use the theme we add a `contextType` to the component with the theme context from 1.
3. No the component can use the theme(`let theme = this.context`), and pass to its children, like for a Button.
2. In `Button.js` we style the button with `props.theme`. 
