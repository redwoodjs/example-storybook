# example-storybook -- A Redwood-based set of Storybook examples

<span><img src="https://avatars2.githubusercontent.com/u/45050444?v=4" width="10" />
🌲✨📖 _A forest full of stories_ 📖✨🌲<img src="https://avatars2.githubusercontent.com/u/45050444?v=4" width="10" /></span>
## Description

Example application written using Redwood that leverages Redwood's [Storybook integration](https://redwoodjs.com/docs/storybook.html#storybook) to highlight Redwood's rich feature set. This includes features such as [Layout](https://learn.redwoodjs.com/docs/tutorial/layouts/), and [Cells](https://redwoodjs.com/docs/cells).

## Getting Started
### System Requirements

> RedwoodJS requires Node.js (>=14.x <=16.x) and Yarn (>=1.15).

Source: https://redwoodjs.com/docs/quick-start

### Developer Experience

Below is a script to help get you started. Each step is documented in more detail. 

```sh
git clone https://github.com/redwoodjs/example-storybook.git `# clone the repository from GitHub` \
  && cd "$(basename "$_" .git)" `# change directories into the newly cloned repository` \
  && yarn install `# install dependencies` \
  && yarn redwood storybook `# start Redwood's storybook server`
```

_note:_ That should have brought up the browser automatically. If not, by default storybook is running at http://localhost:7910/

## File Structure

Redwood's tutorial has a brief overview of the [file structure](https://learn.redwoodjs.com/docs/tutorial/redwood-file-structure) to help get you oriented.

If you happen to be unfamiliar with the structure, don't worry about trying to memorize it right now. We'll touch upon many of these files and directories as we go.

### Examples

This repositories contains example stories for `cells`, `pages`, `layouts`, and `components`

- `cells` are a declarative approach to data fetching.
- `components` contain your traditional React components as well as Redwood Cells.
- `layouts` contain HTML/components that wrap your content and are shared across Pages.
- `pages` contain components and are optionally wrapped inside Layouts that can be thought of as the "landing page" for a given URL (e.g. a URL like `/articles/hello-world` will map to one page and `/contact-us` will map to another).

## Further Experiments

- [ ] Create a Prisma model
- [ ] Scaffold create read update delete (CRUD) user interface (UI)
- [ ] Run development server (`yarn redwood dev`) to compare dynamic, full-stack site with SB mocks
