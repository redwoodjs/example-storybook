//@ts-check
import ForgotPasswordPage from './ForgotPasswordPage'

export default {
  title: 'Pages/ForgotPasswordPage',
  component: ForgotPasswordPage,
  parameters: {
    layout: 'fullscreen',
  },
}
const Template = (args) => <ForgotPasswordPage {...args} />

export const generated = Template.bind({})
