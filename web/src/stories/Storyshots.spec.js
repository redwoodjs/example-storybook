// https://storybook.js.org/addons/@storybook/addon-storyshots
import path from 'path'

import initStoryshots, {
  multiSnapshotWithOptions,
} from '@storybook/addon-storyshots'
import { render } from '@testing-library/react'

/**
 * https://stackoverflow.com/a/55723009
 */
const reactTestingLibrarySerializer = {
  print: (val, serialize) => serialize(val.container.firstChild),
  test: (val) => val && Object.prototype.hasOwnProperty.call(val, 'container'),
}

initStoryshots({
  framework: 'react',
  configPath: path.resolve(
    __dirname,
    '../../../node_modules/@redwoodjs/testing/config/storybook'
  ),
  test: (story) => {
    // FIXME Workaround for https://github.com/storybookjs/storybook/issues/16692
    const fileName = path.resolve(
      __dirname,
      '../../../',
      story.context.fileName
    )
    return multiSnapshotWithOptions({
      renderer: render,
      snapshotSerializers: [reactTestingLibrarySerializer],
    })({
      ...story,
      context: { ...story.context, fileName },
    })
  },
})
