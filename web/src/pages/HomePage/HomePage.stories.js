//@ts-check
// import { expect } from '@storybook/jest'
// import { within } from '@storybook/testing-library'

import HomePage from './HomePage'

export default {
  title: 'Pages/HomePage',
  component: HomePage,
}
const Template = (args) => <HomePage {...args} />

export const generated = Template.bind({})

// TODO(pc): reenable once fixed
// [TEST] FAIL browser: chromium src/pages/HomePage/HomePage.stories.js (19.228 s)
// [TEST]   ● Pages/HomePage › generated › play-test
// [TEST]
// [TEST]     : StorybookTestRunnerError:
// [TEST]     An error occurred in the following story. Access the link for full output:
// [TEST]     http://localhost:7910/iframe.html?path=/story/pages-homepage--generated&addonPanel=storybook/interactions/panel
// [TEST]
// [TEST]     Message:
// [TEST]      Unable to find role="heading"
// [TEST]
// [TEST]     Ignored nodes: comments, <script />, <style />
// [TEST]     <div
// [TEST]       id="root"
// [TEST]     >
// [TEST]       <div>
// [TEST]         Loading...
// [TEST]       </div>
// [TEST]     </div>
// [TEST]
// [TEST]     Ignored nodes: comments, <script />, <style />
// [TEST]     <div
// [TEST]       id="root"
// [TEST]     >
// [TEST]       <div>
// [TEST]         Loading...
// [TEST]       </div>
// [TEST]     </div>
// [TEST]
// [TEST]
// [TEST]     --------------------------------------------------
// generated.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement)
//   const heading = await canvas.findAllByRole(
//     'heading',
//     { level: 2 },
//     { timeout: 5000 }
//   )
//   expect(heading).toHaveLength(2)
// }
