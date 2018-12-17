## ES6

React is Javascript / ES6. If you come from earlier versions of Javascript these snippets will help you to get familiar with the ES6 code you'll see in React components.

In short, the *rules* are:

1. Use `const` in favor of `let`.
2. Declare functions with the arrow `() => {}` syntax.

### Function arguments

1. When an argument is missing it becomes `undefined`.
2. Passed arguments can have default values.

```Javascript
// Simple arguments
const add = (a = 10, b = 12) => a + b
console.log(add()) // 22

// Argument as a function
const add2 = (a = 10, b = add()) => a + b
console.log(add2()) // 32
```

Sources:
- https://repl.it/@metamn/FunctionArguments
- https://javascript.info/function-basics

### Function declaration

1. There is a short hand notation: `const func = (args) => {body}`.
2. Both `()` and `{}` can be skipped in some cases.

```Javascript
// Old school
function addOldSchool(a, b) {
  return a + b
}
console.log(addOldSchool(2, 3))

// Arrow functions
const add = (a, b) => {
  return a + b
}
console.log(add(2, 3))

// When return is a simple line {} can be skipped
const addSimple = (a, b) => a + b
console.log(addSimple(2, 3))

// When a single argument is passed () can be skipped
const addSingleArgument = a => a + a
console.log(addSingleArgument(2))

// When there are no arguments () should be present
const hello = () => 'Hello, world!'
console.log(hello())
```

Sources:
- https://repl.it/@metamn/Function
- https://javascript.info/function-expressions-arrows#arrow-functions
- https://github.com/metagrover/ES6-for-humans#2-arrow-functions

### Const

1. It's block scoped.
2. If references an `Array` or `Object` their contents can be changed, however a re-assigment is forbidden.
3. Try to always use `const` over `let`.

```Javascript
{
  // This can't be changed.
  const a = 2
  a = 3 // TypeError: Assignment to constant variable.

  // The values can be changed
  const b = [1, 2, 3]
  b.push(4)
  console.log(`b: ${b}`) // => b:1,2,3,4
  b = 5 // TypeError: Assignment to constant variable.
}

// Const is block scoped and can't be accessed here
console.log(`a: ${a}`) // ReferenceError: a is not defined
```

Sources:
- https://repl.it/@metamn/Const
- https://github.com/metagrover/ES6-for-humans#1-let-const-and-block-scoping

### Let

Replaces `var` with a main difference:

1. `let` is accessible only inside a block, ie it's *block scoped*.

```Javascript
// It will be accessible after the block
var a = 2

{
  // It will be accessible only inside the block
  let b = 3
  console.log(`b: ${b}`)
}

console.log(`a: ${a}`) // a:2
console.log(`b: ${b}`) // ReferenceError: b is not defined
```

Sources:
- https://repl.it/@metamn/Let
- https://github.com/metagrover/ES6-for-humans#1-let-const-and-block-scoping

### Resources

- [Javascript.info, a complete overview and reference recommended by Reactjs.org](https://javascript.info/)
- [ES6 for Humans, a quick overview of the main features of ES6](https://github.com/metagrover/ES6-for-humans)
- [ES6 Overview in 350 Bullet Points, an extended version of ES6 for Humans](https://ponyfoo.com/articles/es6)
- [ES6 and ES7 quick examples](https://medium.freecodecamp.org/here-are-examples-of-everything-new-in-ecmascript-2016-2017-and-2018-d52fa3b5a70e)
