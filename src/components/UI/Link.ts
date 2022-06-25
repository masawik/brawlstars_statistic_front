import styled, { css } from 'styled-components'
import { onActive, onFocus, onHover, transition } from '../../styles/mixins'
import { TColorTypes } from '../../styles/styled'
import { placeholder } from '../../styles/placeholders'
import React from 'react'
import { To } from 'react-router-dom'

export interface ILinkProps {
  as?: string | React.ReactNode | unknown
  linkType?: 'text' | 'icon'
  color?: keyof TColorTypes
  to?: To
}

export const Link = styled.a<ILinkProps>`
  ${({ theme: t, linkType, color, as }) => css`
    ${as === 'button' && placeholder('resetBtn')};
    color: ${t.color.types[color ?? 'warning'].normal};

    ${onHover`color: ${t.color.types[color ?? 'warning'].darken};`}
    ${onFocus`color: ${t.color.types[color ?? 'warning'].darken};`}
    ${onActive`color: ${t.color.types[color ?? 'warning'].darken};`}
    ${transition(t.transitionDurationMs.long, ['color'])}

    ${(linkType === 'text' || !linkType) && css`text-shadow: 1px 1px 0 #000;`}

    ${linkType === 'icon' && css`
      display: inline-block;

      ${transition(t.transitionDurationMs.long, ['transform'])}
      ${onFocus`transform: scale(0.95);`}
      ${onActive`transform: scale(0.95);`}
    `}
  `}
`