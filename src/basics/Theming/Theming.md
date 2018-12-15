## Theming

Theming, in our case, is global style variables and SASS-like mixins.

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


### Resources

- [Composing with Polished](https://github.com/styled-components/polished)
- [Mixins with Styled components](https://github.com/styled-components/styled-components/blob/master/docs/tips-and-tricks.md)
- [Theming with React Context](https://reactjs.org/docs/context.html#dynamic-context)
- [Mark Dalgleish &mdash; A list of major modern techniques compared (May 2017)](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660)
