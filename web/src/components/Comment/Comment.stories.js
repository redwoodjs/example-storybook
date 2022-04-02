import Comment from './Comment'
import { standard } from './Comment.mock'
import { mockCurrentUser } from '@redwoodjs/testing/web'

export const defaultView = (args) => {
  return <Comment {...args} {...standard()} />
}

export const moderatorView = (args) => {
  mockCurrentUser({
    roles: 'moderator',
  })

  return <Comment {...args} {...standard()} />
}

export default { title: 'Components/Comment' }
