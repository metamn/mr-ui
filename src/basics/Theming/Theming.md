## Theming

Theming is a large subject. Let's divide it.

### Global styles and style composition

Theming is foremost about global style variables and reusable, composable element styles similar to mixins found in the SASS language.

When entering the React / CSS-in-JS realm these simple things got utterly complicated. Mark Dalgleish explained why, and presented all major approaches like CSS Modules, JSS, Styled Components, Styletron, Aphrodite, Polished, Yoga, Emotion &mdash; to come up finally with a beautiful solution:

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

This solution is in-house built, but can be replicated using React Context and Polished.

### Global styles

The React Context is the simplest and most straightforward a.k.a native way to make a globally accessible theme.

### Style composition

Polished is the current best practice. It has two different usages, a decision must be made which one is better:

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

It seems Styled Components are the current best practice. It's the most popular and has the largest ecosystem.

CSS Modules might be an alternative. Avoid Emotionjs for now &mdash; very messy documentation and look, however it was meant to be the ultimate styling framework borrowing what's best from all others.

### CSS Variables

The [more standards, less frameworks](https://developer.salesforce.com/blogs/2018/12/introducing-lightning-web-components.html) approach is to follow.

With native CSS variables we get what we had in SASS. More over, as Ana Tudor shows, CSS variables are really magic compared to their old, framework-specific counterparts.

### Colors

It's better to use HSL notation since they are better programmable than RGB codes, and are more intuitive than the RGBA notation.

### Typography

It has to be rethinked. The old, standard way (Bauhaus, Swiss, minimal) was perfect in a static environment like print. Now we have animated type, dynamic CSS units, variable fonts and viewports, and less attention.

We need a classic and an experimental typographic system.

### Layout

Again like in Typography, it has to be rethinked.

### Resources

- [Ana Tudor: DRY Switching with CSS Variables](https://css-tricks.com/dry-switching-with-css-variables-the-difference-of-one-declaration/)
- [More standards, less frameworks](https://developer.salesforce.com/blogs/2018/12/introducing-lightning-web-components.html)
- [Composing with Polished](https://github.com/styled-components/polished)
- [Mixins with Styled components](https://github.com/styled-components/styled-components/blob/master/docs/tips-and-tricks.md)
- [Theming with React Context](https://reactjs.org/docs/context.html#dynamic-context)
- [Mark Dalgleish &mdash; A list of major modern techniques compared (May 2017)](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660)
