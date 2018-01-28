// @flow

import React from 'react'
import { create } from 'react-test-renderer'
import Stringify from '.'
import type { Props } from '.'

const exampleValue = {
  a: 1,
  b: 2,
  nested: {
    c: 3,
    d: 4,
  },
}

test('returns null if undefined value passed in', () => {
  expect(renderStringify()).toBeNull()
})
test('honors falsy values besides undefined', () => {
  expect(renderStringify({ value: null })).toMatchSnapshot()
  expect(renderStringify({ value: 0 })).toMatchSnapshot()
  expect(renderStringify({ value: false })).toMatchSnapshot()
  expect(renderStringify({ value: '' })).toMatchSnapshot()
})

test('renders array values', () => {
  expect(renderStringify({ value: [1, 2, 3] })).toMatchSnapshot()
})

test('ignores functions in object by default', () => {
  expect(
    renderStringify({
      value: {
        foo: () => 'foo',
        bar: 'bar',
      },
    })
  ).toMatchSnapshot()
})

test('uses default render function if none passed', () => {
  expect(renderStringify({ value: exampleValue })).toMatchSnapshot()
})

test('honors space prop', () => {
  expect(
    renderStringify({ value: exampleValue, space: '\t' })
  ).toMatchSnapshot()
})

test('honors replacer prop', () => {
  expect(
    renderStringify({
      value: exampleValue,
      replacer(key, value) {
        if (key === 'nested') {
          return
        }
        return value
      },
    })
  ).toMatchSnapshot()
})

test('honors render prop API', () => {
  expect(
    renderStringify({
      value: exampleValue,
      children(string) {
        return <div>{string}</div>
      },
    })
  ).toMatchSnapshot()
})

function renderStringify(props?: Props = { value: undefined }) {
  return create(<Stringify {...props} />).toJSON()
}
