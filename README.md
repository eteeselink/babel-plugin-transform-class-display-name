# babel-plugin-transform-class-display-name

Add a displayName static class property to all ES6 classes. This is useful if you use ES6 React components
and want their name on runtime, but also want to use a minifier that renames functions (such as constructors).

Will only work if you also use `babel-plugin-syntax-class-properties` and `babel-plugin-transform-class-properties`.

## Installation

```sh
$ npm install --save-dev babel-plugin-transform-class-display-name
```

## Usage

### Via `.babelrc`

**.babelrc**

```json
{
  "plugins": ["transform-class-display-name"]
}
```

Make sure your plugin is early in the list.
