123456789 10 123456789 20 123456789 30 123456789 40 123456789 50 123456789 60

# Classical typography

Classical typography sets up a typographic grid and lays text (mostly) and other objects (images, decorations) upon that grid.

The typographic grid is set in such way to help the reader to consume long form text. The font is set to a size which is highly readable; the lines of the text is set to 60-80 characters in a row; the distance between the lines are set to make the long form text enjoyable.

Classical typography has roots in the printed press where the size of the paper was fixed. This helped to set up a well defined grid.

On the web due to many different screen sizes setting up a grid is more difficult. [Iain Lamb](http://lamb.cc/typograph/) gives us an enlightening study and a tool to make this happen.

It uses browser defaults and builds up gradually a grid where content can be perfectly aligned both vertically and horizontally.

Let's do it, with a twist, making it supporting multiple viewports. At the time of writing his essay responsive design was unknown.

## Font family, font size, line height &mdash; all set up in the <body> element

> Here, it pays to work with the grain. Rather than styling everything from scratch, start out by carefully considering what the browser offers by default. Write the CSS from there, as a minimal expression of differences from the default style. This approach gets the job done using the least amount of code, yielding a positive impact on page download speed and the ease with which changes can be made in the future (assuming less code means there is less to understand, maintain, and edit).

And the browser sets font size by default to 16px, and line height [roughly](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height) to 1.25.

Iain suggests to set up font size in % instead of any other unit. This is an unobtrusive way of setting font size. It doesn't overwrite the font size set in the browser preferences, and it allows users to increase or decrease font size with keyboard shortcuts.

Line height should be set unitless. This way the `font-size * line-height` combo will define an universal grid. Even if later the font size of other elements is changed the grid stays the same.

With these two settings we've defined the typographic grid. With a `font-size: 100%; line-height: 1.25` the grid cell size will be '`16px * 1.25 = 20px`'. Notice that `100%` instructs the browser to use the default font size which is `16px`.

In short, on our new typographic grid every text line fits in a row which has a 20px height.

## Sizing child elements &mdash; only with `em`

So far our grid is measured in pixels even if we used `%` and an unitless measure to set it up.

Sizing child elements on a grid with pixels is a bad practice.

[Pixels don't scale](https://stackoverflow.com/questions/609517/why-em-instead-of-px), or more precisely they scale but not in a proportional way. If you zoom a page set in pixels the elements will overflow. If you zoom a page set with relative, elastic units like `em` or `rem` they will scale nicely and proportionally.

To keep our grid unobtrusive we should use elastic instead of absolute measures. There are many elastic measures &mdash; em, rem, vw, vh, vmax, vmin &mdash; of them [only](https://css-tricks.com/confused-rem-em/) `em` is based on it's parent font size. We are lucky, we have a single choice to take.

> The mechanics of the em unit offer an excellent way to size child elements in relation to their parents. In fact, if every child element defines its sizing values in em, a chain reaction is set off. Each child becomes proportionally bound to its parent, which in turn is bound to its parent, all the way up to the root element, ancestor of all. In this way, the proportions of the whole document end up being defined in relation to a single, shared value: the font-size of the <body>.

> Documents sized in this way enjoy a golden property, one that most web pages would do well to provide: proportional scaling. Should the user or designer change the base font-size, all the other elements on the page will resize accordingly, preserving their original proportion to the <body>. It will look as if the view has just been zoomed in or out.   

Converting the grid size from `px` to `em` is easy since `em` is equals the body font size. In our formula of `16px * 1.25` we can replace `16px` with `1em` to get `1.25em` as the grid size.

## Summing up

1. We try to use the browser default values and add as less CSS as possible to stay unobtrusive.
2. This lead us to set the font size to 100%. If possible in the <body> tag ("Whatever the value of the browser’s setting for font-size, it first cascades into the DOM to effect the font-size of the <body> element." &mdash; that's why not in the <html> tag), it not possible then in the main container surrounding the longform text.
3. Having an unitless line height provides us an universal grid regardless of the child elements size and scale.
4. The grid is measured in `em` to provide proportional scaling to the font size.

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

The default font size of 16px makes text unreadable on large screens like 1K, or 2K. We should grow the font-size as the viewport grows.

It's annoying when the first thing we must do after a website loads is to zoom out to be able to read text. Instead the site should present an already optimized experience.

With the system proposed by Iain setting up the a responsive grid is a breeze. The basic container should increase font size as the viewport grows:

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
- Positions elements on the grid easily with `em`.
- It draws both the vertical and horizontal grid lines to make sure everything is aligned to the grid.

123456789 10 123456789 20 123456789 30 123456789 40 123456789 50 123456789 60


## What breaks the grid?

In spite all our efforts to have a perfectly aligned content there are still things to fix.

1. `overflow-x` adds a horizontal scrollbar which breaks the grid.
2. Multiline headings are breaking the grid.

This list will ever grow, I'm afraid, as we add new elements to the grid.


## Caveats

Classical typography is useful in certain conditions, namely when everything is sized only with `em`, and, every item is aligned to the top / left on a grid cell.

When you use modern techniques like `justify-content: center` the whole grid breaks. Or when size and position elements with units like `vw` or `vh`.


## When to use?

Sticking to a perfect grid which turns to be very fragile is recommended only when a long form text is displayed. Think the content of an article.

For everything else &mdash; layout, navigation, etc &mdash; there are more liberal solutions.

However if we follow [Frank Chimero's approach](https://frankchimero.com/writing/the-webs-grain/) and want to assemble layouts in David Hockney's style then this technique is highly recommended.

We can set up a classic typographic grid for a 320px wide container, and, with CSS Grid we can set a layout grid with `viewport-width / 320px` number of columns, each column built on the classic typographic grid.

This technique clearly points to the future, and breaks with the current mainstream 'center it all' approach.

## To do

To further refine this technique one should:

1. Create a function to calculate the padding and size of the headings in a free-form manner. Currently Iain's calculator has opinions baked in. Perhaps a Modular Scale support should be added.
