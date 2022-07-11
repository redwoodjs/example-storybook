import { mockGraphQLMutation } from '@redwoodjs/testing/web'

import Article from './Article'
import { standard } from './Article.mock'

/** @type { import("@storybook/react").Meta } */
export default {
  title: 'Components/Article',
}

export const full = (args) => {
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
  return <Article {...standard()} {...args} />
}

export const summary = ({ summary = true }) => {
  return <Article article={standard().article} summary={summary} />
}
