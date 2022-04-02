//@ts-check
import ResetPasswordPage from './ResetPasswordPage'

export default {
  title: 'Pages/ResetPasswordPage',
  component: ResetPasswordPage,
  parameters: {
    layout: 'fullscreen',
  },
}
const Template = (args) => <ResetPasswordPage {...args} />

export const generated = Template.bind({})
