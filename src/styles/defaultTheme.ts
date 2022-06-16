import { DefaultTheme } from 'styled-components'

const colors = {
  white: '#fff',
  carnation: '#f86363',
  crimson: '#ef1717',
  cardinal: '#c51a46',
  jazzberryJam: '#a61448',
  blackRose: '#68062d',
  mustard: '#ffe05c',
  lightningYellow: '#ffc11e',
  California: '#fea305',
  flamenco: '#ff7903',
  hotCinnamon: '#dc6315',
  greenYellow: '#c5f724',
  malachite: '#2ddd1d',
  japaneseLaurel: '#019701',
  mountainMeadow: '#159f85',
  mariner: '#2a59db',
  denim: '#0e5fb0',
  biscay: '#1a3866',
  blackPearl: '#081933',
  electricViolet: '#9a3cf2',
  black: '#000',
}

const defaultTheme: DefaultTheme = {
  palette: colors,
  transitionDurationMs: {
    short: 50,
    default: 100,
    long: 300,
    extraLong: 500,
  },
  fonts: {
    primary: '"Neris black", Helvetica, Arial, sans-serif',
    inGame: '"Lilita One", Helvetica, Arial, sans-serif',
    inGameSerif: '"Nougat", Georgia, serif',
  },
  color: {
    background: colors.biscay,
    text: colors.white,
    header: colors.denim,
    types: {
      primary: {
        normal: colors.mariner,
        darken: colors.denim,
      },
      success: {
        normal: colors.malachite,
        darken: colors.japaneseLaurel,
      },
      danger: {
        normal: colors.crimson,
        darken: colors.cardinal,
      },
      warning: {
        normal: colors.lightningYellow,
        darken: colors.flamenco,
      },
    },
  },
}

export { defaultTheme }