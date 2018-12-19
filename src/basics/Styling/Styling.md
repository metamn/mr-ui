## Styling

Styling is about writing compact, reusable and composable CSS usually with the help of a framework.

### Style composition

To keep style consistent a component has to be able to borrow styles from other components, and to offer its own for reuse.

The CSS3 web standard is not ready yet to implement such style composing like other frameworks &mdash; SASS, Less, Styled Components &mdash; do.

In the React ecosystem even if there are [lots of styling frameworks](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660) neither one is a silver bullet.

It seems Styled Components are the current best practice. It's the most popular and has the largest ecosystem. Together with Polished they can offer what one has accustomed with SASS / SCSS.

The aim is something like:

```Javascript
import {
  PageBlock,
  Card,
  Text
} from 'seek-style-guide/react'

const App = () => (
  <PageBlock>
    <Card>
      <Text heading>Hello World!</Text>
    </Card>
  </PageBlock>
)
```

and

```Javascript
const Text = {
  ...rules,
  ...moreRules,
  fontFamily: 'Comic Sans MS',
  color: 'blue'
}
```


CSS Modules might be an alternative. Avoid Emotionjs for now &mdash; very messy documentation and look, however it was meant to be the ultimate styling framework borrowing what's best from all others.

### CSS Variables

Using styling frameworks and utilities is less and less popular. The [more standards, less frameworks](https://developer.salesforce.com/blogs/2018/12/introducing-lightning-web-components.html) approach is to follow.

Web standards are catching up and rendering frameworks obsolete.

For example, with the CSS Variables standard we get what we had in SASS. More over, as Ana Tudor shows, CSS variables are really magic compared to their old, framework-specific counterparts.

Replacing Styled Components with CSS variables has to be analysed.

### Resources

- [Thi.ng: How to UI in 2018](https://medium.com/@thi.ng/how-to-ui-in-2018-ac2ae02acdf3)
- [Ana Tudor: DRY Switching with CSS Variables](https://css-tricks.com/dry-switching-with-css-variables-the-difference-of-one-declaration/)
- [More standards, less frameworks](https://developer.salesforce.com/blogs/2018/12/introducing-lightning-web-components.html)
- [Mark Dalgleish &mdash; A list of major modern techniques compared (May 2017)](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660)
