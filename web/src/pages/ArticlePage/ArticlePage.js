import { MetaTags } from '@redwoodjs/web'

import ArticleCell from '../../../../design-system/src/components/ArticleCell'

const ArticlePage = ({ id }) => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />

      <ArticleCell id={id} />
    </>
  )
}

export default ArticlePage
