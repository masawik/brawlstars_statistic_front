import { css } from 'styled-components'

const placeHolders = {
  resetMP: 'margin: 0; padding: 0;',
  resetBtn: 'margin: 0; padding: 0; border: none; background-color: transparent;',
  resetList: 'margin: 0; padding: 0; list-style: none;',
  resetTextInput: 'border: none; background-color: transparent;',
}

export const placeholder = (type: keyof typeof placeHolders) =>
  css`${placeHolders[type]}`