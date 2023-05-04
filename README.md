# example-storybook -- A Redwood-based set of Storybook examples

[![Netlify Status](https://api.netlify.com/api/v1/badges/84b82eb2-bec3-4324-b01b-4e079b748e6c/deploy-status)](https://app.netlify.com/sites/fascinating-cranachan-7f1f78/deploys)

---

_**🚧this project is currently archived and in maintenance mode🚧**_
if you'd like to help out, please checkout
https://github.com/redwoodjs/redwood/issues/5269 and see if any of the issues there interest you.

---

<span><img src="https://avatars2.githubusercontent.com/u/45050444?v=4" width="10" />
🌲✨📖 _A forest full of stories_ 📖✨🌲<img src="https://avatars2.githubusercontent.com/u/45050444?v=4" width="10" /></span>
## Description

Example application written using Redwood that leverages Redwood's [Storybook integration](https://redwoodjs.com/docs/storybook.html#storybook) to highlight Redwood's rich feature set. This includes features such as [Layout](https://learn.redwoodjs.com/docs/tutorial/layouts/), and [Cells](https://redwoodjs.com/docs/cells).

## Getting Started

To start an ephemeral developer environment and see RedwoodJS in action, click the following button:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/redwoodjs/example-storybook).

If you prefer to set the project up on your local computer, please continue with the following instructions.
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

---

## More "Getting Started" Resources
- [Tutorial](https://redwoodjs.com/tutorial/welcome-to-redwood): getting started and complete overview guide.
- [Docs](https://redwoodjs.com/docs/introduction): using the Redwood Router, handling assets and files, list of command-line tools, and more.
- [Redwood Community](https://community.redwoodjs.com): get help, share tips and tricks, and collaborate on everything about RedwoodJS.

### Useful individual command line snippets

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`.

### Prisma Studio

Redwood comes bundled with [a lightweight wrapper around the Prisma CLI](https://redwoodjs.com/docs/cli-commands#prisma), which includes [Prisma Studio](https://www.prisma.io/studio), a tool for managing your database.

```terminal
yarn rw prisma studio
```

A new browser should open to http://localhost:5555 and now you can view and manipulate data in the database directly!
