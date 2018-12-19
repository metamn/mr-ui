## Styling

Styling is about writing compact, reusable and composable CSS usually with the help of a framework.

Without a framework React offers inline styling as default where style is attached directly to an element in DOM instead of being loaded from a classic `.css` file.

```html
<button style="background-color: palevioletred; color: papayawhip;" />
```

Inline styles only support a subset of CSS without pseudo selectors, media queries, keyframes etc. No design system can live without these.

### Frameworks

The React ecosystem has [dozens of styling frameworks](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660).

It seems Styled Components are the current best practice. It's the most popular and has the largest ecosystem. It offers the important `mixin` feature if one comes from SASS / SCSS.

CSS Modules might be an alternative. Avoid Emotionjs for now &mdash; very messy documentation and look, however it was meant to be the ultimate styling framework borrowing what's best from all others.

### CSS Variables

Using styling frameworks and utilities is less and less popular. The [more standards, less frameworks](https://developer.salesforce.com/blogs/2018/12/introducing-lightning-web-components.html) approach is to follow.

Web standards are catching up and rendering frameworks obsolete.

For example, with the CSS Variables standard we get what we had in SASS. More over, as Ana Tudor shows, CSS variables are really magic compared to their old, framework-specific counterparts.

Replacing Styled Components with CSS variables has to be analysed.

### Resources

- [The difference between React default inline styling and CSS-in-JS offered by frameworks](https://mxstbr.blog/2016/11/inline-styles-vs-css-in-js/)
- [Thi.ng: How to UI in 2018](https://medium.com/@thi.ng/how-to-ui-in-2018-ac2ae02acdf3)
- [Ana Tudor: DRY Switching with CSS Variables](https://css-tricks.com/dry-switching-with-css-variables-the-difference-of-one-declaration/)
- [More standards, less frameworks](https://developer.salesforce.com/blogs/2018/12/introducing-lightning-web-components.html)
- [Mark Dalgleish &mdash; A list of major modern techniques compared (May 2017)](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660)
