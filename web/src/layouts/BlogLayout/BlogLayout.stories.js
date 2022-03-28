//@ts-check
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import BlogLayout from './BlogLayout'

export const generated = () => {
  return (
    <BlogLayout>
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
  const homeLink = await canvas.findByRole('link', { name: 'Contact' })
  expect(homeLink).toHaveTextContent('Contact')
}

export default { title: 'Layouts/BlogLayout' }
