# Project Commit Standards

There are many ways to handle committing. We uses [Conventional Commits](https://www.conventionalcommits.org/) for its commit standards.

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD",
"SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be
interpreted as described in [RFC 2119](http://www.ietf.org/rfc/rfc2119.txt).

## Commits

A commit SHOULD be a specific set of related changes. Commits MUST be able to be reverted without causing side effects.

### Subject

The subject contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to
reference Jira and GitHub issues that this commit **Closes**.

## Type Reference

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: deps, deps-dev)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Jenkins, Circle, BrowserStack, SauceLabs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests
- **revert**: Revert a commit

## Examples

- `docs: document developing locally in docker`
- `feat: add WebAuthn support`
- `feat: add post about useful tips for developers`
- `refactor: cleanup exception handling`
- `fix: typo`
- `fix: missing null safety check`
- `fix: invalid catch block`
- `build(deps): update dependencies`
- `ci: use clean Jenkinsfile`
- `style: fixed`
- `style: add custom rule for line length`

For more examples, see [AngularJS](https://github.com/angular/angular/commits/master)'s Github Repo

## Pull Requests

### Title

You MUST put the issue prefix in the pull request title (e.g. `[PROJ-1234] feat: add cart items to customer session.`) if one exists. Otherwise, follow the rules for commits.

### Branch History

You MAY NOT squash changes in a PR for internal projects. DO NOT squash changes for our open source projects unless asked to do so. Squashing removes our ability to see what has been changed during a PR.

You also MAY NOT, unless otherwise specified, amend a commit and force push it once a PR has been opened.

### Prefix Reference

- [ISSUE] - Issue related to the commit (e.g. `[PROJ-1234] feat: add cart items to customer session.`)

### Labels

It is RECOMMENDED to use the labels in the PR to help identify the general changes that this pull request will affect in the repository.

| Label                          | Description                                                                                 | Color                                                             |
| :----------------------------- | :------------------------------------------------------------------------------------------ | :---------------------------------------------------------------- |
| approved                       | Indicates a PR has been approved by an approver from all required OWNERS files.             | ![#0ffa16](https://placehold.it/15/0ffa16/000000?text=+) `0ffa16` |
| do-not-merge/blocked           | Indicates that a PR should not merge because it is blocked by another request.              | ![#e11d21](https://placehold.it/15/e11d21/000000?text=+) `e11d21` |
| do-not-merge/work-in-progress  | Indicates that a PR should not merge because it is a work in progress.                      | ![#e11d21](https://placehold.it/15/e11d21/000000?text=+) `e11d21` |
| bug                            | Categorizes PR as related to a bug.                                                         | ![#e11d21](https://placehold.it/15/e11d21/000000?text=+) `e11d21` |
| triage/duplicate               | Indicates a PR is a duplicate of other open PR.                                             | ![#d455d0](https://placehold.it/15/d455d0/000000?text=+) `d455d0` |
| question                       | Indicates a issue that is a support question.                                               | ![#d455d0](https://placehold.it/15/d455d0/000000?text=+) `d455d0` |
| slow migration                 | Indicates a PR includes a migration that is slow.                                           | ![#d9534a](https://placehold.it/15/d9534a/000000?text=+) `d9534a` |
| dependencies                   | PR has changes in project dependencies                                                      | ![#0025ff](https://placehold.it/15/0025ff/000000?text=+) `0025ff` |
| docker                         | -                                                                                           | ![#21ceff](https://placehold.it/15/21ceff/000000?text=+) `21ceff` |
| javascript                     | -                                                                                           | ![#168700](https://placehold.it/15/168700/000000?text=+) `168700` |
| php                            | -                                                                                           | ![#45229e](https://placehold.it/15/45229e/000000?text=+) `45229e` |
| ruby                           | -                                                                                           | ![#ce2d2d](https://placehold.it/15/ce2d2d/000000?text=+) `ce2d2d` |
| security                       | Indicates that PR impact security project                                                   | ![#ee0701](https://placehold.it/15/ee0701/000000?text=+) `ee0701` |
| stale                          | Denotes an PR has remained open with no activity and has become stale.                      | ![#ffffff](https://placehold.it/15/ffffff/000000?text=+) `ffffff` |
| PR: merged                     | PR is merged                                                                                | ![#6f42c1](https://placehold.it/15/6f42c1/000000?text=+) `6f42c1` |
| PR: reviewed-approved          | DEPRECATED: Indicates a PR has been approved by an approver from all required OWNERS files. | ![#0e8a16](https://placehold.it/15/0e8a16/000000?text=+) `0e8a16` |
| PR: reviewed-changes-requested | DEPRECATED: Changes were requested in the PR                                                | ![#c2e0c6](https://placehold.it/15/c2e0c6/000000?text=+) `c2e0c6` |
| PR: reviewed-comments          | DEPRECATED: PR contains reviewers' comments                                                 | ![#dee57e](https://placehold.it/15/c2e0c6/000000?text=+) `dee57e` |
| PR: unreviewed                 | DEPRECATED: PR needs review                                                                 | ![#fbca04](https://placehold.it/15/fbca04/000000?text=+) `fbca04` |

The following labels are available to block merging of a PR:

- DEPRECATED: `do-not-merge/blocked` - Used to block merging a PR due to misc. circumstances.
- DEPRECATED: `do-not-merge/work-in-progress` - Used to block a PR that is still being actively worked on.
- Draft Mode - Used to block merging a PR (in both case, `do-not-merge/work-in-progress` or `do-not-merge/blocked` due to misc/dependency).
