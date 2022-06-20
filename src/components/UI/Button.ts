import styled, { css } from 'styled-components'
import { onActive, onFocus, transition } from '../../styles/mixins'
import { TColorTypes } from '../../styles/styled'
import { placeholder } from '../../styles/placeholders'
import { To } from 'react-router-dom'

const buttonSkew = 7 //deg

interface IButtonProps {
  as?: string
  color?: keyof TColorTypes
  to?: To
}

export const Button = styled.button<IButtonProps>`
  ${placeholder('resetBtn')}

  position: relative;
  padding: 5px 10px;
  z-index: 1;
  color: #fff;
  display: inline-block;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 1px solid #000;
    border-radius: 2px;
    z-index: -1;
    box-shadow: 1px 2px 0 0 rgb(0 0 0 / 80%),
    inset 0 -3px 0 0 rgb(0 0 0 / 25%),
    inset 0 3px 0 0 rgb(255 255 255 / 20%);
    transform: skewX(${buttonSkew * -1}deg);
    content: '';


    ${({ theme: t, color }) => css`
      background-color: ${t.color.types[color ?? 'primary'].normal};

      ${transition(
              t.transitionDurationMs.default,
              ['background-color', 'box-shadow']
      )}
    `}
  }

  ${({ theme: t, color }) => css`
    ${transition(t.transitionDurationMs.default, ['transform'])}

    ${onFocus`
    transform: scale(0.98);
    &::after {
      background-color: ${t.color.types[color ?? 'primary'].darken};
    }
  `}

    ${onActive`
    transform: scale(0.98);
    &::after {
      background-color: ${t.color.types[color ?? 'primary'].darken};
      box-shadow: 1px 2px 0 0 rgb(0 0 0 / 80%), inset 0 1px 0 0 rgb(0 0 0 / 25%);
    }
  `}
  `}
`
