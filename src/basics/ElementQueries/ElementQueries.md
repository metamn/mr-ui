## Element Queries

- Element queries are like media queries but instead of reacting on screen size change they react on the parent container's size change providing more dynamic and granular control.
- They are not a W3C web standard yet so custom implementations must be used instead.
- [Styled Container Query](https://github.com/FreddyFY/styled-container-query) is an excellent choice for those who use the `styled-components` approach for element styling.
- This nifty package offers exactly the same syntax like the good old media query:

```CSS
// Default style
${Logo} {
	color: red;
}

&:container(min-width: 320px) {
	${Logo} {
		color: blue;
	}
}

&:container(min-width: 769px) {
	${Logo} {
		color: green;
	}
}
```

### Gotchas

- All children containers must be defined in advance otherwise they'll reset the queries put in the parent.
