import {
  css,
  CSSObject, FlattenSimpleInterpolation,
  SimpleInterpolation,
} from 'styled-components'
import { CSSProperties } from 'react'
import { breakPoints } from './breakPoints'

type TStyles = TemplateStringsArray | CSSObject
type TArgs = SimpleInterpolation[]
type TTaggedHelper =
  (style: TStyles, ...args: TArgs) => FlattenSimpleInterpolation


export const onHover: TTaggedHelper = (style, ...args) => css`
  @media (any-hover: hover) {
    &:hover {
      ${css(style, ...args)}
    }
  }
`

export const onFocus: TTaggedHelper = (styles, ...args) => css`
  & {
    outline: none;
  }

  &:focus:not(:hover) {
    ${css(styles, ...args)}
  }
`

export const onActive: TTaggedHelper = (styles, ...args) => css`
  &:active {
    ${css(styles, ...args)}
  }
`

export const transition = (
  durationMs: number,
  properties: Array<string> = ['color'],
  animation: CSSProperties['transitionTimingFunction'] = 'ease'
) => css`
  transition-property: ${properties.join(', ')};
  transition-duration: ${durationMs}ms;
  transition-timing-function: ${animation};
`

export const elementSize = (width: number, height?: number) => css`
  width: ${width}px;
  height: ${height ?? width}px;
`

export const media = (breakPoint: keyof typeof breakPoints): TTaggedHelper =>
  (styles, ...args) => css`
    @media all and (min-width: ${breakPoints[breakPoint]}px) {
      ${css(styles, ...args)}
    }
  `

export const background = (
  repeat: CSSProperties['backgroundRepeat'] = 'no-repeat',
  position: CSSProperties['backgroundPosition'] = 'center center',
  size: CSSProperties['backgroundSize'] = 'cover'
) => css`
  background-repeat: ${repeat};
  background-position: ${position};
  background-size: ${size};
`

export const textOverload = (lineCount: number = 1) => css`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${lineCount};
`