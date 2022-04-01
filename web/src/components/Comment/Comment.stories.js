import Comment from './Comment'
import { standard } from './Comment.mock'

export const generated = (args) => {
  return <Comment {...args} {...standard()} />
}

export default { title: 'Components/Comment' }
