## Text Around Circle

Displays a text like being wrapped around a circle.

### How it works?

1. The text is split into chars
2. Chars are rotated around a circle.

### Simple usage

- Set up a rectangle and add a text.
- The text should fit the rectangle. If it's too long the characters might overlap. If it's too short it won't fill the entire circle.
- You can use the Knobs to check whether the text fits it's container.
- Lots of room to play!

#### Example

```React
<TextAroundCircle text="Demo Text" size="20em" />
```

### See it live

- http://metamn.io/beat/what-some-people-apart-are-up-to-in-2016/

### Credits

- Original idea: https://css-tricks.com/set-text-on-a-circle/
- Plain HTML/SCSS/JS version: https://github.com/metamn/beat/tree/master/code/framework/design/decorations/text-around-circle
