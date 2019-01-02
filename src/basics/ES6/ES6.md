## ES6

React is Javascript / ES6. If you come from earlier versions of Javascript these snippets will help you to get familiar with the ES6 code you'll see in React components

For a better, and more through explanation please read [ES6 Core Features](http://exploringjs.com/es6/ch_core-features.html)

In short, the *rules* are:

1. Use `const` in favor of `let`.
2. Declare functions with the arrow `() => {}` syntax.
3. Pass arguments with `(...args)`. Or better, `({...args})`
4. Use destructuring `{} =` for better readable code.
5. Both named and default exports / imports are easy with modules.

And below, the details.

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
- https://javascript.info/var
- https://github.com/metagrover/ES6-for-humans#1-let-const-and-block-scoping


### Const

1. It's block scoped.
2. If references an `Array` or `Object` the contents of the Array or Object can be changed, however a re-assigment is forbidden.
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


### Function arguments

1. When an argument is missing it becomes `undefined`.
2. Passed arguments can have default values.
3. Passed arguments can be functions, objects, arrays too.
4. With arrow notation arrays can be passed only with the `...` rest operator since the default `arguments` object is not available in arrow functions
5. When an argument is an object it has to be destructured with `{} = {}`

```Javascript
// Simple arguments
const add = (a = 10, b = 12) => a + b
console.log(add()) // => 22

// Argument as a function
const add2 = (a = 10, b = add()) => a + b
console.log(add2()) // => 32

// Arguments as object
// - in this case the argument object has to have {} as default value to let destructuring work
const add3 = ({a = 10, b = 20, c = 30} = {}) => a + b + c
console.log(add3()) // => 60

// The default arguments object
function add4(a) {
  console.log(`arguments[0]: ${arguments[0]}`)
}
console.log(add4(10)) // arguments[0]: 10

// The default arguments object is not avaiable
const add5 = (a) => console.log(`arguments[0]: ${arguments[0]}`)
console.log(add5(20)) // ReferenceError: arguments is not defined

// ... but the rest operator can be used
const add6 = (...args) => console.log(`args[0]: ${args[0]}`)
console.log(add6(200)) // => args[0]: 200
```

Sources:
- http://exploringjs.com/es6.html - The most comprehensive book on ES6
- https://repl.it/@metamn/FunctionArguments
- https://simonsmith.io/destructuring-objects-as-function-parameters-in-es6/
- https://javascript.info/function-basics
- https://javascript.info/destructuring-assignment#smart-function-parameters



### The spread operator

1. Any Iterable can be destructured into it's individual elements
2. The result of the spread can be cast to an array, object
3. Can be used to compose anything iterable with anything else

```Javascript
// Any iterable - array, string, ... - can be spread it into individual elements
const spreadArray = [1, 2, 3]
console.log(...spreadArray) // => 1 2 3

const spreadString = 'Spread'
console.log(...spreadString) // => S p r e a d

// The result of the spread can be cast into an array, object
const charsArray = [...spreadString]
console.log(charsArray) // => [ 'S', 'p', 'r', 'e', 'a', 'd' ]

const charsObject = {...spreadString}
console.log(charsObject) // => { '0': 'S', '1': 'p', '2': 'r', '3': 'e', '4': 'a', '5': 'd' }

const numbersArray = [...spreadArray]
console.log(numbersArray) // => [1, 2, 3]

// Can be used to compose anything iterable with anything else
console.log(...spreadArray, spreadString) // => 1 2 3 'Spread'
console.log(...spreadArray, ...spreadString) // => 1 2 3 'S' 'p' 'r' 'e' 'a' 'd'
console.log([...spreadArray, ...charsArray, ...numbersArray, 'x', 'y', 'z', ...spreadString]) // => [ 1, 2, 3, 'S', 'p', 'r', 'e', 'a', 'd', 1, 2, 3, 'x', 'y', 'z', 'S', 'p', 'r', 'e', 'a', 'd' ]

// Combining objects
const func = (...args) => {console.log(args)}

const defaultColors = { color: 'black', background: 'white' }
const defaultFonts = { fontFamily: 'monospace', fontSize: '1em' }

func({...defaultColors, ...defaultFonts}) // => [ { color: 'black' background: 'white', fontFamily: 'monospace', fontSize: '1em' } ]

const overwriteColors = {color: 'red'}
func({...defaultColors, ...overwriteColors}) // => [ { color: 'red', background: 'white' } ]
```

Sources:
- https://repl.it/@metamn/Spread
- https://github.com/metagrover/ES6-for-humans#4-spread--rest-operator


### Destructuring

1. Any array, object can be destructured to it's components.
2. This makes writing and reading code easier.
3. Nested constructs can be destructured.
4. When destructuring an alias can be defined for long component names.

```Javascript
const theme = {
  colors: {
    background: 'white',
    text: 'black'
  },
  fonts: {
    family: 'monospace',
    size: '1em'
  }
}

// Destructuring makes code clear
const {colors, fonts} = theme
console.log(colors) // => { background: 'white', text: 'black' }
console.log(fonts) // => { family: 'monospace', size: '1em' }

// Nested destructuring
const {text} = theme
console.log(text) // => undefined

const {background} = theme.colors
console.log(background) // => white

const {fonts:{family}} = theme
console.log(family) // => monospace

// Destructuring with alias
const {fonts:{size: s}} = theme
console.log(s) // => 1em
```

Sources:
- https://repl.it/@metamn/Destructuring
- https://javascript.info/destructuring-assignment


### Classes

1. Pass arguments with `({...args})`

```Javascript
class Component {
  constructor(props) {
    this.props = props
  }

  displayProps() {
    const str = JSON.stringify(this.props)
    console.log(str)
  }
}

const props = {
  theme: 'dark'
}

const c1 = new Component(props)
c1.displayProps() // => {"theme":"dark"}

// const c2 = new Component(...props) // => TypeError: props is not iterable

const c3 = new Component({...props})
c3.displayProps() // => {"theme":"dark"}

//const c4 = new Component([...props]) // => TypeError: props is not iterable
```

Sources:
- https://repl.it/@metamn/Class-with-props


### Modules

1. A module can export default, and/or named exports
2. Default exports are imported naked, named exports are imported wrapped into {}

```Javascript
// theme.js
//

// Named export
export const colors = {
  background: 'white',
  text: 'black',
}

// Named export
export const font = {
  family: 'monospace',
  size: '1em',
}

// Default export
export default function theme() {
  return {...colors, ...font}
}

/*
export default const theme = () => {...colors, ...font}
// => Syntax error: Only expressions, functions or classes are allowed as the `default` export. (20:16)
*/

// App.js
//
import theme, {colors, font} from './theme'
```

Sources:
- https://repl.it/@metamn/Modules
- http://exploringjs.com/es6/ch_modules.html


### Resources

- [Javascript.info, a complete overview and reference recommended by Reactjs.org](https://javascript.info/)
- [ES6 for Humans, a quick overview of the main features of ES6](https://github.com/metagrover/ES6-for-humans)
- [ES6 Overview in 350 Bullet Points, an extended version of ES6 for Humans](https://ponyfoo.com/articles/es6)
- [ES6 and ES7 quick examples](https://medium.freecodecamp.org/here-are-examples-of-everything-new-in-ecmascript-2016-2017-and-2018-d52fa3b5a70e)
