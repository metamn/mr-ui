## Font Loading

Everywhere I look today it seems `webfontloader` from Google and Adobe / Typekit is the best practice.

For example, in Gatsby, famous for best practices, the `webfontloaderr` plugin is downloaded [5 times more](https://www.gatsbyjs.org/plugins/?=font) than the second in the list.

What's alarming though is that in `awesome-react` there are 0 results for a `font` search. This means the `webfontloader` has a monopoly, and/or, font loading is underrated in React.

What's re-assuring is that `webfontloader` is "the most well rounded approach that will be good enough for most use cases: FOUT with a Class." &mdash; [zachleat](https://www.zachleat.com/web/comprehensive-webfonts/)

### Resources

- [Only @font-face strategy is supported with FOIT](https://stackoverflow.com/questions/42675725/isolated-styled-components-with-font-face)
- The best overview of [all font loading strategies](https://www.zachleat.com/web/comprehensive-webfonts/) together with a [checklist](https://www.zachleat.com/web/font-checklist/)
