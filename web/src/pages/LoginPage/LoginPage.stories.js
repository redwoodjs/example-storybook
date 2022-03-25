//@ts-check
import LoginPage from './LoginPage'

export default {
  title: 'Pages/LoginPage',
  component: LoginPage,
}
const Template = (args) => <LoginPage {...args} />

export const generated = Template.bind({})
