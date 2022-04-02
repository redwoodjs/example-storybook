import { within, userEvent } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import CommentForm from './CommentForm'

export const generated = (args) => {
  mockGraphQLMutation('CreateCommentMutation', (variables, { ctx }) => {
    const id = parseInt(Math.random() * 1000)
    ctx.delay(1000)

    return {
      createComment: {
        id,
        name: variables.input.name,
        body: variables.input.body,
        createdAt: new Date().toISOString(),
      },
    }
  })

  return <CommentForm {...args} />
}
generated.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  userEvent.type(await canvas.findByTestId('name'), 'comment name')
  userEvent.type(await canvas.findByTestId('body'), 'comment body')
  expect(canvas.getByDisplayValue('comment name')).toBeInTheDocument()
  expect(canvas.getByDisplayValue('comment body')).toBeInTheDocument()
  userEvent.click(canvas.getByTestId('submit'))
}

export default { title: 'Components/CommentForm' }
