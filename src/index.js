// @flow

import * as React from 'react'
import renderProps from '@macklinu/render-props'

const DefaultStringify = (string: string) => <pre>{string}</pre>

export type Props = {
  value: any,
  replacer?: (
    key: string,
    value: string
  ) => any | Array<number | string> | null,
  space?: number | string,
  component?: React.ComponentType<any>,
  render?: (string: string) => React.Node | React.ComponentType<any>,
  children?: (string: string) => React.Node | React.ComponentType<any>,
}

export default function Stringify(props: Props) {
  const {
    value,
    replacer = null,
    space = 2,
    component,
    children,
    render,
  } = props
  if (value === undefined) {
    return null
  }

  const propsToRender =
    component || children || render
      ? // Pass through render props, if any are defined.
        { component, children, render }
      : // Default to DefaultStringify render function if none are provided.
        { children: DefaultStringify }

  return renderProps(propsToRender, JSON.stringify(value, replacer, space))
}
