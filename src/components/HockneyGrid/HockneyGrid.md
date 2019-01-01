## The Hockney Grid

- Inspired by [Frank Chimero's The Web's Grain](https://frankchimero.com/writing/the-webs-grain/)
- Sets up a layout of `n` columns each column with a `320px` width using CSS Grids
- As the viewport expands (320px meant to represent mobile devices) and new columns are added the content expands as well and fills these new columns.
- Currently is just experimenting with ...


### Gotchas

- Using `1fr` instead of `320px` it seems to be more `real` and error prone .... it's only drawback is that it breaks the typographic grid's horizontal positioning.
- `justify-content: center` combined with `font-size: 110%` pushes content out of screen in landscape mode.
- `justify-content: center` doesn't really makes sense in CSS Grids.


### Resources

- [CSS Grid Cheatsheet](http://grid.malven.co/)
- [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Things I’ve Learned About CSS Grid Layout ](https://css-tricks.com/things-ive-learned-css-grid-layout/)
- [Frank Chimero's The Web's Grain](https://frankchimero.com/writing/the-webs-grain/)
