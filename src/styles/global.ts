import { createGlobalStyle, css } from 'styled-components'
import * as SP from './placeholders'
import 'normalize.css'
import './fonts.css'

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *::before,
  *::after {
    box-sizing: inherit;
  }

  img, svg {
    max-width: 100%;
    height: auto;
    max-height: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3, h4, h5, p {
    ${SP.placeholder('resetMP')}
  }

  button {
    cursor: pointer;
  }

  body {
    //  todo убрать
    padding-bottom: 100px;
    min-width: 320px;
    font-size: 14px;
    ${({ theme }) => css`
      font-family: ${theme.fonts.primary};
      color: ${theme.color.text};
      background-color: ${theme.color.background};
    `}
  }

  .visually-hidden {
    position: absolute;
    margin: -1px;
    padding: 0;
    border: 0;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
  }
`

export default GlobalStyles