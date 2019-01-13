## Style guide

Style guides associated with programming languages enhance code quality and code reuse.

When code follows a style guide it is easy to understand and to extend by anybody else who also follows the same style guide.

Usually a style guide incorporates industry best practices. It does without doubt, thus adopted by many, offering a true relief for its users.

React, unfortunately, has no official style guide provided by Facebook. This role is taken voluntarily by AirBnb, and it is questionable.

Just some bits:

-   Use `.jsx` as file extension instead of `.js`
-   Pass params as list instead of array, which contradicts the [loose coupling](https://alistapart.com/article/coding-with-clarity#section3) general coding principle.

```javascript
// bad
function getFullName(user) {
    const firstName = user.firstName
    const lastName = user.lastName

    return `${firstName} ${lastName}`
}

// good
function getFullName(user) {
    const { firstName, lastName } = user
    return `${firstName} ${lastName}`
}

// best
function getFullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`
}
```

As a conclusion we do not use any styleguide for now. We rather wait for the official styleguide to come out.

It's not that the AirBnb styleguide is wrong. The fact is that even React itself doesn't stick to it.

## Enforcing a coding style

> If you want to enforce a coding style for your project, consider using Prettier instead of ESLint style rules.
> [Create React App](https://facebook.github.io/create-react-app/docs/setting-up-your-editor)

### Prettier

-   it is easy to use: https://prettier.io/docs/en/configuration.html
-   can re-format / prettify files on save, or all of them in a batch on the CLI

### Styled components

-   Autocomplete:
-   Highlighting:

### Resources

-   https://github.com/airbnb/javascript#destructuring
