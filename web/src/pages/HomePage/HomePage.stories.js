//@ts-check
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import HomePage from './HomePage'

export default {
  title: 'Pages/HomePage',
  component: HomePage,
}
const Template = (args) => <HomePage {...args} />

export const generated = Template.bind({})

generated.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const heading = await canvas.findAllByRole('heading')
  expect(heading).toHaveLength(3)
}
