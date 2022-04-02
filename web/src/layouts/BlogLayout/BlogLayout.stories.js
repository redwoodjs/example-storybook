//@ts-check
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import BlogLayout from './BlogLayout'

export const generated = (args) => {
  return (
    <BlogLayout {...args}>
      <></>
    </BlogLayout>
  )
}

generated.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const heading = await canvas.findByRole('heading')
  expect(heading).toHaveTextContent('Redwood Blog')
  const aboutLink = await canvas.findByRole('link', { name: 'About' })
  expect(aboutLink).toHaveTextContent('About')
}

export default {
  title: 'Layouts/BlogLayout',
  parameters: {
    layout: 'fullscreen',
  },
}
