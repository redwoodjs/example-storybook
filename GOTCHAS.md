# GOTCHAS

Miscellaneous notes on potential issues and possible workarounds.

---

If Prisma errors, make sure there are not duplicate clients. Various version combinations of `yarn`/`prisma`/`redwoodjs` have been known to cause issues.

- https://github.com/prisma/prisma/issues/9553
- https://github.com/redwoodjs/redwood/issues/4605

**CORRECT**

`node_modules/.prisma`

**WRONG**

`api/node_modules/.prisma`

---

## TODO

- [ ] Look into Jest tests not picking up transitive dependencies, e.g. ArticleCell -> Article -> CommentForm when using "only changed" mode.
