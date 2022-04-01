//@ts-check
import NotFoundPage from './NotFoundPage'

export default {
  title: 'Pages/NotFoundPage',
  component: NotFoundPage,
  parameters: {
    layout: 'fullscreen',
  },
}
const Template = (args) => <NotFoundPage {...args} />

export const generated = Template.bind({})
