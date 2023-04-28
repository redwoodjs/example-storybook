import '../src/scaffold.css'
import '../src/index.css'

// https://github.com/redwoodjs/example-storybook/issues/117#issuecomment-1189636124
// https://gist.github.com/realStandal/b93086e12d687932c13a39ca49e3c3f9
import { theme } from './storybook.manager'

export const globalTypes = {
  layout: {
    name: 'Layout',
    description: 'Toggle the main layout wrapper.',
    defaultValue: 'on',
    toolbar: {
      icon: 'component',
      items: ['off', 'on'],
    },
  },
}

const order = [
  'Example',
  'Pages',
  ['Auth', 'Meta'],
  'Layouts',
  'Cells',
  'Components',
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  //  backgrounds: { disable: true },
  //  layout: 'fullscreen',
  docs: { theme },
  options: { storySort: { order } },
}
