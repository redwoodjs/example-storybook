//@ts-check
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'

import HomePage from './HomePage'

export default {
  title: 'Pages/HomePage',
  component: HomePage,
}
const Template = (args) => <HomePage {...args} />

export const generated = Template.bind({})

generated.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const heading = await canvas.findAllByRole('heading', { level: 2 })
  expect(heading).toHaveLength(2)
}
