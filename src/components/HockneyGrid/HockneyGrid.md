## The Hockney Grid

- Inspired by [Frank Chimero's The Web's Grain](https://frankchimero.com/writing/the-webs-grain/)
- Sets up a layout of `n` columns each column with a `320px` width using CSS Grids
- As the viewport expands (320px meant to represent mobile devices) and new columns are added the content expands as well and fills these new columns.
- Currently is just experimenting with ...


### Gotchas

- Showing gridlines is unnecessary since Firefox has a great, far better grid inspector.
- Using `1fr` instead of `320px` it seems to be more `real` and error prone .... Drawbacks: 1.) it breaks the typographic grid's horizontal positioning 2.) there is no media query for `fr` 3.) `fr` is a dynamic measure I mean a column of `1fr` might be wider than another column of `1fr`: https://imgur.com/a/xTEsmHD
- Also, thinking in fixed column size, when the content doesn't justifies it, it's a bad practice.
- `justify-content: center` combined with `font-size: 110%` and grid size `320px` pushes content left out of screen in landscape mode.
- `justify-content: center` doesn't really makes sense in CSS Grids with `fr` metrics. With `fr` the grid always fills the container.


### Resources

- [Playing with the CSS Grid](https://codepen.io/metamn/post/playing-with-the-css-grid)
- [CSS Grid Cheatsheet](http://grid.malven.co/)
- [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Things I’ve Learned About CSS Grid Layout ](https://css-tricks.com/things-ive-learned-css-grid-layout/)
- [Frank Chimero's The Web's Grain](https://frankchimero.com/writing/the-webs-grain/)
