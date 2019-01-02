## The Hockney Grid

- Inspired by [Frank Chimero's The Web's Grain](https://frankchimero.com/writing/the-webs-grain/)
- Sets up a layout of `n` columns each column with a `320px` width using CSS Grids
- As the viewport expands (320px meant to represent mobile devices) and new columns are added the content expands as well and fills these new columns.
- Currently is just experimenting with ...


### Gotchas

- Showing gridlines is unnecessary since Firefox has a great, far better grid inspector.
- Using `1fr` instead of `320px` it seems to be more `real` and error prone.

Advantages of `fr` over `320px`:
- `320px` has to be centered on large viewports (ie a 414px iPhone) and `justify-content: center` sometimes breaks the grid (combined with `font-size: 110%` and grid size `320px` pushes content left out of screen in landscape mode.)
- Centering also excludes the layout to have edge-to-edge content, like images for example. Such constrains are not sustainable on small displays where every pixel counts.

Drawbacks of `fr`:
- It breaks the typographic grid's horizontal positioning
- There is no media query for `fr`
- `fr` is a dynamic measure I mean a column of `1fr` might be wider than another column of `1fr`: https://imgur.com/a/xTEsmHD. This case must be seriously examined.


### To do

- Get a real use case. Otherwise, without a concrete direction, the progress of the learning process is stale.
- Go with grid areas. Go with `fr`. If not working switch to `px` on larger devices.

### Resources

- Strangeness in the gridland, [part 1](https://codepen.io/write/strangeness-in-the-gridland) and [part 2](https://codepen.io/write/strangeness-in-the-gridland-part-2)
- [Playing with the CSS Grid](https://codepen.io/metamn/post/playing-with-the-css-grid)
- [CSS Grid Cheatsheet](http://grid.malven.co/)
- [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Things I’ve Learned About CSS Grid Layout ](https://css-tricks.com/things-ive-learned-css-grid-layout/)
- [Frank Chimero's The Web's Grain](https://frankchimero.com/writing/the-webs-grain/)
