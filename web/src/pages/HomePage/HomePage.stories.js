//@ts-check
import HomePage from './HomePage'

export default {
  title: 'Pages/HomePage',
  component: HomePage,
}
const Template = (args) => <HomePage {...args} />

export const generated = Template.bind({})
