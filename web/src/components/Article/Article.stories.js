import Article from './Article'
import { standard } from './Article.mock'

export const generated = () => {
  return <Article {...standard()} />
}

export default { title: 'Components/Article' }
