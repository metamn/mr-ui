123456789 10 123456789 20 123456789 30 123456789 40 123456789 50 123456789 60

# Classic Typography

## Theory

*Invented* by Bauhaus a century ago classic typography is still relevant today. Everything static on print &mdash; books, magazines, newspapers, posters &mdash; and everything static on screen &mdash; graphic design, blogs, marketing websites, social networks &mdash; are using its principles.

Minimal typography is built on a basic assumption: there is always a *body text* in a content; there is always something to read. A long form text like an article, a book chapter, a description &mdash; or a short form text like an event invitation with details.

The main goal of this kind of typography is to make the reader read the text, and, to offer help when the text is too long or diverse. It wraps into chapters, sections and subsections with title; it decorates with quotes, asides, tables, first letter initials, spacers &mdash; and so on.

Minimal typography's basic rule is to set the body text first:

1. Let it have the smallest font size possible which is still perfectly readable.
2. Use a typeface meant for reading.
3. Set the text width to 60-80 characters which makes reading easy.


## Theory and practice

[Iain Lamb](http://lamb.cc/typograph/) came up with a fantastic essay and tool to help lay out the basics of classical typography. Please make yourself happy by reading it now, then come back, if ever necessary.

## Practice in a responsive environment

In 2009 there was no responsive design. To make Iain's idea responsive the only thing one should do is to create a typographic grid for every device type.

As a practice we are making this text to be displayed on 60-80 characters in a row on all devices. You can test in on the `Viewports` tab below.

And the code is:
```Javascript
// typographic-grid.js
//
import React from 'react'

const TypographicGrid = {
	mobile: {
		fontSize: '100%',
		lineHeight: '1.25',
		lem: '1.25em',
	},
	tablet: {
		fontSize: '110%',
		lineHeight: '1.25',
		lem: '1.375em',
	},
	tabletL: {
		fontSize: '140%',
		lineHeight: '1.25',
		lem: '1.75em',
	},
	laptop: {
		fontSize: '160%',
		lineHeight: '1.25',
		lem: '2em',
	},
	desktop: {
		fontSize: '200%',
		lineHeight: '1.25',
		lem: '2.5em',
	}
}

export default TypographicGrid
```  

``` Javascript
// TypographyClassic.js
//

....
const Container = styled.div`
	overflow-x: hidden;

	@media (max-width: 767px) {
		font-size: ${props => props.typographicGrid.mobile.fontSize};
		line-height: ${props => props.typographicGrid.mobile.lineHeight};
		padding: ${props => props.typographicGrid.mobile.lem};
	}
	....
	`
```

### Notes:

- The `lem` variable is the "lambda in em" from Iain's notation.
- On mobile we can't put 60 chars in a row unless we highly reduce font size below 100% which destroys the readability of the text.


123456789 10 123456789 20 123456789 30 123456789 40 123456789 50 123456789 60
