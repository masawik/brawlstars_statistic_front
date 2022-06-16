import styled, { css } from 'styled-components'
import { onActive, onFocus, onHover, transition } from '../../styles/mixins'

interface ILinkProps {
  type?: 'text' | 'icon'
}

export const Link = styled.a<ILinkProps>`
  ${({ theme: t, type }) => css`
    color: ${t.color.types.warning.normal};

    ${onHover`color: ${t.color.types.warning.darken};`}
    ${onFocus`color: ${t.color.types.warning.darken};`}
    ${onActive`color: ${t.color.types.warning.darken};`}
    ${transition(t.transitionDurationMs.default, ['color'])}

    ${(type === 'text' || !type) && css`text-shadow: 1px 1px 0 #000;`}

    ${type === 'icon' && css`
      display: inline-block;

      ${transition(t.transitionDurationMs.default, ['transform'])}
      ${onFocus`transform: scale(0.95);`}
      ${onActive`transform: scale(0.95);`}
    `}
  `}
`