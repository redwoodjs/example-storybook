import { addons } from '@storybook/addons'

import RedwoodTheme from './redwood.storybook.theme'

const theme = RedwoodTheme
addons.setConfig({
  theme,
})

export { theme }
