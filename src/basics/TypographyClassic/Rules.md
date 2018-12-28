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
