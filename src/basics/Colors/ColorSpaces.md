# Color Spaces

To make colors quantifiable color models and color spaces like RGB or CMYK are used.

CMYK is specific for print, RGB, HSL is specific for computer monitors.

## RGB vs HSL

RGB is a color model where each color has three main properties: the amount of red, green and blue in each color. Colors in RGB are created by adding / mixing these three basic colors / properties.

There is a fourth, optional property: alpha transparency, or opacity, defining how transparent a color is.

Notation:

`rgba(red, green, blue, alpha transparency)`

Where:

- Red: the percentage of red in a color, expressed in `%` or [0..255] where 255=100%
- Green: the percentage of green in a color
- Blue: the percentage of a blue in a color
- Alpha transparency: how opaque the color is, in percentage. 0% is fully opaque

In CSS notation:

```CSS
--red: rgba(255, 0, 0, 1);
--red-opaque: rgba(255, 0, 0, .5);
--green: rgba(0, 255, 0, 1);
--blue: rgba(0, 0, 255, 1);
--black: rgba(0, 0, 0, 1);
--white: rgba(255, 255, 255, 1);
```

HSL is a color model based on RGB, used by artists to have a more intuitive framework to think in colors.

In HSL a color has again three main properties as hue, saturation and luminosity.

There is a fourth, optional property: alpha transparency, or opacity, defining how transparent a color is.

Notation:

`hsla(hue, saturation, lightness, alpha transparency)`

Where:

- Hue: the color itself, like `red`, `green` or `blue`, expressed as an angle. 0deg = red = 360deg. green = 120deg, blue = 240deg.
- Saturation: the amount of `grey` in a color, in percentage: 0% = the color is fully grey, 100% = no grey at all in the color
- Lightness: The amount of `black` and `white` in a color, in percentage: 0% = the color is full black, 50% = the color is fully the color itself, 100% = the color is full white.
- Alpha transparency: how opaque the color is, in percentage. 0% is fully opaque.

```CSS
--red: hsla(0, 100%, 50%, 1);
--red-opaque: hsla(0, 100%, 50%, 0.5);
--green: hsla(120, 100%, 50%, 1);
--blue: hsla(240, 100%, 50%, 1);
--black: hsla(anything, anything, 0%, 1);
--white: hsla(anything, anything, 100%, 1);
```



## Resources

- https://en.wikipedia.org/wiki/Color_space
