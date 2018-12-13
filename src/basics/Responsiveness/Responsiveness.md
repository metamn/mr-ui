## Responsiveness

With React, a reactive / responsive framework, it's time to rethink the responsiveness of a website.

In most cases, on the large web, responsiveness means the site is adapting to the device screen size using media queries.

Since [Frank Chimero's original article](https://frankchimero.com/writing/the-webs-grain/) we know this is not enough. Why? There are too many devices, and there will be much more which cannot be covered by media queries.

Instead, we should let every component of the site be aware of it's size and respond accordingly to changes. This way the final site [can be assembled automagically](http://metamn.io/beat/tomorrowww/) even in unknown and uncertain conditions.

This idea is familiar with React: every component is responsible of, and manages its own state. That should be true also for plain CSS elements. There is a [work in progress](https://elementqueries.com/) towards a general protocol but W3C, as usual, is catching up very slow, thus CSS Element Queries are not a standard yet.

Fortunately React has plenty of libraries and ways to make elements be aware of their dimension and act upon changes.

We have the following individual scenarios which can be combined together when necessary:

1. Elements are aware of each other's state and can act upon changes collectively.
2. An element is aware of its measures and can react to changes.
3. An element's style can perform element queries to react to changes inside style.
4. An element's style can perform classic media queries and react when device screen size is changed.


### React Measure

[React Measure](https://souporserious.github.io/react-measure/) computes the measurements of a React component. Like dimension, position on screen, and more.

It uses a `ResizeObserver` to make it all dynamic. When an element's measure is changing the component is notified and re-rendered.

With this utility we can do decide in `render()` what version of an element is displayed.

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

### Element Queries for Styled Components

### Classic Media Queries

### Resources

- [React Measure](https://github.com/souporserious/react-measure)
- [A list of available technologies for element queries, Dec 2018](https://github.com/ZeeCoder/container-query)
- [Devices as designers](http://metamn.io/beat/tomorrowww/)
- [An original idea by Frank Chimero](https://frankchimero.com/writing/the-webs-grain/)
