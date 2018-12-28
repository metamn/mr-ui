# Usage

Classical typography is useful in certain conditions, namely when everything is sized only with `em`, and, every item is aligned to the top / left on a grid cell.

# The Rules

## 1. Keep the default <body> font size and line height

That is, in all cases `100%` and `1.25`. But it is worth setting manually:

```css
body {
	font-size: 100%;
	line-height: 1.25;
}
```

## 2. Set text responsiveness inside the <body>

```css
body {
	.container {
		@media (max-width: 767px) {
			font-size: 100%;
		}

		@media (min-width: 768px) and (max-width: 1023px) {
			font-size: 110%;
		}

		@media (min-width: 1024px) and (max-width: 1365px) {
			font-size: 140%;
		}

		@media (min-width: 1366px) and (max-width: 1559px) {
			font-size: 160%;
		}

		@media (min-width: 1600px) {
			font-size: 200%;
		}
	}
}
```

## 3. Grid cell size is always `1.25em`

The <body> font size and line height combo defines the grid cell size. Which is always the same regardless of 2.)

```css
padding: 1.25em;

p + p {
	margin-top: 1.25em;
}
```

## 4. Set headings with lamb.cc/typograph

The [Modular Scale](https://www.modularscale.com/) gives you only the size of a heading. [The Typograph](http://lamb.cc/typograph/) gives you also the padding.

Without the right padding the horizontal rhythm will be broken.

```css
h1 { font-size:1.5em; padding:1.45833em 0; }
h2 { font-size:1.33333em; padding:1.25em 0; }
h3 { font-size:1.16667em; padding:1.51785em 0; }
```

## 5. `box-sizing` is always `border-box`

Otherwise elements with border will break the grid.


# Drawbacks

## 1. You can't really use other metrics than `em`

For example a `display: flex; justify-content: center` will align the element regardless of the grid. Or a `width: 50vw` will make an element size not necessarily a multiply of `1.25em`.

Classical typography always aligns an element to the top left corner of a grid cell.

## 2. You don't really know how many columns are on a viewport

Grid based typography was useful on paper, on a fixed width viewport, when one knew exactly, in advance, how many rows and columns are in the grid.

With multiple screens there are multiple viewports and the grid is dynamic. A mobile screen can have 30 columns, a large desktop 120.

In this context what could work is Frank Chimero's Hockney-style composition.

In fact, a 320px screen has `320/(16*1.25) = 16` columns. With CSS grids a system of (n * 16 columns) can be set up like `grid-template-columns 16lem 16lem 16lem 16lem ...`

Then content can be placed with media queries: if screen size is 16lem then in a single column; if between 16-32lem then in two columns; and so on...

Or if screen size < 16lem get display an image of 320px width; on the next level an image of 640px which takes the full two columns; on the next level perhaps an image of 640px width and a text with 320px width; ... and so on;

In any ways the nature of the content, the capabilities of the content defines the approach, not vice versa.


## Can't change `line-height`

See the code in example breaks the grid. What if a heading spans multiple lines and the line-height has to be reduced?
 
