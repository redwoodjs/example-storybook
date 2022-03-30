import Article from './Article'
import { standard } from './Article.mock'

/** @type { import("@storybook/react").Meta } */
export default {
  title: 'Components/Article',
  args: {
    summary: true,
  },
}

export const full = () => {
  return <Article {...standard()} />
}

export const summary = ({ summary = true }) => {
  return <Article article={standard().article} summary={summary} />
}
