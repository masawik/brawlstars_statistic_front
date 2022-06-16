import 'styled-components'

type TColorType = {
  normal: string,
  darken: string
}

export type TColorTypes = {
  primary: TColorType,
  success: TColorType,
  danger: TColorType,
  warning: TColorType
}

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: { [key: string]: string },
    color: {
      background: string,
      text: string,
      header: string,
      types: TColorTypes
    }
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
  }
}