# v24-geckos-team-03
Add-project-description-here | Voyage-24 | https://chingu.io/

## Deployment
The development branch deploys [here](https://chingu-voyages.github.io/v24-geckos-team-03/)

## Making Changs to the Codebase
### How to Contribute
1. Create a branch for your feature (see [below](#feature-branch-example) for an example)
2. Add your code
3. Create a Pull Request

### Git Branches
Below you can find an overview of the branches we are using.

```
- master: (current production release that is seen by live users - updated through PRs)
- dev: (code for the next release - updated through PRs)
- feature or bug (working branches)
-- feature/#<Issue Number>_<little feature title>
-- feature/#<Issue Number>_<little feature title>
-- bug/#<Issue Number>_<little feature title>
```

**master**: Only updated from the development branch Pull Requests. This branch always reflects the current production release that is seen by live users.

**dev**: Reflects the code for the next release. Developers work in working branches, which are then pulled into this branch. All code pulled into this branch must be tested and undergo peer review as part of the PR process.

**feature/bug**: Individual branches created by each developer when they are working on changes and bug fixes. Format feature/#<Issue Number>_<little feature title>

### Feature Branch Example

An example for a ToDo list feature could look as following:

```
-- feature/#1_todo-list
```

## Commit Messages & Pull Requests

For consistency and easier readability, we would like to ask everyone to use the templates for Pull Requests and Issues that we provide.
They follow this pattern:

```
<subject> (A title to summarise what this is about)

<body> (A description of your PR, feature idea or issue)

Resolves #ISSUE_NUMBER
```

Note: It is important to add the #number for the issue the PR is resolving in order to close the issue accordingly once the PR gets merged. You can read more about this [here](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)
