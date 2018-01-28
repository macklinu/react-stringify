# react-stringify

> A `JSON.stringify()` React component utility

[![npm](https://img.shields.io/npm/v/react-stringify.svg)](https://npm.im/react-stringify)
[![Build Status](https://travis-ci.org/macklinu/react-stringify.svg?branch=master)](https://travis-ci.org/macklinu/react-stringify)
[![license](https://img.shields.io/github/license/macklinu/react-stringify.svg)](https://github.com/macklinu/react-stringify/blob/master/LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->

<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

* [Motivation](#motivation)
* [Installation](#installation)
* [Usage](#usage)
* [Examples](#examples)
* [API Reference](#api-reference)
  * [`Stringify`](#stringify)
* [Contributors](#contributors)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Motivation

When debugging or building examples for React component libraries, I often want to use a component to calls [`JSON.stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) on the React props object, so I can display that object in the browser.

## Installation

```
npm install react-stringify
```

## Usage

Basic usage is as follows:

```js
import React from 'react'
import ReactDOM from 'react-dom'
import Stringify from 'react-stringify'

const Example = props => <Stringify value={props} />

ReactDOM.render(<Example a={1} b={2} c={3} />, document.getElementById('app'))

// =>
//
// <pre>{
//   "a": 1,
//   "b": 2,
//   "c": 3
// }</pre>
```

As seen in the previous example, `Stringify` will stringify the `value` prop. If you don't pass it one, or `value` is undefined, it will return `null` (in other words, render nothing).

`Stringify` supports a `space` prop. The default is two spaces, but you could use tabs (`'\t'`) or something like this if you're feeling wild:

```js
<Stringify value={{ foo: 'foo', bar: 'bar' }} space="💩" />

// =>
//
// <pre>{
// 💩💩"foo": "foo",
// 💩💩"bar": "bar"
// }</pre>
```

By default, `JSON.stringify()` ignores functions. If you would like to stringify your object with functions, try the following `replacer` prop:

```js
<Stringify
  value={{ foo: () => 'foo', bar: 'bar' }}
  replacer={(key, value) => {
    return typeof value === 'function' ? '[Function]' : value
  }}
/>

// =>
//
// <pre>{
//   "foo": "[Function]",
//   "bar": "bar"
// }</pre>
```

`Stringify` renders the output of `JSON.stringify()` in `<pre>` tag by default, but you can override this by supplying any of the following render props: `component`, `render`, or `children`. See the following example and/or the [`@macklinu/render-props`](https://github.com/macklinu/render-props) README for more information.

```js
<Stringify
  value={{ a: 1, b: 2, c: 3 }}
  render={string => {
    return (
      <div>
        <span>My Custom Render Function</span>
        <pre>{string}</pre>
      </div>
    )
  }}
/>

// =>
//
// <div>
//   <span>My Custom Render Function</span>
//   <pre>{
//     "foo": "foo",
//     "bar": "bar"
//   }</pre>
// </div>
```

## Examples

See [this CodeSandbox](https://codesandbox.io/s/v6104mmnyl) for an in-browser example.

## API Reference

### `Stringify`

This component accepts the following props, which are simply passed through to [`JSON.stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify):

* `value`
* `replacer`
* `space`

The [MDN `JSON.stringify()` parameter documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) explains what valid parameters types are and their default values.

The `Stringify` component also accepts the following render props:

* `component`
* `render`
* `children`

See the [`@macklinu/render-props`](https://github.com/macklinu/render-props#api-reference) README documentation for more information.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- prettier-ignore -->
| [<img src="https://avatars1.githubusercontent.com/u/2344137?v=4" width="100px;"/><br /><sub><b>Macklin Underdown</b></sub>](http://macklin.underdown.me)<br />[💻](https://github.com/macklinu/react-stringify/commits?author=macklinu "Code") [⚠️](https://github.com/macklinu/react-stringify/commits?author=macklinu "Tests") [📖](https://github.com/macklinu/react-stringify/commits?author=macklinu "Documentation") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
