# Color Spaces

To make colors quantifiable color models and color spaces like RGB or CMYK are used.

CMYK is specific for print, RGB, HSL is specific for computer monitors.

## RGB vs HSL

RGB is a pretty basic color model where each color has three main properties, and a fourth property for transparency: `rgb(red, green, blue, opacity)`

Where:

- Red: the percentage of red in a color, expressed in `%` or [0..255] where 255=100%
- Green: the percentage of green in a color
- Blue: the percentage of a blue in a color
- Opacity: how opaque the color is, in percentage

In CSS notation:

```CSS
--red: rgb(255, 0, 0);
--red-opaque: rgba(255, 0, 0, .5);
--green: rgb(0, 255, 0);
--blue: rgb(0, 0, 255);
--black: rgb(0, 0, 0);
--white: rgb(255, 255, 255);
```

HSL is a more advanced color model based on RGB, used by artists to have a more intuitive framework to think in colors.

In HSL a color has again three main properties, and a fourth property for transparency:

```CSS


```



## Resources

- https://en.wikipedia.org/wiki/Color_space
