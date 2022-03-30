import { create } from '@storybook/theming'

export default create({
  base: 'light',
  colorPrimary: '#bf4722',
  colorSecondary: '#341309',
  barSelectedColor: '#faeae5',
  textColor: '#682712',
  appBg: '#faeae5',
  barBg: '#bf4722',
  barTextColor: '#f3c7ba',
  appContentBg: '#faeae5',
  textMutedColor: '#341309',
  appBorderColor: '#faeae5',
  textInverseColor: '#faeae5',
  fontBase:
    'Open Sans,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif',
  brandTitle: 'RedwoodJS',
  brandUrl: 'https://redwoodjs.com/',
  appBorderRadius: 16,
  brandImage: './diecut.svg',
})
