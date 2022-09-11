import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from '../../../../design-system/src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <ArticlesCell />
    </>
  )
}

export default HomePage
