import styled, { css } from 'styled-components'
import { onActive, onFocus, onHover, transition } from '../../styles/mixins'
import { TColorTypes } from '../../styles/styled'
import { placeholder } from '../../styles/placeholders'

interface ILinkProps {
  as?: string
  type?: 'text' | 'icon'
  color?: keyof TColorTypes
}

export const Link = styled.a<ILinkProps>`
  ${({ theme: t, type, color, as }) => css`
    ${as === 'button' && placeholder('resetBtn')};
    color: ${t.color.types[color ?? 'warning'].normal};

    ${onHover`color: ${t.color.types[color ?? 'warning'].darken};`}
    ${onFocus`color: ${t.color.types[color ?? 'warning'].darken};`}
    ${onActive`color: ${t.color.types[color ?? 'warning'].darken};`}
    ${transition(t.transitionDurationMs.long, ['color'])}

    ${(type === 'text' || !type) && css`text-shadow: 1px 1px 0 #000;`}

    ${type === 'icon' && css`
      display: inline-block;

      ${transition(t.transitionDurationMs.long, ['transform'])}
      ${onFocus`transform: scale(0.95);`}
      ${onActive`transform: scale(0.95);`}
    `}
  `}
`