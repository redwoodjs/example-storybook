//@ts-check
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import AboutPage from './AboutPage'

export const generated = () => {
  return <AboutPage />
}

generated.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const paragraph = await canvas.findByTestId('about-paragraph')
  expect(paragraph).toHaveTextContent(
    'Look on my works, ye mighty, and despair!'
  )
}

export default { title: 'Pages/AboutPage' }
