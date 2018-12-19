## Styling With Styled Components

### A short detour

- Since building components in React is a breeze one can realise a long time dream: build a component system from bottom up, starting with simple HTML elements like `<a>` or `<p>`.
- This sounds unnecessarily complicated unless we take into consideration the distributed and semantic web, where every content block (a paragraph perhaps) is annotated and lives its own life on the net, being capable to grow and return that growth back to it's author.
- In short we will need soon something like this:

```html
<blockquote
	vocab="http://schema.org/"
	typeof="Quote"
	author="@metamn"
	url="http://metamn.io/article#quote"
	likes="10"
	shares="300"
	comments="0"
	>
	My best joke ever here
</blockquote>
```

It takes a single declaration to create a HTML element in React:

```Javascript
export function BlockquoteHTML({className, ...props}) {
	return (
		<blockquote className={className} ....>
			{props.children}
		</blockquote>
	)
}
```

This makes worth starting your own Design System from scratch, and later be able to add accessibility, annotation and any future extension easily.


### How it works?

1. A `LinkHTML` component is set up together with a `LinkCSS` component.
2. They are glued together with Styled Components and the Polished-inspired *mixin* technique: `export const Link = styled(LinkHTML)'${LinkCSS()}'`
3. The main React component is importing the already glued `Link` component and is using it like `return <Link href="...">metamn.io</Link>`

### Example

```Javascript
// in HTML.js
//
export function LinkHTML({className, ...props}) {
	return (
		<a className={className} href={props.href} title={props.title}>
			{props.children}
		</a>
	)
}

// in CSS.js
//
export function LinkCSS({...props}) {
	return {
		color: 'blue',
		textDecoration: 'underline',
	}
}

// in DesignSystem.js
//
import {LinkHTML} from './HTML'
import {LinkCSS} from './CSS'
import styled from "styled-components"

export const Link = styled(LinkHTML)`
	${LinkCSS()}
`

// in StylingWithStyledComponents.js
//
import {Link} from "./DesignSystem";
class StylingWithStyledComponents extends React.Component {
	render() {
		return (
			<Link
				className='link'
				href='http://metamn.io'
				title='metamn.io'
			>
				A custom made Link component pointing to http://metamn.io
			</Link>
		)
	}
}
```

### Resources:

- [The Journey Of A Blog Post In 202X](https://morethemes.baby/2018/12/10/the-journey-of-a-blog-post-in-202x/)
- [Composing with Polished](https://github.com/styled-components/polished)
- [Mixins with Styled components](https://github.com/styled-components/styled-components/blob/master/docs/tips-and-tricks.md)
