## React Measure

- [React Measure](https://souporserious.github.io/react-measure/) computes the measurements of a React component. Like dimension, position on screen, and more.
- It uses a `ResizeObserver` to make it all dynamic. When an element's measure is changing the component is notified and re-rendered.
- With this utility we can do decide in `render()` what version of an element is displayed.

```Javascript
<Measure ...
	<Container ...
		{
			width < 150 && (
				<LogoTextExtraSmall>Logo Extra Small</LogoTextExtraSmall>
			)
		}
		{
			width >= 150 && width <= 320 && (
				<LogoTextSmall>Logo Small</LogoTextSmall>
			)
		}
		{
			width > 320 && (
				<LogoText>Logo Large</LogoText>
			)
		}
	</Container>
</Measure>
```

### Example

- **If this example flicks in Storybook please try in Code Sandbox: https://codesandbox.io/s/7zxq1w9vk6**
- This is a simple example which updates an element (Logo) when it's own dimensions change.
It seems trivial but no CSS media and element queries are used.

### Notes

- The current code is too verbose, it needs to be refactored before using in large projects.
