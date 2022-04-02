//@ts-check
import FatalErrorPage from './FatalErrorPage'

export default {
  title: 'Pages/FatalErrorPage',
  component: FatalErrorPage,
  parameters: {
    layout: 'fullscreen',
  },
}
const Template = (args) => <FatalErrorPage {...args} />

export const generated = Template.bind({})
