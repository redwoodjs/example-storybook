import ArticlePage from './ArticlePage'
import { mockGraphQLQuery } from '@redwoodjs/testing/web'
import { standard } from 'src/components/ArticleCell/ArticleCell.mock'

export const generated = (arg) => {
  mockGraphQLQuery('FindArticleQuery', (variables, { ctx }) => {
    console.log({ variables, ctx })
    return standard
  })
  return <ArticlePage {...arg} />
}

export default {
  title: 'Pages/ArticlePage',
  component: ArticlePage,
  args: {
    id: 1,
  },
}
