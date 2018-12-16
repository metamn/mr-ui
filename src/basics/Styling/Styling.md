## Styling

Styling is about CSS: using a theme to style individual components.

### Style composition

To keep style consistent the style composing technique must be used: a component can borrow styles from other components, or offer them its own.

The CSS3 web standard lately became highly advanced but still not enough powerful to implement style composing like frameworks &mdash; SASS, Less, Styled Components &mdash; do.

In React there are [lots of styling frameworks](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660) and Polished is the current best practice.

It has two different usages, a decision must be made which one is better:

```Javascript
// Styles as object usage
const styles = {
   ...clearFix(),
}

// styled-components usage
const div = styled.div`
  ${clearFix()}
`
```

### Styling framework

Writing plain CSS is still very time consuming and ineffective. To fix this there are various style frameworks to help.

It seems Styled Components are the current best practice. It's the most popular and has the largest ecosystem.

CSS Modules might be an alternative. Avoid Emotionjs for now &mdash; very messy documentation and look, however it was meant to be the ultimate styling framework borrowing what's best from all others.

### CSS Variables

Using styling frameworks and utilities is less and less popular. The [more standards, less frameworks](https://developer.salesforce.com/blogs/2018/12/introducing-lightning-web-components.html) approach is to follow.

Web standards are catching up rendering frameworks obsolete.

For example, with the CSS Variables standard we get what we had in SASS. More over, as Ana Tudor shows, CSS variables are really magic compared to their old, framework-specific counterparts.

### Resources

- [Ana Tudor: DRY Switching with CSS Variables](https://css-tricks.com/dry-switching-with-css-variables-the-difference-of-one-declaration/)
- [More standards, less frameworks](https://developer.salesforce.com/blogs/2018/12/introducing-lightning-web-components.html)
- [Composing with Polished](https://github.com/styled-components/polished)
- [Mixins with Styled components](https://github.com/styled-components/styled-components/blob/master/docs/tips-and-tricks.md)
- [Mark Dalgleish &mdash; A list of major modern techniques compared (May 2017)](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660)
