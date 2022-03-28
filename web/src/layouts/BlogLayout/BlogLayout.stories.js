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
  const homeLink = await canvas.findByRole('link', { name: 'Home' })
  expect(homeLink).toHaveTextContent('Home')
  const aboutLink = await canvas.findByRole('link', { name: 'About' })
  expect(aboutLink).toHaveTextContent('About')
}

export default { title: 'Layouts/BlogLayout' }
