# Classical typography

Classical typography sets up a typographic grid and lies text (mostly) and other objects (images, decorations) upon.

The typographic grid is set in such way to help the reader to consume long form text. The font is set to a size which is highly readable; the lines of the text is set to 60-80 characters in a row; the distance between the lines are set to make the long form text enjoyable.

Classical typography has roots in the printed press where the size of the paper was fixed. This helped to set up a well defined grid.

On the web due to many different screen sizes setting up a grid is more difficult. [Iain Lamb](http://lamb.cc/typograph/) gives us an enlightening study and a tool to make this happen.

It uses browser defaults and builds up gradually a grid where content can be perfectly aligned both vertically and horizontally.

Let's do it, with a twist, making it supporting multiple viewports. At the time of writing his essay responsive design was unknown.

## Font family, font size, line height &mdash; all set up in the <body> element

> Here, it pays to work with the grain. Rather than styling everything from scratch, start out by carefully considering what the browser offers by default. Write the CSS from there, as a minimal expression of differences from the default style. This approach gets the job done using the least amount of code, yielding a positive impact on page download speed and the ease with which changes can be made in the future (assuming less code means there is less to understand, maintain, and edit).

And the browser sets font size by default to 16px, and line height [roughly](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height) to 1.25.

Iain suggests to set up font size in % instead of any other unit. This is an unobtrusive way of setting font size. It doesn't overwrite the font size set in the browser preferences, and it allows users to increase or decrease font size with keyboard shortcuts.

Line height should be set unitless. This way the `font-size * line-height` combo will define an universal grid even if later the font size of other elements is changed.

With these two settings we've defined the typographic grid. With a `font-size: 100%; line-height: 1.25` the grid cell size will be '`16px * 1.25 = 20px`'. Notice that `100%` instructs the browser to use the default font size which is `16px`.
