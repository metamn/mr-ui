123456789 10 123456789 20 123456789 30 123456789 40 123456789 50 123456789 60

# Classical typography

Classical typography sets up a typographic grid and lays text &mdash; foremost &mdash; and other objects &mdash; images, decorations &mdash; upon that grid.

The typographic grid is set in such way to help readers consume long form text. The font is set to a size which is highly readable; the lines of the text are set to 60-80 characters in a row; the vertical distance between the text lines are set to make the long form text enjoyable.

Classical typography has roots in the printed press where the size of the paper was fixed. This helped to set up a well defined grid. On the web due to many different screen sizes setting up a grid is more difficult.

[Iain Lamb with Typograph](http://lamb.cc/typograph/) gives an enlightening study and a tool to make this happen.

It uses browser defaults and builds up gradually a grid where content can be perfectly aligned both vertically and horizontally.

## Font size and line height

> Here, it pays to work with the grain. Rather than styling everything from scratch, start out by carefully considering what the browser offers by default. Write the CSS from there, as a minimal expression of differences from the default style. This approach gets the job done using the least amount of code, yielding a positive impact on page download speed and the ease with which changes can be made in the future (assuming less code means there is less to understand, maintain, and edit).

The browser sets font size by default to 16px, and line height [roughly](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height) to 1.2.

Iain suggests to use these values in a specific manner.

Set font size to `100%` (which is `16px`) instead of any other unit. This is an unobtrusive way of setting font size. It doesn't overwrite the font size set in the browser preferences, and it allows users to increase or decrease font size with zooming.

Line height should be set unitless. This way the `font-size * line-height` combo will define an universal grid. Even if later the font size of child elements is changed the grid stays the same across the whole page.

With a `font-size: 100%; line-height: 1.25` the grid cell size will be '`16px * 1.25 = 20px`'.

## Sizing child elements only with `em`

So far the grid is measured in pixels even if we used `%` and an unitless measure to set it up.

Sizing child elements on a grid with pixels is a bad practice.

[Pixels don't scale](https://stackoverflow.com/questions/609517/why-em-instead-of-px), or more precisely they scale but not in a proportional way. When zooming a page set in pixels the elements will overflow. When set with relative, elastic units like `em` or `rem` the page will scale nicely and proportionally.

A page scales well on the responsive web when elastic measures are used instead of the absolute `px`. There are many elastic measures &mdash; em, rem, % &mdash; of them [only](https://css-tricks.com/confused-rem-em/) `em` takes consideration it's parent font size.

And Iain's grid is built on font size.

> The mechanics of the em unit offer an excellent way to size child elements in relation to their parents. In fact, if every child element defines its sizing values in em, a chain reaction is set off. Each child becomes proportionally bound to its parent, which in turn is bound to its parent, all the way up to the root element, ancestor of all. In this way, the proportions of the whole document end up being defined in relation to a single, shared value: the font-size of the <body>.

> Documents sized in this way enjoy a golden property, one that most web pages would do well to provide: proportional scaling. Should the user or designer change the base font-size, all the other elements on the page will resize accordingly, preserving their original proportion to the <body>. It will look as if the view has just been zoomed in or out.   

Converting the grid size from `px` to `em` is easy. `1em` equals the body font size. In the `16px * 1.25` formula `16px` can be replaced with `1em` to get `1.25em` as the grid size.

## `<body>`

If possible set the grid in the `<body>` element. This way the whole page will have an universal grid layout all children can inherit and build upon.

```css
body {
	font-size: 100%; // 16px by default, or 1em
	line-height: 1.25; // grid cell size is (16px * 1.25) = 20px, or (1em * 1.25) = 1.25em

	> * {
		box-sizing: border-box; // Otherwise elements with border will break the grid.
	}
}
```

## Responsiveness

The default font size of 16px makes text unreadable on large screens like 1K, or 2K. The text size should grow as the viewport grows.

It's annoying when a page has to be zoomed in to become readable. Instead the site should present an already optimized experience.

With the system proposed by Iain setting up the a responsive grid is a breeze. The first child container should increase font sizes as the viewport grows.

```css
const TypographicGrid = {
	lineHeight: '1.25',

	mobile: {
		fontSize: '100%',
	},
	tablet: {
		fontSize: '110%',
	},
	tabletL: {
		fontSize: '140%',
	},
	laptop: {
		fontSize: '160%',
	},
	desktop: {
		fontSize: '200%',
	}
}
```

## The example

- This example sets up a responsive grid which tries to display around 60 characters in a row, on every device.
- It adds different sized child elements like the headings and source code snippets, all of them aligned to the grid.
- Positions elements on the grid only with `em`.
- It draws both the vertical and horizontal grid lines to visualize the grid and the alignments.

123456789 10 123456789 20 123456789 30 123456789 40 123456789 50 123456789 60


## What breaks the grid?

1. `overflow-x` adds a horizontal scrollbar which breaks the grid.
2. Multiline headings.

This list will grow as we add new elements to the grid.


## Caveats

Classical typography is useful in certain conditions, namely when everything is sized only with `em`, and, every item is aligned to the top / left on a grid cell.

Combined with modern techniques like `justify-content: center` the grid breaks. Or when elements are sized and positioned with units like `vw` or `vh`.


## When to use?

Sticking to a perfect grid &mdash; which turns to be very fragile &mdash; is recommended only when a long form text is displayed like the content of an article.

For everything else &mdash; layout, navigation, etc &mdash; there are more liberal solutions.

However if one follows [Frank Chimero's approach](https://frankchimero.com/writing/the-webs-grain/) and wants to assemble layouts in David Hockney's style then this technique can be highly powerful.

## To do

To further refine this technique one should:

1. Create a function to calculate the padding and size of the headings in a free-form manner. Currently Iain's calculator has opinions baked in. Perhaps a Modular Scale support should be added.


123456789 10 123456789 20 123456789 30 123456789 40 123456789 50 123456789 60
