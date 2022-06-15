import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: { [key: string]: string },
    transitionDurationMs: {
      short: number,
      default: number,
      long: number,
      extraLong: number
    },
    fonts: {
      primary: string,
      inGame: string,
      inGameSerif: string
    },
    backgroundColor: string,
    textColor: string
  }
}