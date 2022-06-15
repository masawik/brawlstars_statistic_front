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