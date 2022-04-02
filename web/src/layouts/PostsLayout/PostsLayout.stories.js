//@ts-check
import PostsLayout from './PostsLayout'

export const generated = (args) => {
  return (
    <PostsLayout {...args}>
      <></>
    </PostsLayout>
  )
}

export default {
  title: 'Layouts/PostsLayout',
  parameters: {
    layout: 'fullscreen',
  },
}
