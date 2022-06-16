import { addDecorator } from '@storybook/react'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import { defaultTheme } from '../src/styles/defaultTheme'
import GlobalStyles from '../src/styles/global'


export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator((story) => (
  <>
    <GlobalStyles />
    {story()}
  </>
))
addDecorator(withThemesProvider([defaultTheme]))