import ArticlePage from './ArticlePage'

export const generated = (arg) => {
  return <ArticlePage {...arg} />
}

export default {
  title: 'Pages/ArticlePage',
  component: ArticlePage,
  args: {
    id: 1,
  },
}
