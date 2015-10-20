## Commit Naming Convention

Commit message should start with issue number followed by concise title. First word of title should be present tense
verb beginning with capital letter. No dot at the end is needed.

Example: `#13 Add contributing guidelines`

## Branch Naming Convention

Branch name should start with issue number followed with dash-separated very short title. This enables Waffle to
[automatically move](https://github.com/waffleio/waffle.io/wiki/FAQs#branch-moving) an issue to "In Progress" state.

Example: `#13-add-contributing-guidelines`

## Connecting Pull Requests to Issues

All pull requests should be linked to issues with additional comment in PR description. This enables Waffle to move
them as a single unit to "In Progress" state and assign pull request creator to the referenced issue.

There are two ways of linking:

1. Using GitHub's closing keywords (fixes/closes/resolves) prior to a GitHub issue number in pull request description
automatically closes the issue after merge. Example: `This work closes #13` in PR description.
2. Using Waffle's connect keywords (connect to/connects to/connected to/connects) prior to a GitHub issue number in pull
request description will not close the issue after merge. Example: `This work connects to #13` in PR description.
