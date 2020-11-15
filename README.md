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

**feature/bug**: Individual branches created by each developer when they are working on changes and bug fixes. Format feature/#<Issue Number>\_<little feature title>

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

Getting Started with Create React App

This project was bootstrapped with Create React App.

Available Scripts

In the project directory, you can run:

npm start

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

npm test

Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject

Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

Learn More

You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

npm run build fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
