## Theming

Theming is foremost about global style variables: let the application be built on a common set of parameters like colors, fonts, spacing, and more.

Theming is mandatory. Now the operating system can request a light and dark mode for every app or website.

Theming has a sibling &mdash; Styling &mdash; which makes all these parameters re-usable and composable inside components.

When entering the React / CSS-in-JS realm these simple things got utterly complicated.

Mark Dalgleish explained why, and presented all major approaches like CSS Modules, JSS, Styled Components, Styletron, Aphrodite, Polished, Yoga, Emotion &mdash; to come up finally with a beautiful solution:

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


### Resources

- [Theming with React Context](https://reactjs.org/docs/context.html#dynamic-context)
- [Mark Dalgleish &mdash; A list of major modern techniques compared (May 2017)](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660)
