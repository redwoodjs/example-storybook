import Article from './Article'
import { standard } from './Article.mock'

/** @type { import("@storybook/react").Meta } */
export default {
  title: 'Components/Article',
}

export const full = (args) => {
  return <Article {...standard()} {...args} />
}

export const summary = ({ summary = true }) => {
  return <Article article={standard().article} summary={summary} />
}
