# Boba Love

## To Begin

Clone the repository to your local machine.

## Available Scripts

In the project directory, you can run:

### `npm install`

To install the node modules, that are required before running your react app.

### `npm start`

To run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Working with Your Repository with GitHub Project

### Preparation (Linking Issues to Todo in GitHub Project)

After linking your repository to the GitHub project,\
you can create issues in your repository and it will automatically link to the GitHub project as a todo task in the to do column.

### Doing the Task

Before starting, make sure you get the updated main branch from the repository.

`git pull`

To begin each task, simply drag them out of the To do column and into the In Progress column. Then create new branch from the main to work on that task specifically, so you can start off with a copy of main branch.


To create a new branch from your current branch and switch to it: 
`git checkout -b <new branch name>` 

To switch to an existing branch: 
`git checkout <existing branch name>`

Show all branch:
`git branch -a `

To delete an existing branch:
`git branch -d <branch name>`

For each commit you make for that task, you can link it to the GitHub issue by including the '#' along with the issue number at the end of the commit message.

`git commit -m "Finished Styling the Navigation Bar #5"`

You can link as many commits to that task as you want.

To push the changes from your local branch to the repository follow this command.

`git push orign <branch name>`

This creates the branch remotely and pushes that branch on GitHub

[Link GitHub Commit to Issue](https://gitdailies.com/articles/link-github-commit-to-issue/)

### Completing the Task (Linking Pull Request to an Issue)

After committing the changes in your local branch and completing the task, simply merge your branch to the main branch via pull request. 

To close of the issue automatically using pull request, just type any of the following keywords:

- close
- closes
- closed
- fix
- fixes
- fixed
- resolve
- resolves
- resolved

along with the '#' and the issue number in the pull request body description.

*Fixed #4 using React hooks*

This process will automatically drag the task from In Progress in GitHub Project to the Done column, and close the issue in the GitHub Repository.

[Linking A Pull Request to an Issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)

### Approval

After completing your pull request and your branch is ready to be merge with the main branch, you will need the approval of your team members for your merge process to proceed.

[Learn How to Start New Group Project GitHub](https://www.digitalcrafts.com/blog/learn-how-start-new-group-project-github)