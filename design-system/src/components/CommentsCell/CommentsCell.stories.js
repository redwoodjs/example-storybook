import { Loading, Empty, Failure, Success } from './CommentsCell'
import { standard } from './CommentsCell.mock'

export const loading = (args) => {
  return Loading ? <Loading {...args} /> : null
}

export const empty = (args) => {
  return Empty ? <Empty {...args} /> : null
}

export const failure = (args) => {
  return Failure ? <Failure {...args} error={new Error('Oh no')} /> : null
}

export const success = (args) => {
  return Success ? <Success {...args} {...standard()} /> : null
}

export default { title: 'Cells/CommentsCell' }
