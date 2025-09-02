# GitClassic

> This is a fork of GitLens from v11.7.0 the last version before the bloat and unstability started to make this awesome tool frustrating.

The goals of this fork are:

 - Stability first a foremost !
 - Keep it up to date with vscode changes.
 - Optimize performance if needs be.
 - A few additions there and there, but nothing breathtaking, this a production software not a marketing tool.

# GitClassic

GitClassic is an [open-source](https://github.com/Speedy37/vscode-gitclassic 'Open GitClassic on GitHub') extension for [Visual Studio Code](https://code.visualstudio.com).

GitClassic simply helps you **better understand code**. Quickly glimpse into whom, why, and when a line or code block was changed. Jump back through history to **gain further insights** as to how and why the code evolved. Effortlessly explore the history and evolution of a codebase.

GitClassic is **powerful**, **feature rich**, and [highly customizable](#gitclassic-settings- 'Jump to the GitClassic settings docs') to meet your needs. Do you find code lens intrusive or the current line blame annotation distracting &mdash; no problem, quickly turn them off or change how they behave via the interactive [_GitLens Settings_ editor](#configuration 'Jump to Configuration'). For advanced customizations, refer to the [GitClassic docs](#gitclassic-settings- 'Jump to GitClassic settings') and edit your [user settings](https://code.visualstudio.com/docs/getstarted/settings 'Open User settings').

Here are just some of the **features** that GitClassic provides,

- effortless [**revision navigation**](#revision-navigation- 'Jump to Revision Navigation') (backwards and forwards) through the history of a file
- an unobtrusive [**current line blame**](#current-line-blame- 'Jump to Current Line Blame') annotation at the end of the line showing the commit and author who last modified the line, with more detailed blame information accessible on [**hover**](#hovers- 'Jump to Hovers')
- [**authorship code lens**](#git-code-lens- 'Jump to Git Code Lens') showing the most recent commit and number of authors at the top of files and/or on code blocks
- a [**status bar blame**](#status-bar-blame- 'Jump to Status Bar Blame') annotation showing the commit and author who last modified the current line
- on-demand **file annotations** in the editor gutter, including
  - [**blame**](#gutter-blame- 'Jump to Gutter Blame') &mdash; shows the commit and author who last modified each line of a file
  - [**changes**](#gutter-changes- 'Jump to Gutter Changes') &mdash; highlights any local (unpublished) changes or lines changed by the most recent commit
  - [**heatmap**](#gutter-heatmap- 'Jump to Gutter Heatmap') &mdash; shows how recently lines were changed, relative to all the other changes in the file and to now (hot vs. cold)
- many rich **Side Bar views**
  - a [**_Commits_ view**](#commits-view- 'Jump to the Commits view') to visualize, explore, and manage Git commits
  - a [**_Repositories_ view**](#repositories-view- 'Jump to the Repositories view') to visualize, explore, and manage Git repositories
  - a [**_File History_ view**](#file-history-view- 'Jump to the File History view') to visualize, navigate, and explore the revision history of the current file or just the selected lines of the current file
  - a [**_Line History_ view**](#line-history-view- 'Jump to the Line History view') to visualize, navigate, and explore the revision history of the selected lines of the current file
  - a [**_Branches_ view**](#branches-view- 'Jump to the Branches view') to visualize, explore, and manage Git branches
  - a [**_Remotes_ view**](#remotes-view- 'Jump to the Remotes view') to visualize, explore, and manage Git remotes and remote branches
  - a [**_Stashes_ view**](#stashes-view- 'Jump to the Stashes view') to visualize, explore, and manage Git stashes
  - a [**_Tags_ view**](#tags-view- 'Jump to the Tags view') to visualize, explore, and manage Git tags
  - a [**_Contributors_ view**](#contributors-view- 'Jump to the Contributors view') to visualize, navigate, and explore contributors
  - a [**_Search & Compare_ view**](#search--compare-view- 'Jump to the Search & Compare view') to search and explore commit histories by message, author, files, id, etc, or visualize comparisons between branches, tags, commits, and more
- a [**Git Command Palette**](#git-command-palette- 'Jump to the Git Command Palette') to provide guided (step-by-step) access to many common Git commands, as well as quick access to
  - [commits](#quick-commit-access- 'Jump to Quick Commit Access') &mdash; history and search
  - [stashes](#quick-stash-access- 'Jump to Quick Stash Access')
  - [status](#quick-status-access- 'Jump to Quick Status Access') &mdash; current branch and working tree status
- a user-friendly [**interactive rebase editor**](#interactive-rebase-editor- 'Jump to the Interactive Rebase Editor') to easily configure an interactive rebase session
- [**terminal links**](#terminal-links- 'Jump to Terminal Links') &mdash; `ctrl+click` on autolinks in the integrated terminal to quickly jump to more details for commits, branches, tags, and more
- rich [**remote provider integrations**](#remote-provider-integrations- 'Jump to Remote Provider Integrations') &mdash; GitHub, GitLab, Gitea, Gerrit, Bitbucket, Azure DevOps
  - issue and pull request auto-linking
  - rich hover information provided for linked issues and pull requests (GitHub only)
  - associates pull requests with branches and commits (GitHub only)
- many [**powerful commands**](#powerful-commands- 'Jump to Powerful Commands') for navigating and comparing revisions and more
- customizable [**menus & toolbars**](#menus--toolbars- 'Jump to Menus & Toolbars') for control over where menu and toolbar items are shown
- user-defined [**modes**](#modes- 'Jump to Modes') for quickly toggling between sets of settings
- and so much more 😁

# Features

## Revision Navigation [#](#revision-navigation- 'Revision Navigation')

<p align="center">
  <img src="images/docs/revision-navigation.gif" alt="Revision Navigation" />
</p>

- Adds an _Open Changes with Previous Revision_ command (`gitclassic.diffWithPrevious`) to compare the current file or revision with the previous commit revision
- Adds an _Open Changes with Next Revision_ command (`gitclassic.diffWithNext`) to compare the current file or revision with the next commit revision
- Adds an _Open Line Changes with Previous Revision_ command (`gitclassic.diffLineWithPrevious`) to compare the current file or revision with the previous line commit revision
- Adds an _Open Changes with Working File_ command (`gitclassic.diffWithWorking`) to compare the current revision or most recent commit revision of the current file with the working tree
- Adds an _Open Line Changes with Working File_ command (`gitclassic.diffLineWithWorking`) to compare the commit revision of the current line with the working tree
- Adds an _Open Changes with Branch or Tag..._ command (`gitclassic.diffWithRevisionFrom`) to compare the current file or revision with another revision of the same file on the selected reference
- Adds an _Open Changes with Revision..._ command (`gitclassic.diffWithRevision`) to compare the current file or revision with another revision of the same file

## Current Line Blame [#](#current-line-blame- 'Current Line Blame')

<p align="center">
  <img src="images/docs/current-line-blame.png" alt="Current Line Blame" />
</p>

- Adds an unobtrusive, [customizable](#current-line-blame-settings- 'Jump to the Current Line Blame settings'), and [themable](#themable-colors- 'Jump to the Themable Colors'), **blame annotation** at the end of the current line
  - Contains the author, date, and message of the current line's most recent commit (by [default](#current-line-blame-settings- 'Jump to the Current Line Blame settings'))
  - Adds a _Toggle Line Blame Annotations_ command (`gitclassic.toggleLineBlame`) to toggle the blame annotation on and off

## Git Code Lens [#](#git-code-lens- 'Git Code Lens')

<p align="center">
  <img src="images/docs/code-lens.png" alt="Git Code Lens" />
</p>

- Adds Git authorship **code lens** to the top of the file and on code blocks ([optional](#git-code-lens-settings- 'Jump to the Git Code Lens settings'), on by default)

  - **Recent Change** &mdash; author and date of the most recent commit for the file or code block
    - Click the code lens to show a **commit file details quick pick menu** with commands for comparing, navigating and exploring commits, and more (by [default](#git-code-lens-settings- 'Jump to the Code Lens settings'))
  - **Authors** &mdash; number of authors of the file or code block and the most prominent author (if there is more than one)

    - Click the code lens to toggle the file Git blame annotations on and off of the whole file (by [default](#git-code-lens-settings- 'Jump to the Git Code Lens settings'))
    - Will be hidden if the author of the most recent commit is also the only author of the file or block, to avoid duplicate information and reduce visual noise

  - Provides [customizable](#git-code-lens-settings- 'Jump to the Git Code Lens settings') click behavior for each code lens &mdash; choose between one of the following
    - Toggle file blame annotations on and off
    - Compare the commit with the previous commit
    - Show a quick pick menu with details and commands for the commit
    - Show a quick pick menu with file details and commands for the commit
    - Show a quick pick menu with the commit history of the file
    - Show a quick pick menu with the commit history of the current branch

- Adds a _Toggle Git Code Lens_ command (`gitclassic.toggleCodeLens`) with a shortcut of `shift+alt+b` to toggle the code lens on and off

## Status Bar Blame [#](#status-bar-blame- 'Status Bar Blame')

<p align="center">
  <img src="images/docs/status-bar.png" alt="Status Bar Blame" />
</p>

- Adds a [customizable](#status-bar-settings- 'Jump to the Status Bar Blame settings') **Git blame annotation** showing the commit and author who last modified the current line to the **status bar** ([optional](#status-bar-settings- 'Jump to the Status Bar Blame settings'), on by default)

  - Contains the commit author and date (by [default](#status-bar-settings- 'Jump to the Status Bar Blame settings'))
  - Click the status bar item to show a **commit details quick pick menu** with commands for comparing, navigating and exploring commits, and more (by [default](#status-bar-settings- 'Jump to the Status Bar Blame settings'))

  - Provides [customizable](#status-bar-settings- 'Jump to the Status Bar Blame settings') click behavior &mdash; choose between one of the following
    - Toggle file blame annotations on and off
    - Toggle code lens on and off
    - Compare the line commit with the previous commit
    - Compare the line commit with the working tree
    - Show a quick pick menu with details and commands for the commit (default)
    - Show a quick pick menu with file details and commands for the commit
    - Show a quick pick menu with the commit history of the file
    - Show a quick pick menu with the commit history of the current branch

## Hovers [#](#hovers- 'Hovers')

### Current Line Hovers

<p align="center">
  <img src="images/docs/hovers-current-line.png" alt="Current Line Hovers" />
</p>

- Adds [customizable](#hover-settings- 'Jump to the Hover settings') Git blame hovers accessible over the current line

#### Details Hover

  <p align="center">
    <img src="images/docs/hovers-current-line-details.png" alt="Current Line Details Hover" />
  </p>

- Adds a **details hover** annotation to the current line to show more commit details ([optional](#hover-settings- 'Jump to the Hover settings'), on by default)
  - Provides **automatic issue linking** to Bitbucket, Gerrit, Gitea, GitHub, GitLab, and Azure DevOps in commit messages
  - Provides a **quick-access command bar** with _Open Changes_, _Blame Previous Revision_, _Open on Remote_, _Invite to Live Share_ (if available), and _Show More Actions_ command buttons
  - Click the commit SHA to execute the _Show Commit_ command

#### Changes (diff) Hover

<p align="center">
  <img src="images/docs/hovers-current-line-changes.png" alt="Current Line Changes (diff) Hover" />
</p>

- Adds a **changes (diff) hover** annotation to the current line to show the line's previous version ([optional](#hover-settings- 'Jump to the Hover settings'), on by default)
  - Click the **Changes** to execute the _Open Changes_ command
  - Click the current and previous commit SHAs to execute the _Show Commit_ command

### Annotation Hovers

<p align="center">
  <img src="images/docs/hovers-annotations.png" alt="Annotation Hovers" />
</p>

- Adds [customizable](#hover-settings- 'Jump to the Hover settings') Git blame hovers accessible when annotating

### Details Hover

  <p align="center">
    <img src="images/docs/hovers-annotations-details.png" alt="Annotations Details Hover" />
  </p>

- Adds a **details hover** annotation to each line while annotating to show more commit details ([optional](#hover-settings- 'Jump to the Hover settings'), on by default)
  - Provides **automatic issue linking** to Bitbucket, Gerrit, Gitea, GitHub, GitLab, and Azure DevOps in commit messages
  - Provides a **quick-access command bar** with _Open Changes_, _Blame Previous Revision_, _Open on Remote_, _Invite to Live Share_ (if available), and _Show More Actions_ command buttons
  - Click the commit SHA to execute the _Show Commit_ command

### Changes (diff) Hover

<p align="center">
  <img src="images/docs/hovers-annotations-changes.png" alt="Annotations Changes (diff) Hover" />
</p>

- Adds a **changes (diff) hover** annotation to each line while annotating to show the line's previous version ([optional](#hover-settings- 'Jump to the Hover settings'), on by default)
  - Click the **Changes** to execute the _Open Changes_ command
  - Click the current and previous commit SHAs to execute the _Show Commit_ command

## Gutter Blame [#](#gutter-blame- 'Gutter Blame')

<p align="center">
  <img src="images/docs/gutter-blame.png" alt="Gutter Blame">
</p>

- Adds on-demand, [customizable](#gutter-blame-settings- 'Jump to the Gutter Blame settings'), and [themable](#themable-colors- 'Jump to Themable Colors'), **gutter blame annotations** to show the commit and author who last modified each line of a file
  - Contains the commit message and date, by [default](#gutter-blame-settings- 'Jump to the Gutter Blame settings')
  - Adds a **heatmap** (age) indicator on right edge (by [default](#gutter-blame-settings- 'Jump to the Gutter Blame settings')) of the gutter to provide an easy, at-a-glance way to tell how recently lines were changed ([optional](#gutter-blame-settings- 'Jump to the Gutter Blame settings'), on by default)
    - See the [gutter heatmap](#gutter-Heatmap- 'Jump to Gutter Heatmap') section below for more details
  - Adds a _Toggle File Blame Annotations_ command (`gitclassic.toggleFileBlame`) with a shortcut of `alt+b` to toggle the blame annotations on and off
  - Press `Escape` to turn off the annotations

## Gutter Changes [#](#gutter-changes- 'Gutter Changes')

<p align="center">
  <img src="images/docs/gutter-changes.png" alt="Gutter Changes" />
</p>

- Adds an on-demand, [customizable](#gutter-changes-settings- 'Jump to the Gutter Changes settings') and [themable](#themable-colors- 'Jump to Themable Colors'), **gutter changes annotation** to highlight any local (unpublished) changes or lines changed by the most recent commit
  - Adds _Toggle File Changes_ command (`gitclassic.toggleFileChanges`) to toggle the changes annotations on and off
  - Press `Escape` to turn off the annotations

## Gutter Heatmap [#](#gutter-heatmap- 'Gutter Heatmap')

<p align="center">
  <img src="images/docs/gutter-heatmap.png" alt="Gutter Heatmap" />
</p>

- Adds an on-demand **heatmap** to the edge of the gutter to show how recently lines were changed
  - The indicator's [customizable](#gutter-heatmap-settings- 'Jump to the Gutter Heatmap settings') color will either be hot or cold based on the age of the most recent change (cold after 90 days by [default](#gutter-heatmap-settings- 'Jump to the Gutter Heatmap settings'))
  - The indicator's brightness ranges from bright (newer) to dim (older) based on the relative age, which is calculated from the median age of all the changes in the file
  - Adds _Toggle File Heatmap Annotations_ command (`gitclassic.toggleFileHeatmap`) to toggle the heatmap on and off
  - Press `Escape` to turn off the annotations

## Side Bar Views [#](#side-bar-views- 'Side Bar Views')

GitClassic adds many side bar views to provide additional rich functionality. The default layout (location) of these views can be quickly customized via the _GitLens: Set Views Layout_ (`gitclassic.setViewsLayout`) command from the [_Command Palette_](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette).

- _Source Control Layout_ &mdash; shows all the views together on the Source Control side bar
- _GitLens Layout_ &mdash; shows all the views together on the GitClassic side bar

<p style="display:flex;justify-content:space-around">
  <img src="images/docs/views-layout-scm.png" alt="Views Layout: Source Control" />
  <img src="images/docs/views-layout-gitclassic.png" alt="Views Layout: GitClassic" />
</p>

### Commits view [#](#commits-view- 'Commits view')

<p align="center">
  <img src="images/docs/commits-view.png" alt="Commits view" />
</p>

A [customizable](#commits-view-settings- 'Jump to the Commits view settings') view to visualize, explore, and manage Git commits

The _Commits_ view lists all of the commits on the current branch, and additionally provides,

- a toggle to switch between showing all commits or just your own commits
- a toggle to change the file layout: list, tree, auto
- a branch comparison tool (**Compare &lt;current branch&gt; with &lt;branch, tag, or ref&gt;**) &mdash; [optionally](#commits-view-settings- 'Jump to the Commits view settings') shows a comparison of the current branch (or working tree) to a user-selected reference
  - **Behind** &mdash; lists the commits that are missing from the current branch (i.e. behind) but exist in the selected reference
    - **# files changed** &mdash; lists all of the files changed in the behind commits
  - **Ahead** &mdash; lists the commits that the current branch has (i.e. ahead) but are missing in the selected reference
    - **# files changed** &mdash; lists all of the files changed in the ahead commits
  - **# files changed** &mdash; lists all of the files changed between the compared references
- the current branch status &mdash; shows the upstream status of the current branch
  - **Publish &lt;current branch&gt; to &lt;remote&gt;** &mdash; shown when the current branch has not been published to a remote
  - **Up to date with &lt;remote&gt;** &mdash; shown when the current branch is up to date with the upstream remote
  - **Changes to pull from &lt;remote&gt;** &mdash; lists all of the commits waiting to be pulled when the current branch has commits that are waiting to be pulled from the upstream remote
  - **Changes to push to &lt;remote&gt;** &mdash; lists of all the files changed in the unpublished commits when the current branch has (unpublished) commits that waiting to be pushed to the upstream remote
  - **Merging into &lt;branch&gt;** or **Resolve conflicts before merging into &lt;branch&gt;** &mdash; lists any conflicted files. Conflicted files show comparisons with the common base of the current and incoming changes to aid in resolving the conflict by making it easier to see where changes originated
    ![Merging](images/docs/commits-view-merge.png)
  - **Rebasing &lt;branch&gt;** or **Resolve conflicts to continue rebasing &lt;branch&gt;** &mdash; shows the number of rebase steps left, the commit the rebase is paused at, and lists any conflicted files. Conflicted files show comparisons with the common base of the current and incoming changes to aid in resolving the conflict by making it easier to see where changes originated
    ![Rebasing](images/docs/commits-view-rebase.png)
- any associated pull request &mdash; shows any opened or merged pull request associated with the current branch

---

### Repositories view [#](#repositories-view- 'Repositories view')

<p align="center">
  <img src="images/docs/repositories-view.png" alt="Repositories view" />
</p>

A hidden by default, [customizable](#repositories-view-settings- 'Jump to the Repositories view settings') view to visualize, explore, and manage Git repositories

The Repositories view lists opened Git repositories, and additionally provides,

- a toggle to automatically refresh the repository on changes
- a toggle to change the file layout: list, tree, auto
- an icon overlay indicator to show the current branch's upstream status (if available)
  - _No dot_ &mdash; no changes or the branch is unpushlished
  - _Green dot_ &mdash; has changes unpushed (ahead)
  - _Red dot_ &mdash; has changes unpulled (behind)
  - _Yellow dot_ &mdash; both unpushed and unpulled changes
- a branch comparison tool (**Compare &lt;current branch&gt; with &lt;branch, tag, or ref&gt;**) &mdash; [optionally](#repositories-view-settings- 'Jump to the Repositories view settings') shows a comparison of the current branch (or working tree) to a user-selected reference
  - **Behind** &mdash; lists the commits that are missing from the current branch (i.e. behind) but exist in the selected reference
    - **# files changed** &mdash; lists all of the files changed between the compared references
  - **Ahead** &mdash; lists the commits that the current branch has (i.e. ahead) but are missing in the selected reference
    - **# files changed** &mdash; lists all of the files changed between the compared references
- **# files changed** &mdash; [optionally](#repositories-view-settings- 'Jump to the Repositories view settings') lists all of the files changed in the working tree
- the current branch status &mdash; [optionally](#repositories-view-settings- 'Jump to the Repositories view settings') shows the upstream status of the current branch
  - **Publish &lt;current branch&gt; to remote** &mdash; shown when the current branch has not been published to a remote
  - **Up to date with &lt;remote&gt;** &mdash; shown when the current branch is up to date with the upstream remote
  - **Changes to pull from &lt;remote&gt;** &mdash; lists all of the unpulled commits and all of the files changed in them, when the current branch has commits that are waiting to be pulled from the upstream remote
  - **Changes to push to &lt;remote&gt;** &mdash; lists of all the unpublished commits and all of the files changed in them, when the current branch has commits that waiting to be pushed to the upstream remote
  - **Merging into &lt;branch&gt;** or **Resolve conflicts before merging into &lt;branch&gt;** &mdash; lists any conflicted files. Conflicted files show comparisons with the common base of the current and incoming changes to aid in resolving the conflict by making it easier to see where changes originated
  - **Rebasing &lt;branch&gt;** or **Resolve conflicts to continue rebasing &lt;branch&gt;** &mdash; shows the number of rebase steps left, the commit the rebase is paused at, and lists any conflicted files. Conflicted files show comparisons with the common base of the current and incoming changes to aid in resolving the conflict by making it easier to see where changes originated
- any associated pull request &mdash; [optionally](#repositories-view-settings- 'Jump to the Repositories view settings') shows any opened or merged pull request associated with the current branch
- **Commits** &mdash; [optionally](#repositories-view-settings- 'Jump to the Repositories view settings') shows the current branch commits, similar to the [Commits view](#commits-view- 'Commits view')
- **Branches** &mdash; [optionally](#repositories-view-settings- 'Jump to the Repositories view settings') shows the local branches, similar to the [Branches view](#branches-view- 'Branches view')
- **Remotes** &mdash; [optionally](#repositories-view-settings- 'Jump to the Repositories view settings') shows the remotes and remote branches, similar to the [Remotes view](#remotes-view- 'Remotes view')
- **Stashes** &mdash; [optionally](#repositories-view-settings- 'Jump to the Repositories view settings') shows the stashes, similar to the [Stashes view](#stashes-view- 'Stashes view')
- **Tags** &mdash; [optionally](#repositories-view-settings- 'Jump to the Repositories view settings') shows the tags, similar to the [Tags view](#tags-view- 'Tags view')
- **Contributors** &mdash; [optionally](#repositories-view-settings- 'Jump to the Repositories view settings') shows the contributors, similar to the [Contributors view](#contributors-view- 'Contributors view')
- **Incoming Activity** (experimental) &mdash; [optionally](#repositories-view-settings- 'Jump to the Repositories view settings') shows any incoming activity, which lists the command, branch (if available), and date of recent incoming activity (merges and pulls) to your local repository

---

### File History view [#](#file-history-view- 'File History view')

<p align="center">
  <img src="images/docs/file-history-view.png" alt="File History view" />
</p>

A [customizable](#file-history-view-settings- 'Jump to the File History view settings') view to visualize, navigate, and explore the revision history of the current file or just the selected lines of the current file

The file history view lists all of the commits that changed the current file on the current branch, and additionally provides,

- a toggle to pin (pause) the automatic tracking of the current editor
- a toggle to switch between file and line history, i.e. show all commits of the current file, or just the selected lines of the current file
- the ability to change the current base branch or reference when computing the file or line history
- (file history only) a toggle to follow renames across the current file
- (file history only) a toggle to show commits from all branches rather than just from the current base branch or reference
- merge conflict status when applicable
  - **Merge Changes** &mdash; show comparisons with the common base of the current and incoming changes to aid in resolving the conflict by making it easier to see where changes originated
    ![Merge Conflicts](images/docs/file-history-view-merge-conflict.png)

---

### Line History view [#](#line-history-view- 'Line History view')

<p align="center">
  <img src="images/docs/line-history-view.png" alt="Line History view" />
</p>

A hidden by default, [customizable](#line-history-view-settings- 'Jump to the Line History view settings') view to visualize, navigate, and explore the revision history of the selected lines of the current file

The line history view lists all of the commits that changed the selected lines of the current file on the current branch, and additionally provides,

- a toggle to pin (pause) the automatic tracking of the current editor
- the ability to change the current base branch or reference when computing the line history
- merge conflict status when applicable
  - **Merge Changes** &mdash; show comparisons with the common base of the current and incoming changes to aid in resolving the conflict by making it easier to see where changes originated

---

### Branches view [#](#branches-view- 'Branches view')

<p align="center">
  <img src="images/docs/branches-view.png" alt="Branches view" />
</p>

A [customizable](#branches-view-settings- 'Jump to the Branches view settings') view to visualize, explore, and manage Git branches

The _Branches_ view lists all of the local branches, and additionally provides,

- a toggle to change the branch layout: list or tree
- a toggle to change the file layout: list, tree, auto
- an icon overlay indicator to show the branch's upstream status (if available)
  - _No dot_ &mdash; no changes or the branch is unpushlished
  - _Green dot_ &mdash; has changes unpushed (ahead)
  - _Red dot_ &mdash; has changes unpulled (behind)
  - _Yellow dot_ &mdash; both unpushed and unpulled changes
- status indicators (decorations), on the right, and themeable colorizations
  - `✓` &mdash; indicates that the branch is the current branch
  - `▲` + green colorization &mdash; indicates that the branch has unpushed changes (ahead)
  - `▼` + red colorization &mdash; indicates that the branch has unpulled changes (behind)
  - `▼▲` + yellow colorization &mdash; indicates that the branch has diverged from its upstream; meaning it has both unpulled and unpushed changes
  - `▲+` + green colorization &mdash; indicates that the branch hasn't yet been published to an upstream remote
  - `!` + dark red colorization &mdash; indicates that the branch has a missing upstream (e.g. the upstream branch was deleted)
- a branch comparison tool (**Compare &lt;branch&gt; with &lt;branch, tag, or ref&gt;**) &mdash; [optionally](#branches-view-settings- 'Jump to the Branches view settings') shows a comparison of the branch to a user-selected reference
  - **Behind** &mdash; lists the commits that are missing from the branch (i.e. behind) but exist in the selected reference
    - **# files changed** &mdash; lists all of the files changed in the behind commits
  - **Ahead** &mdash; lists the commits that the branch has (i.e. ahead) but are missing in the selected reference
    - **# files changed** &mdash; lists all of the files changed in the ahead commits
  - **# files changed** &mdash; lists all of the files changed between the compared references
- the branch status &mdash; shows the upstream status of the branch
  - **Publish &lt;branch&gt; to &lt;remote&gt;** &mdash; shown when the current branch has not been published to a remote
  - **Changes to push to &lt;remote&gt;** &mdash; lists of all the files changed in the unpublished commits when the branch has (unpublished) commits that waiting to be pushed to the upstream remote
  - **Changes to pull from &lt;remote&gt;** &mdash; lists all of the commits waiting to be pulled when the branch has commits that are waiting to be pulled from the upstream remote
- any associated pull request &mdash; shows any pull request associated with the branch

---

### Remotes view [#](#remotes-view- 'Remotes view')

<p align="center">
  <img src="images/docs/remotes-view.png" alt="Remotes view" />
</p>

A [customizable](#remotes-view-settings- 'Jump to the Remotes view settings') view to visualize, explore, and manage Git remotes and remote branches

The _Remotes_ view lists all of the remotes and their remote branches, and additionally provides,

- a toggle to change the branch layout: list or tree
- a toggle to change the file layout: list, tree, auto
- a toggle to connect to a supported remote providers to enable a rich integration with pull requests, issues, avatars, and more

---

### Stashes view [#](#stashes-view- 'Stashes view')

<p align="center">
  <img src="images/docs/stashes-view.png" alt="Stashes view" />
</p>

A [customizable](#stashes-view-settings- 'Jump to the Stashes view settings') view to visualize, explore, and manage Git stashes

The _Stashes_ view lists all of the stashes, and additionally provides,

- a toggle to change the file layout: list, tree, auto

---

### Tags view [#](#tags-view- 'Tags view')

<p align="center">
  <img src="images/docs/tags-view.png" alt="Tags view" />
</p>

A [customizable](#tags-view-settings- 'Jump to the Tags view settings') view to visualize, explore, and manage Git tags

The _Tags_ view lists all of the tags, and additionally provides,

- a toggle to change the tag layout: list or tree
- a toggle to change the file layout: list, tree, auto

---

### Contributors view [#](#contributors-view- 'Contributors view')

<p align="center">
  <img src="images/docs/contributors-view.png" alt="Contributors view" />
</p>

A hidden by default, [customizable](#contributors-view-settings- 'Jump to the Contributors view settings') view to visualize, navigate, and explore contributors

The _Contributors_ view lists all of the contributors, and additionally provides,

- a toggle to change the file layout: list, tree, auto

---

### Search & Compare view [#](#search--compare-view- 'Search & Compare view')

<p align="center">
  <img src="images/docs/search-and-compare-view.png" alt="Search & Compare view" />
</p>

A hidden by default, [customizable](#search--compare-view-settings- 'Jump to the Search & Compare view settings') view to search and explore commit histories by message, author, files, id, etc, or visualize comparisons between branches, tags, commits, and more

The _Search & Compare_ view lists pinnable (saved) results for searching commit histories or for comparison operations, and additionally provides,

- a toggle to keep previous results when new results are added
- a toggle to change the file layout: list, tree, auto
- pinnable search &mdash; lists all of the commits that match the search query
  - Search results can be provided by the following commands
    - _Search Commits_ command (`gitclassic.showCommitSearch`) can search
      - by message &mdash; use `<message>` to find commits with messages that match `<message>` &mdash; See [Git docs](https://git-scm.com/docs/git-log#Documentation/git-log.txt---grepltpatterngt 'Open Git docs')
      - or, by author &mdash; use `@<pattern>` to find commits with authors that match `<pattern>` &mdash; See [Git docs](https://git-scm.com/docs/git-log#Documentation/git-log.txt---authorltpatterngt 'Open Git docs')
      - or, by commit SHA &mdash; use `#<sha>` to find a commit with SHA of `<sha>` &mdash; See [Git docs](https://git-scm.com/docs/git-log#Documentation/git-log.txt-ltrevisionrangegt 'Open Git docs')
      - or, by files &mdash; use `:<path/glob>` to find commits with file names that match `<path/glob>` &mdash; See [Git docs](https://git-scm.com/docs/git-log#Documentation/git-log.txt---ltpathgt82308203 'Open Git docs')
      - or, by changes &mdash; use `~<pattern>` to find commits with differences whose patch text contains added/removed lines that match `<pattern>` &mdash; See [Git docs](https://git-scm.com/docs/git-log#Documentation/git-log.txt--Gltregexgt 'Open Git docs')
    - _Show File History_ command (`gitclassic.showQuickFileHistory`)
    - _Show Commit_ command (`gitclassic.showQuickCommitDetails`)
- pinnable comparison &mdash; shows a comparison of the two user-selected references
  - **Behind** &mdash; lists the commits that are missing from the branch (i.e. behind) but exist in the selected reference
    - **# files changed** &mdash; lists all of the files changed in the behind commits
  - **Ahead** &mdash; lists the commits that the branch has (i.e. ahead) but are missing in the selected reference
    - **# files changed** &mdash; lists all of the files changed in the ahead commits
  - **# files changed** &mdash; lists all of the files changed between the compared references
  - Comparision results can be provided by the following commands
    - _Compare with Upstream_ command (`gitclassic.views.compareWithUpstream`)
    - _Compare with Working Tree_ command (`gitclassic.views.compareWithWorking`)
    - _Compare with HEAD_ command (`gitclassic.views.compareWithHead`)
    - _Compare with Selected_ command (`gitclassic.views.compareWithSelected`)
    - _Compare Ancestry with Working Tree_ command (`gitclassic.views.compareAncestryWithWorking`)

## Git Command Palette [#](#git-command-palette- 'Git Command Palette')

<p align="center">
  <img src="images/docs/git-command-palette.png" alt="Git Command Palette" />
</p>

- Adds a [customizable](#git-command-palette-settings- 'Jump to the Git Command Palette settings') _Git Command Palette_ command (`gitclassic.gitCommands`) to provide guided (step-by-step) access to many common Git commands, as well as quick access to commit history and search, stashes, and more

  - Quickly navigate and execute Git commands through easy-to-use menus where each command can require an explicit confirmation step before executing

### Quick Commit Access [#](#quick-commit-access- 'Quick Commit Access')

- Adds a _Show Branch History_ command (`gitclassic.showQuickBranchHistory`) to show a quick pick menu to explore the commit history of the selected branch
- Adds a _Show Current Branch History_ command (`gitclassic.showQuickRepoHistory`) to show a quick pick menu to explore the commit history of the current branch

<p align="center">
  <img src="images/docs/menu-branch-history.png" alt="Branch History Quick Pick Menu" />
</p>

- Adds a _Show File History_ command (`gitclassic.showQuickFileHistory`) to show quick pick menu to explore the commit history of the current file

<p align="center">
  <img src="images/docs/menu-file-history.png" alt="File History Quick Pick Menu" />
</p>

- Adds a _Search Commits_ command (`gitclassic.showCommitSearch`) to show quick pick menu to search for commits
  - by message &mdash; use `<message>` to find commits with messages that match `<message>` &mdash; See [Git docs](https://git-scm.com/docs/git-log#Documentation/git-log.txt---grepltpatterngt 'Open Git docs')
  - or, by author &mdash; use `@<pattern>` to find commits with authors that match `<pattern>` &mdash; See [Git docs](https://git-scm.com/docs/git-log#Documentation/git-log.txt---authorltpatterngt 'Open Git docs')
  - or, by commit SHA &mdash; use `#<sha>` to find a commit with id of `<sha>` &mdash; See [Git docs](https://git-scm.com/docs/git-log#Documentation/git-log.txt-ltrevisionrangegt 'Open Git docs')
  - or, by files &mdash; use `:<path/glob>` to find commits with file names that match `<path/glob>` &mdash; See [Git docs](https://git-scm.com/docs/git-log#Documentation/git-log.txt---ltpathgt82308203 'Open Git docs')
  - or, by changes &mdash; use `~<pattern>` to find commits with differences whose patch text contains added/removed lines that match `<pattern>` &mdash; See [Git docs](https://git-scm.com/docs/git-log#Documentation/git-log.txt--Gltregexgt 'Open Git docs')

<p align="center">
  <img src="images/docs/menu-commit-search.png" alt="Commit Search Quick Pick Menu" />
</p>

- Adds a _Show Commit_ command (`gitclassic.showQuickCommitDetails`) to show a quick pick menu to explore a commit and take action upon it

<p align="center">
  <img src="images/docs/menu-commit-details.png" alt="Commit Details Quick Pick Menu" />
</p>

- Adds a _Show Line Commit_ command (`gitclassic.showQuickCommitFileDetails`) to show a quick pick menu to explore a file of a commit and take action upon it

<p align="center">
  <img src="images/docs/menu-commit-file-details.png" alt="Commit File Details Quick Pick Menu" />
</p>

### Quick Stash Access [#](#quick-stash-access- 'Quick Stash Access')

- Adds a _Show Stashes_ command (`gitclassic.showQuickStashList`) to show a quick pick menu to explore your stashes

<p align="center">
  <img src="images/docs/menu-stash-list.png" alt="Stashes Quick Pick Menu" />
</p>
<p align="center">
  <img src="images/docs/menu-stash-details.png" alt="Stash Details Quick Pick Menu" />
</p>

### Quick Status Access [#](#quick-status-access- 'Quick Status Access')

- Adds a _Show Repository Status_ command (`gitclassic.showQuickRepoStatus`) to show a quick pick menu to for visualizing the current repository status

<p align="center">
  <img src="images/docs/menu-repo-status.png" alt="Repository Status Quick Pick Menu" />
</p>

## Interactive Rebase Editor [#](#interactive-rebase-editor- 'Interactive Rebase Editor')

<p align="center">
  <img src="images/docs/rebase.gif" alt="Interactive Rebase Editor" />
</p>

- Adds a user-friendly interactive rebase editor to more easily configure an interactive rebase session
  - Quickly re-order, edit, squash, and drop commits
  - Includes drag & drop support!
- To use this directly from your terminal, e.g. when running `git rebase -i`,

  - set VS Code as your default Git editor
    - `git config --global core.editor "code --wait"`
  - or, to only affect rebase, set VS Code as your Git rebase editor
    - `git config --global sequence.editor "code --wait"`

  > To use the Insiders edition of VS Code, replace `code` in the above with `code-insiders`

## Terminal Links [#](#terminal-links- 'Terminal Links')

<p align="center">
  <img src="images/docs/terminal-links.gif" alt="Terminal Links" />
</p>

- [Optionally](##terminal-links-settings- 'Jump to the Terminal Links settings') adds autolinks for branches, tags, and commit ranges in the integrated terminal to quickly explore their commit history
- [Optionally](##terminal-links-settings- 'Jump to the Terminal Links settings') adds autolinks for commits in the integrated terminal to quickly explore the commit and take action upon it

## Remote Provider Integrations [#](#remote-provider-integrations- 'Remote Provider Integrations')

GitClassic provides rich integrations with many remote providers, including GitHub, GitHub Enterprise, GitLab, Gitea, Gerrit, Bitbucket, Bitbucket Server, and Azure DevOps. You can also define [custom remote providers](#remote-provider-integration-settings- 'Jump to the Remote Provider Integration settings') or [remote providers with custom domains](#remote-provider-integration-settings- 'Jump to the Remote Provider Integration settings') as well.

Basic integrations provide issue and pull request auto-linking, while richer integrations (e.g. GitHub) can provide rich hover information provided for auto-linked issues and pull requests, associate pull requests with branches and commits, and provide avatars.

Additionally, these integrations provide commands to copy the url of or open, files, commits, branches, and the repository on the remote provider.

- _Open File from Remote_ command (`gitclassic.openFileFromRemote`) &mdash; opens the local file from a url of a file on a remote provider
- _Open File on Remote_ command (`gitclassic.openFileOnRemote`) &mdash; opens a file or revision on the remote provider
- _Copy Remote File Url_ command (`gitclassic.copyRemoteFileUrlToClipboard`) &mdash; copies the url of a file or revision on the remote provider
- _Open File on Remote From..._ command (`gitclassic.openFileOnRemoteFrom`) &mdash; opens a file or revision on a specific branch or tag on the remote provider
- _Copy Remote File Url From..._ command (`gitclassic.copyRemoteFileUrlFrom`) &mdash; copies the url of a file or revision on a specific branch or tag the remote provider
- _Open Commit on Remote_ command (`gitclassic.openCommitOnRemote`) &mdash; opens a commit on the remote provider
- _Copy Remote Commit Url_ command (`gitclassic.copyRemoteCommitUrl`) &mdash; copies the url of a commit on the remote provider
- _Open Branch on Remote_ command (`gitclassic.openBranchOnRemote`) &mdash; opens the branch on the remote provider
- _Copy Remote Branch Url_ command (`gitclassic.copyRemoteBranchUrl`) &mdash; copies the url of a branch on the remote provider
- _Open Branches on Remote_ command (`gitclassic.openBranchesOnRemote`) &mdash; opens the branches on the remote provider
- _Copy Remote Branches Url_ command (`gitclassic.copyRemoteBranchesUrl`) &mdash; copies the url of the branches on the remote provider
- _Open Comparison on Remote_ command (`gitclassic.openComparisonOnRemote`) &mdash; opens the comparison on the remote provider
- _Copy Remote Comparison Url_ command (`gitclassic.copyRemoteComparisonUrl`) &mdash; copies the url of the comparison on the remote provider
- _Open Pull Request_ command (`gitclassic.openPullRequestOnRemote`) &mdash; opens the pull request on the remote provider
- _Copy Pull Request Url_ command (`gitclassic.copyRemotePullRequestUrl`) &mdash; copies the url of the pull request on the remote provider
- _Open Repository on Remote_ command (`gitclassic.openRepoOnRemote`) &mdash; opens the repository on the remote provider
- _Copy Remote Repository Url_ command (`gitclassic.copyRemoteRepositoryUrl`) &mdash; copies the url of the repository on the remote provider

## Powerful Commands [#](#powerful-commands- 'Powerful Commands')

- Adds an _Add Co-authors_ command (`gitclassic.addAuthors`) to add a co-author to the commit message input box

- Adds a _Copy SHA_ command (`gitclassic.copyShaToClipboard`) to copy the commit SHA of the current line to the clipboard or from the most recent commit to the current branch, if there is no current editor
- Adds a _Copy Message_ command (`gitclassic.copyMessageToClipboard`) to copy the commit message of the current line to the clipboard or from the most recent commit to the current branch, if there is no current editor

- Adds a _Copy Current Branch_ command (`gitclassic.copyCurrentBranch`) to copy the name of the current branch to the clipboard

- Adds a _Switch to Another Branch_ (`gitclassic.views.switchToAnotherBranch`) command &mdash; to quickly switch the current branch

- Adds a _Compare References..._ command (`gitclassic.compareWith`) to compare two selected references
- Adds a _Compare HEAD with..._ command (`gitclassic.compareHeadWith`) to compare the index (HEAD) with the selected reference
- Adds a _Compare Working Tree with..._ command (`gitclassic.compareWorkingWith`) to compare the working tree with the selected reference

- Adds an _Open Changes (difftool)_ command (`gitclassic.externalDiff`) to open the changes of a file or set of files with the configured git difftool
- Adds an _Open All Changes (difftool)_ command (`gitclassic.externalDiffAll`) to open all working changes with the configured git difftool
- Adds an _Open Directory Compare (difftool)_ command (`gitclassic.diffDirectoryWithHead`) to compare the working tree with HEAD with the configured Git difftool
- Adds an _Open Directory Compare (difftool) with..._ command (`gitclassic.diffDirectory`) to compare the working tree with the selected reference with the configured Git difftool

- Adds an _Open File_ command (`gitclassic.openWorkingFile`) to open the working file for the current file revision
- Adds an _Open Revision..._ command (`gitclassic.openFileRevision`) to open the selected revision for the current file
- Adds an _Open Revision from..._ command (`gitclassic.openFileRevisionFrom`) to open the revision of the current file from the selected reference
- Adds an _Open Blame Prior to Change_ command (`gitclassic.openBlamePriorToChange`) to open the blame of prior revision of the selected line in the current file

- Adds a _Open Changed Files_ command (`gitclassic.openChangedFiles`) to open any files with working tree changes
- Adds a _Close Unchanged Files_ command (`gitclassic.closeUnchangedFiles`) to close any files without working tree changes

- Adds an _Enable Debug Logging_ command (`gitclassic.enableDebugLogging`) to enable debug logging to the GitClassic output channel
- Adds a _Disable Debug Logging_ command (`gitclassic.disableDebugLogging`) to disable debug logging to the GitClassic output channel

## Menus & Toolbars [#](#menus--toolbars- 'Menus & Toolbars')

<p align="center">
  <img src="images/docs/menus.png" alt="Menus &amp; Toolbars" />
</p>

GitClassic provides [customizable](#menu--toolbar-settings-) menu and toolbar contributions to put you in control over where GitClassic' commands are shown. The easiest way to configure these settings is via the GitClassic [**interactive settings editor**](#configuration- 'Jump to Configuration').

For example, if you uncheck the _Add to the editor group toolbar_ you will see the following items removed from the toolbar:

<p align="center">
  <img src="images/docs/menus-example.png" alt="Editor Group Toolbar example" />
</p>

You can also expand each group to control each area more granularly.

## Modes [#](#modes- 'Modes')

GitClassic supports [user-defined](#modes-settings- 'Jump to the Modes settings') modes for quickly toggling between sets of settings.

- Adds _Switch Mode_ command (`gitclassic.switchMode`) to quickly switch the active mode
- Adds a _Zen_ mode which for a zen-like experience, disables many visual features
  - Adds _Toggle Zen Mode_ command (`gitclassic.toggleZenMode`) to toggle Zen mode
- Adds a _Review_ mode which for reviewing code, enables many visual features
  - Adds _Toggle Review Mode_ command (`gitclassic.toggleReviewMode`) to toggle Review mode
- Adds the active mode to the **status bar** ([optional](#modes-settings- 'Jump to the Modes settings'), on by default)

# Configuration [#](#configuration- 'Configuration')

<p align="center">
  <img src="images/docs/settings.png" alt="GitClassic Interactive Settings" />
</p>

GitClassic provides a rich **interactive settings editor**, an easy-to-use interface, to configure many of GitClassic' powerful features. It can be accessed via the _GitLens: Open Settings_ (`gitclassic.showSettingsPage`) command from the [_Command Palette_](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette).

For more advanced customizations, refer to the [settings documentation](#gitclassic-settings- 'Jump to the GitClassic settings docs') below.

# GitClassic Settings [#](#gitclassic-settings- 'GitClassic Settings')

GitClassic is highly customizable and provides many configuration settings to allow the personalization of almost all features.

## Current Line Blame Settings [#](#current-line-blame-settings- 'Current Line Blame Settings')

| Name                                       | Description                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `gitclassic.currentLine.dateFormat`           | Specifies how to format absolute dates (e.g. using the `${date}` token) for the current line blame annotations. See the [Moment.js docs](https://momentjs.com/docs/#/displaying/format/) for valid formats                                                                                                      |
| `gitclassic.currentLine.enabled`              | Specifies whether to provide a blame annotation for the current line, by default. Use the _Toggle Line Blame Annotations_ command (`gitclassic.toggleLineBlame`) to toggle the annotations on and off for the current window                                                                                       |
| `gitclassic.currentLine.format`               | Specifies the format of the current line blame annotation. See [_Commit Tokens_](https://github.com/speedy37/vscode-gitclassic/wiki/Custom-Formatting#commit-tokens) in the GitClassic docs. Date formatting is controlled by the `gitclassic.currentLine.dateFormat` setting                                             |
| `gitclassic.currentLine.pullRequests.enabled` | Specifies whether to provide information about the Pull Request (if any) that introduced the commit in the current line blame annotation. Requires a connection to a supported remote service (e.g. GitHub)                                                                                                     |
| `gitclassic.currentLine.scrollable`           | Specifies whether the current line blame annotation can be scrolled into view when it is outside the viewport. **NOTE**: Setting this to `false` will inhibit the hovers from showing over the annotation; Set `gitclassic.hovers.currentLine.over` to `line` to enable the hovers to show anywhere over the line. |

## Git Code Lens Settings [#](#git-code-lens-settings- 'Git Code Lens Settings')

| Name                                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `gitclassic.codeLens.authors.command`          | Specifies the command to be executed when an _authors_ code lens is clicked, set to (`gitclassic.toggleFileBlame`) by default. Can be set to `false` to disable click actions on the code lens.<br /><br />`gitclassic.toggleFileBlame` - toggles file blame annotations<br />`gitclassic.toggleFileHeatmap` - toggles file heatmap<br />`gitclassic.toggleFileChanges` - toggles file changes since before the commit<br />`gitclassic.toggleFileChangesOnly` - toggles file changes from the commit<br />`gitclassic.diffWithPrevious` - opens changes with the previous revision<br />`gitclassic.revealCommitInView` - reveals the commit in the Side Bar<br />`gitclassic.showCommitsInView` - searches for commits within the range<br />`gitclassic.showQuickCommitDetails` - shows details of the commit<br />`gitclassic.showQuickCommitFileDetails` - show file details of the commit<br />`gitclassic.showQuickFileHistory` - shows the current file history<br />`gitclassic.showQuickRepoHistory` - shows the current branch history<br />`gitclassic.openCommitOnRemote` - opens the commit on the remote service (when available)<br />`gitclassic.copyRemoteCommitUrl` - copies the remote commit url to the clipboard (when available)<br />`gitclassic.openFileOnRemote` - opens the file revision on the remote service (when available)<br />`gitclassic.copyRemoteFileUrl` - copies the remote file url to the clipboard (when available)                 |
| `gitclassic.codeLens.authors.enabled`          | Specifies whether to provide an _authors_ code lens, showing number of authors of the file or code block and the most prominent author (if there is more than one)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `gitclassic.codeLens.enabled`                  | Specifies whether to provide any Git code lens, by default. Use the _Toggle Git Code Lens_ command (`gitclassic.toggleCodeLens`) to toggle the Git code lens on and off for the current window                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `gitclassic.codeLens.includeSingleLineSymbols` | Specifies whether to provide any Git code lens on symbols that span only a single line                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `gitclassic.codeLens.recentChange.command`     | Specifies the command to be executed when a _recent change_ code lens is clicked, set to (`gitclassic.showQuickCommitFileDetails`) by default. Can be set to `false` to disable click actions on the code lens.<br /><br />`gitclassic.toggleFileBlame` - toggles file blame annotations<br />`gitclassic.toggleFileHeatmap` - toggles file heatmap<br />`gitclassic.toggleFileChanges` - toggles file changes since before the commit<br />`gitclassic.toggleFileChangesOnly` - toggles file changes from the commit<br />`gitclassic.diffWithPrevious` - opens changes with the previous revision<br />`gitclassic.revealCommitInView` - reveals the commit in the Side Bar<br />`gitclassic.showCommitsInView` - searches for commits within the range<br />`gitclassic.showQuickCommitDetails` - shows details of the commit<br />`gitclassic.showQuickCommitFileDetails` - show file details of the commit<br />`gitclassic.showQuickFileHistory` - shows the current file history<br />`gitclassic.showQuickRepoHistory` - shows the current branch history<br />`gitclassic.openCommitOnRemote` - opens the commit on the remote service (when available)<br />`gitclassic.copyRemoteCommitUrl` - copies the remote commit url to the clipboard (when available)<br />`gitclassic.openFileOnRemote` - opens the file revision on the remote service (when available)<br />`gitclassic.copyRemoteFileUrl` - copies the remote file url to the clipboard (when available) |
| `gitclassic.codeLens.recentChange.enabled`     | Specifies whether to provide a _recent change_ code lens, showing the author and date of the most recent commit for the file or code block                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `gitclassic.codeLens.scopes`                   | Specifies where Git code lens will be shown in the document<br /><br />`document` - adds code lens at the top of the document<br />`containers` - adds code lens at the start of container-like symbols (modules, classes, interfaces, etc)<br />`blocks` - adds code lens at the start of block-like symbols (functions, methods, etc) lines                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `gitclassic.codeLens.symbolScopes`             | Specifies a set of document symbols where Git code lens will or will not be shown in the document. Prefix with `!` to avoid providing a Git code lens for the symbol. Must be a member of [`SymbolKind`](https://code.visualstudio.com/docs/extensionAPI/vscode-api#_a-namesymbolkindaspan-classcodeitem-id660symbolkindspan)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

## Status Bar Settings [#](#status-bar-settings- 'Status Bar Settings')

| Name                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `gitclassic.statusBar.alignment`            | Specifies the blame alignment in the status bar<br /><br />`left` - aligns to the left<br />`right` - aligns to the right                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `gitclassic.statusBar.command`              | Specifies the command to be executed when the blame status bar item is clicked<br /><br />`gitclassic.toggleFileBlame` - toggles file blame annotations<br />`gitclassic.toggleFileHeatmap` - toggles file heatmap<br />`gitclassic.toggleFileChanges` - toggles file changes since before the commit<br />`gitclassic.toggleFileChangesOnly` - toggles file changes from the commit<br />`gitclassic.diffWithPrevious` - opens changes with the previous revision<br />`gitclassic.revealCommitInView` - reveals the commit in the Side Bar<br />`gitclassic.showCommitsInView` - searches for commits within the range<br />`gitclassic.showQuickCommitDetails` - shows details of the commit<br />`gitclassic.showQuickCommitFileDetails` - show file details of the commit<br />`gitclassic.showQuickFileHistory` - shows the current file history<br />`gitclassic.showQuickRepoHistory` - shows the current branch history<br />`gitclassic.openCommitOnRemote` - opens the commit on the remote service (when available)<br />`gitclassic.copyRemoteCommitUrl` - copies the remote commit url to the clipboard (when available)<br />`gitclassic.openFileOnRemote` - opens the file revision on the remote service (when available)<br />`gitclassic.copyRemoteFileUrl` - copies the remote file url to the clipboard (when available) |
| `gitclassic.statusBar.dateFormat`           | Specifies how to format absolute dates (e.g. using the `${date}` token) in the blame information in the status bar. See the [Moment.js docs](https://momentjs.com/docs/#/displaying/format/) for valid formats                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `gitclassic.statusBar.enabled`              | Specifies whether to provide blame information in the status bar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `gitclassic.statusBar.format`               | Specifies the format of the blame information in the status bar. See [_Commit Tokens_](https://github.com/speedy37/vscode-gitclassic/wiki/Custom-Formatting#commit-tokens) in the GitClassic docs. Date formatting is controlled by the `gitclassic.statusBar.dateFormat` setting                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `gitclassic.statusBar.pullRequests.enabled` | Specifies whether to provide information about the Pull Request (if any) that introduced the commit in the status bar. Requires a connection to a supported remote service (e.g. GitHub)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `gitclassic.statusBar.reduceFlicker`        | Specifies whether to avoid clearing the previous blame information when changing lines to reduce status bar "flashing"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `gitclassic.statusBar.tooltipFormat`        | Specifies the format (in markdown) of hover shown over the blame information in the status bar. See [_Commit Tokens_](https://github.com/speedy37/vscode-gitclassic/wiki/Custom-Formatting#commit-tokens) in the GitClassic docs                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

## Hover Settings [#](#hover-settings- 'Hover Settings')

| Name                                   | Description                                                                                                                                                                                                              |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `gitclassic.hovers.annotations.changes`   | Specifies whether to provide a _changes (diff)_ hover for all lines when showing blame annotations                                                                                                                       |
| `gitclassic.hovers.annotations.details`   | Specifies whether to provide a _commit details_ hover for all lines when showing blame annotations                                                                                                                       |
| `gitclassic.hovers.annotations.enabled`   | Specifies whether to provide any hovers when showing blame annotations                                                                                                                                                   |
| `gitclassic.hovers.annotations.over`      | Specifies when to trigger hovers when showing blame annotations<br /><br />`annotation` - only shown when hovering over the line annotation<br />`line` - shown when hovering anywhere over the line                     |
| `gitclassic.hovers.avatars`               | Specifies whether to show avatar images in hovers                                                                                                                                                                        |
| `gitclassic.hovers.avatarSize`            | Specifies the size of the avatar images in hovers                                                                                                                                                                        |
| `gitclassic.hovers.changesDiff`           | Specifies whether to show just the changes to the line or the set of related changes in the _changes (diff)_ hover<br /><br />`line` - Shows only the changes to the line<br />`hunk` - Shows the set of related changes |
| `gitclassic.hovers.currentLine.changes`   | Specifies whether to provide a _changes (diff)_ hover for the current line                                                                                                                                               |
| `gitclassic.hovers.currentLine.details`   | Specifies whether to provide a _commit details_ hover for the current line                                                                                                                                               |
| `gitclassic.hovers.currentLine.enabled`   | Specifies whether to provide any hovers for the current line                                                                                                                                                             |
| `gitclassic.hovers.currentLine.over`      | Specifies when to trigger hovers for the current line<br /><br />`annotation` - only shown when hovering over the line annotation<br />`line` - shown when hovering anywhere over the line                               |
| `gitclassic.hovers.detailsMarkdownFormat` | Specifies the format (in markdown) of the _commit details_ hover. See [_Commit Tokens_](https://github.com/speedy37/vscode-gitclassic/wiki/Custom-Formatting#commit-tokens) in the GitClassic docs                              |
| `gitclassic.hovers.enabled`               | Specifies whether to provide any hovers                                                                                                                                                                                  |
| `gitclassic.hovers.autolinks.enabled`     | Specifies whether to automatically link external resources in commit messages                                                                                                                                            |
| `gitclassic.hovers.autolinks.enhanced`    | Specifies whether to lookup additional details about automatically link external resources in commit messages. Requires a connection to a supported remote service (e.g. GitHub)                                         |
| `gitclassic.hovers.pullRequests.enabled`  | Specifies whether to provide information about the Pull Request (if any) that introduced the commit in the hovers. Requires a connection to a supported remote service (e.g. GitHub)                                     |

## View Settings [#](#view-settings- 'View Settings')

| Name                                        | Description                                                                                                                                                                         |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `gitclassic.views.defaultItemLimit`            | Specifies the default number of items to show in a view list. Use 0 to specify no limit                                                                                             |
| `gitclassic.views.formats.commits.label`       | Specifies the format of commits in the views. See [_Commit Tokens_](https://github.com/speedy37/vscode-gitclassic/wiki/Custom-Formatting#commit-tokens) in the GitClassic docs             |
| `gitclassic.views.formats.commits.description` | Specifies the description format of commits in the views. See [_Commit Tokens_](https://github.com/speedy37/vscode-gitclassic/wiki/Custom-Formatting#commit-tokens) in the GitClassic docs |
| `gitclassic.views.formats.files.label`         | Specifies the format of a file in the views. See [_File Tokens_](https://github.com/speedy37/vscode-gitclassic/wiki/Custom-Formatting#file-tokens) in the GitClassic docs                  |
| `gitclassic.views.formats.files.description`   | Specifies the description format of a file in the views. See [_File Tokens_](https://github.com/speedy37/vscode-gitclassic/wiki/Custom-Formatting#file-tokens) in the GitClassic docs      |
| `gitclassic.views.formats.stashes.label`       | Specifies the format of stashes in the views. See [_Commit Tokens_](https://github.com/speedy37/vscode-gitclassic/wiki/Custom-Formatting#commit-tokens) in the GitClassic docs             |
| `gitclassic.views.formats.stashes.description` | Specifies the description format of stashes in the views. See [_Commit Tokens_](https://github.com/speedy37/vscode-gitclassic/wiki/Custom-Formatting#commit-tokens) in the GitClassic docs |
| `gitclassic.views.pageItemLimit`               | Specifies the number of items to show in a each page when paginating a view list. Use 0 to specify no limit                                                                         |
| `gitclassic.views.showRelativeDateMarkers`     | Specifies whether to show relative date markers (_Less than a week ago_, _Over a week ago_, _Over a month ago_, etc) on revision (commit) histories in the views                    |

## Commits View Settings [#](#commits-view-settings- 'Commits View Settings')

See also [View Settings](#view-settings- 'Jump to the View settings')

| Name                                                 | Description                                                                                                                                                                                                                                                                                                                                                    |
| ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `gitclassic.views.commits.avatars`                      | Specifies whether to show avatar images instead of commit (or status) icons in the _Commits_ view                                                                                                                                                                                                                                                              |
| `gitclassic.views.commits.files.compact`                | Specifies whether to compact (flatten) unnecessary file nesting in the _Commits_ view.<br />Only applies when `gitclassic.views.commits.files.layout` is set to `tree` or `auto`                                                                                                                                                                                  |
| `gitclassic.views.commits.files.layout`                 | Specifies how the _Commits_ view will display files<br /><br />`auto` - automatically switches between displaying files as a `tree` or `list` based on the `gitclassic.views.commits.files.threshold` value and the number of files at each nesting level<br />`list` - displays files as a list<br />`tree` - displays files as a tree                           |
| `gitclassic.views.commits.files.threshold`              | Specifies when to switch between displaying files as a `tree` or `list` based on the number of files in a nesting level in the _Commits_ view<br />Only applies when `gitclassic.views.commits.files.layout` is set to `auto`                                                                                                                                     |
| `gitclassic.views.commits.pullRequests.enabled`         | Specifies whether to query for pull requests associated with the current branch and commits in the _Commits_ view. Requires a connection to a supported remote service (e.g. GitHub)                                                                                                                                                                           |
| `gitclassic.views.commits.pullRequests.showForBranches` | Specifies whether to query for pull requests associated with the current branch and commits in the _Commits_ view. Requires a connection to a supported remote service (e.g. GitHub)                                                                                                                                                                           |
| `gitclassic.views.commits.pullRequests.showForCommits`  | Specifies whether to show pull requests (if any) associated with the current branch in the _Commits_ view. Requires a connection to a supported remote service (e.g. GitHub)                                                                                                                                                                                   |
| `gitclassic.views.commits.reveal`                       | Specifies whether to reveal commits in the _Commits_ view, otherwise they will be revealed in the _Repositories_ view                                                                                                                                                                                                                                          |
| `gitclassic.views.commits.showBranchComparison`         | Specifies whether to show a comparison of the current branch or the working tree with a user-selected reference (branch, tag. etc) in the _Commits_ view<br /><br />`false` - hides the branch comparison<br />`branch` - compares the current branch with a user-selected reference<br />`working` - compares the working tree with a user-selected reference |

## Repositories View Settings [#](#repositories-view-settings- 'Repositories View Settings')

See also [View Settings](#view-settings- 'Jump to the View settings')

| Name                                                       | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `gitclassic.views.repositories.avatars`                       | Specifies whether to show avatar images instead of commit (or status) icons in the _Repositories_ view                                                                                                                                                                                                                                         |
| `gitclassic.views.repositories.autoRefresh`                   | Specifies whether to automatically refresh the _Repositories_ view when the repository or the file system changes                                                                                                                                                                                                                              |
| `gitclassic.views.repositories.autoReveal`                    | Specifies whether to automatically reveal repositories in the _Repositories_ view when opening files                                                                                                                                                                                                                                           |
| `gitclassic.views.repositories.branches.layout`               | Specifies how the _Repositories_ view will display branches<br /><br />`list` - displays branches as a list<br />`tree` - displays branches as a tree when branch names contain slashes `/`                                                                                                                                                    |
| `gitclassic.views.repositories.branches.showBranchComparison` | Specifies whether to show a comparison of the branch with a user-selected reference (branch, tag. etc) under each branch in the _Repositories_ view view                                                                                                                                                                                       |
| `gitclassic.views.repositories.compact`                       | Specifies whether to show the _Repositories_ view in a compact display density                                                                                                                                                                                                                                                                 |
| `gitclassic.views.repositories.files.compact`                 | Specifies whether to compact (flatten) unnecessary file nesting in the _Repositories_ view. Only applies when `gitclassic.views.repositories.files.layout` is set to `tree` or `auto`                                                                                                                                                             |
| `gitclassic.views.repositories.files.layout`                  | Specifies how the _Repositories_ view will display files<br /><br />`auto` - automatically switches between displaying files as a `tree` or `list` based on the `gitclassic.views.repositories.files.threshold` value and the number of files at each nesting level<br />`list` - displays files as a list<br />`tree` - displays files as a tree |
| `gitclassic.views.repositories.files.threshold`               | Specifies when to switch between displaying files as a `tree` or `list` based on the number of files in a nesting level in the _Repositories_ view. Only applies when `gitclassic.views.repositories.files.layout` is set to `auto`                                                                                                               |
| `gitclassic.views.repositories.includeWorkingTree`            | Specifies whether to include working tree file status for each repository in the _Repositories_ view                                                                                                                                                                                                                                           |
| `gitclassic.views.repositories.showBranchComparison`          | Specifies whether to show a comparison of a user-selected reference (branch, tag. etc) to the current branch or the working tree in the _Repositories_ view                                                                                                                                                                                    |
| `gitclassic.views.repositories.showBranches`                  | Specifies whether to show the branches for each repository in the _Repositories_ view                                                                                                                                                                                                                                                          |
| `itlens.views.repositories.showCommits`                    | Specifies whether to show the commits on the current branch for each repository in the _Repositories_ view                                                                                                                                                                                                                                     |
| `gitclassic.views.repositories.showContributors`              | Specifies whether to show the contributors for each repository in the _Repositories_ view                                                                                                                                                                                                                                                      |
| `gitclassic.views.repositories.showIncomingActivity`          | Specifies whether to show the experimental incoming activity for each repository in the _Repositories_ view                                                                                                                                                                                                                                    |
| `gitclassic.views.repositories.showRemotes`                   | Specifies whether to show the remotes for each repository in the _Repositories_ view                                                                                                                                                                                                                                                           |
| `gitclassic.views.repositories.showStashes`                   | Specifies whether to show the stashes for each repository in the _Repositories_ view                                                                                                                                                                                                                                                           |
| `gitclassic.views.repositories.showTags`                      | Specifies whether to show the tags for each repository in the _Repositories_ view                                                                                                                                                                                                                                                              |
| `gitclassic.views.repositories.showUpstreamStatus`            | Specifies whether to show the upstream status of the current branch for each repository in the _Repositories_ view                                                                                                                                                                                                                             |

## File History View Settings [#](#file-history-view-settings- 'File History View Settings')

See also [View Settings](#view-settings- 'Jump to the View settings')

| Name                                | Description                                                                                |
| ----------------------------------- | ------------------------------------------------------------------------------------------ |
| `gitclassic.views.fileHistory.avatars` | Specifies whether to show avatar images instead of status icons in the _File History_ view |

## Line History View Settings [#](#line-history-view-settings- 'Line History View Settings')

See also [View Settings](#view-settings- 'Jump to the View settings')

| Name                                | Description                                                                                |
| ----------------------------------- | ------------------------------------------------------------------------------------------ |
| `gitclassic.views.lineHistory.avatars` | Specifies whether to show avatar images instead of status icons in the _Line History_ view |

## Branches View Settings [#](#branches-view-settings- 'Branches View Settings')

See also [View Settings](#view-settings- 'Jump to the View settings')

| Name                                                  | Description                                                                                                                                                                                                                                                                                                                           |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `gitclassic.views.branches.avatars`                      | Specifies whether to show avatar images instead of commit (or status) icons in the _Branches_ view                                                                                                                                                                                                                                    |
| `gitclassic.views.branches.branches.layout`              | Specifies how the _Branches_ view will display branches<br /><br />`list` - displays branches as a list<br />`tree` - displays branches as a tree                                                                                                                                                                                     |
| `gitclassic.views.branches.files.compact`                | Specifies whether to compact (flatten) unnecessary file nesting in the _Branches_ view.<br />Only applies when `gitclassic.views.commits.files.layout` is set to `tree` or `auto`                                                                                                                                                        |
| `gitclassic.views.branches.files.layout`                 | Specifies how the _Branches_ view will display files<br /><br />`auto` - automatically switches between displaying files as a `tree` or `list` based on the `gitclassic.views.commits.files.threshold` value and the number of files at each nesting level<br />`list` - displays files as a list<br />`tree` - displays files as a tree |
| `gitclassic.views.branches.files.threshold`              | Specifies when to switch between displaying files as a `tree` or `list` based on the number of files in a nesting level in the _Branches_ view<br />Only applies when `gitclassic.views.commits.files.layout` is set to `auto`                                                                                                           |
| `gitclassic.views.branches.pullRequests.enabled`         | Specifies whether to query for pull requests associated with the current branch and commits in the _Branches_ view. Requires a connection to a supported remote service (e.g. GitHub)                                                                                                                                                 |
| `gitclassic.views.branches.pullRequests.showForBranches` | Specifies whether to query for pull requests associated with the current branch and commits in the _Branches_ view. Requires a connection to a supported remote service (e.g. GitHub)                                                                                                                                                 |
| `gitclassic.views.branches.pullRequests.showForCommits`  | Specifies whether to show pull requests (if any) associated with the current branch in the _Branches_ view. Requires a connection to a supported remote service (e.g. GitHub)                                                                                                                                                         |
| `gitclassic.views.branches.reveal`                       | Specifies whether to reveal branches in the _Branches_ view, otherwise they will be revealed in the _Repositories_ view                                                                                                                                                                                                               |
| `gitclassic.views.branches.showBranchComparison`         | Specifies whether to show a comparison of the branch with a user-selected reference (branch, tag. etc) in the _Branches_ view<br /><br />`false` - hides the branch comparison<br />`branch` - compares the current branch with a user-selected reference                                                                             |

## Remotes View Settings [#](#remotes-view-settings- 'Remotes View Settings')

See also [View Settings](#view-settings- 'Jump to the View settings')

| Name                                                 | Description                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `gitclassic.views.remotes.avatars`                      | Specifies whether to show avatar images instead of commit (or status) icons in the _Remotes_ view                                                                                                                                                                                                                                    |
| `gitclassic.views.remotes.branches.layout`              | Specifies how the _Remotes_ view will display branches<br /><br />`list` - displays branches as a list<br />`tree` - displays branches as a tree                                                                                                                                                                                     |
| `gitclassic.views.remotes.files.compact`                | Specifies whether to compact (flatten) unnecessary file nesting in the _Remotes_ view.<br />Only applies when `gitclassic.views.commits.files.layout` is set to `tree` or `auto`                                                                                                                                                        |
| `gitclassic.views.remotes.files.layout`                 | Specifies how the _Remotes_ view will display files<br /><br />`auto` - automatically switches between displaying files as a `tree` or `list` based on the `gitclassic.views.commits.files.threshold` value and the number of files at each nesting level<br />`list` - displays files as a list<br />`tree` - displays files as a tree |
| `gitclassic.views.remotes.files.threshold`              | Specifies when to switch between displaying files as a `tree` or `list` based on the number of files in a nesting level in the _Remotes_ view<br />Only applies when `gitclassic.views.commits.files.layout` is set to `auto`                                                                                                           |
| `gitclassic.views.remotes.pullRequests.enabled`         | Specifies whether to query for pull requests associated with the current branch and commits in the _Remotes_ view. Requires a connection to a supported remote service (e.g. GitHub)                                                                                                                                                 |
| `gitclassic.views.remotes.pullRequests.showForBranches` | Specifies whether to query for pull requests associated with the current branch and commits in the _Remotes_ view. Requires a connection to a supported remote service (e.g. GitHub)                                                                                                                                                 |
| `gitclassic.views.remotes.pullRequests.showForCommits`  | Specifies whether to show pull requests (if any) associated with the current branch in the _Remotes_ view. Requires a connection to a supported remote service (e.g. GitHub)                                                                                                                                                         |
| `gitclassic.views.remotes.reveal`                       | Specifies whether to reveal remotes in the _Remotes_ view, otherwise they will be revealed in the _Repositories_ view                                                                                                                                                                                                                |
| `gitclassic.views.remotes.showBranchComparison`         | Specifies whether to show a comparison of the branch with a user-selected reference (branch, tag. etc) in the _Remotes_ view<br /><br />`false` - hides the branch comparison<br />`branch` - compares the current branch with a user-selected reference                                                                             |

## Stashes View Settings [#](#stashes-view-settings- 'Stashes View Settings')

See also [View Settings](#view-settings- 'Jump to the View settings')

| Name                                    | Description                                                                                                                                                                                                                                                                                                                          |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `gitclassic.views.stashes.files.compact`   | Specifies whether to compact (flatten) unnecessary file nesting in the _Stashes_ view.<br />Only applies when `gitclassic.views.commits.files.layout` is set to `tree` or `auto`                                                                                                                                                        |
| `gitclassic.views.stashes.files.layout`    | Specifies how the _Stashes_ view will display files<br /><br />`auto` - automatically switches between displaying files as a `tree` or `list` based on the `gitclassic.views.commits.files.threshold` value and the number of files at each nesting level<br />`list` - displays files as a list<br />`tree` - displays files as a tree |
| `gitclassic.views.stashes.files.threshold` | Specifies when to switch between displaying files as a `tree` or `list` based on the number of files in a nesting level in the _Stashes_ view<br />Only applies when `gitclassic.views.commits.files.layout` is set to `auto`                                                                                                           |
| `gitclassic.views.stashes.reveal`          | Specifies whether to reveal stashes in the _Stashes_ view, otherwise they will be revealed in the _Repositories_ view                                                                                                                                                                                                                |

## Tags View Settings [#](#tags-view-settings- 'Tags View Settings')

See also [View Settings](#view-settings- 'Jump to the View settings')

| Name                                 | Description                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `gitclassic.views.tags.avatars`         | Specifies whether to show avatar images instead of commit (or status) icons in the _Tags_ view                                                                                                                                                                                                                                    |
| `gitclassic.views.tags.branches.layout` | Specifies how the _Tags_ view will display tags<br /><br />`list` - displays tags as a list<br />`tree` - displays tags as a tree                                                                                                                                                                                                 |
| `gitclassic.views.tags.files.compact`   | Specifies whether to compact (flatten) unnecessary file nesting in the _Tags_ view.<br />Only applies when `gitclassic.views.commits.files.layout` is set to `tree` or `auto`                                                                                                                                                        |
| `gitclassic.views.tags.files.layout`    | Specifies how the _Tags_ view will display files<br /><br />`auto` - automatically switches between displaying files as a `tree` or `list` based on the `gitclassic.views.commits.files.threshold` value and the number of files at each nesting level<br />`list` - displays files as a list<br />`tree` - displays files as a tree |
| `gitclassic.views.tags.files.threshold` | Specifies when to switch between displaying files as a `tree` or `list` based on the number of files in a nesting level in the _Tags_ view<br />Only applies when `gitclassic.views.commits.files.layout` is set to `auto`                                                                                                           |
| `gitclassic.views.tags.reveal`          | Specifies whether to reveal tags in the _Tags_ view, otherwise they will be revealed in the _Repositories_ view                                                                                                                                                                                                                   |

## Contributors View Settings [#](#contributors-view-settings- 'Contributors View Settings')

See also [View Settings](#view-settings- 'Jump to the View settings')

| Name                                                     | Description                                                                                                                                                                                                                                                                                                                               |
| -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `gitclassic.views.contributors.avatars`                     | Specifies whether to show avatar images instead of commit (or status) icons in the _Contributors_ view                                                                                                                                                                                                                                    |
| `gitclassic.views.contributors.files.compact`               | Specifies whether to compact (flatten) unnecessary file nesting in the _Contributors_ view.<br />Only applies when `gitclassic.views.commits.files.layout` is set to `tree` or `auto`                                                                                                                                                        |
| `gitclassic.views.contributors.files.layout`                | Specifies how the _Contributors_ view will display files<br /><br />`auto` - automatically switches between displaying files as a `tree` or `list` based on the `gitclassic.views.commits.files.threshold` value and the number of files at each nesting level<br />`list` - displays files as a list<br />`tree` - displays files as a tree |
| `gitclassic.views.contributors.files.threshold`             | Specifies when to switch between displaying files as a `tree` or `list` based on the number of files in a nesting level in the _Contributors_ view<br />Only applies when `gitclassic.views.commits.files.layout` is set to `auto`                                                                                                           |
| `gitclassic.views.contributors.pullRequests.enabled`        | Specifies whether to query for pull requests associated with the current branch and commits in the _Contributors_ view. Requires a connection to a supported remote service (e.g. GitHub)                                                                                                                                                 |
| `gitclassic.views.contributors.pullRequests.showForCommits` | Specifies whether to show pull requests (if any) associated with the current branch in the _Contributors_ view. Requires a connection to a supported remote service (e.g. GitHub)                                                                                                                                                         |
| `gitclassic.views.contributors.showAllBranches`             | Specifies whether to show commits from all branches in the _Contributors_ view                                                                                                                                                                                                                                                            |
| `gitclassic.views.contributors.showStatistics`              | Specifies whether to show contributor statistics in the _Contributors_ view. This can take a while to compute depending on the repository size                                                                                                                                                                                            |

## Search & Compare View Settings [#](#search-&-compare-view-settings- 'Search & Compare View Settings')

See also [View Settings](#view-settings- 'Jump to the View settings')

| Name                                    | Description                                                                                                                                                                                                                                                                                                                           |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `gitclassic.views.compare.files.threshold` | Specifies when to switch between displaying files as a `tree` or `list` based on the number of files in a nesting level in the _Search Commits_ view<br />Only applies when `gitclassic.views.compare.files.layout` is set to `auto`                                                                                                     |
| `gitclassic.views.compare.avatars`         | Specifies whether to show avatar images instead of commit (or status) icons in the _Compare_ view                                                                                                                                                                                                                                     |
| `gitclassic.views.compare.files.compact`   | Specifies whether to compact (flatten) unnecessary file nesting in the _Compare_ view. Only applies when `gitclassic.views.compare.files.layout` is set to `tree` or `auto`                                                                                                                                                              |
| `gitclassic.views.compare.files.layout`    | Specifies how the _Compare_ view will display files<br /><br />`auto` - automatically switches between displaying files as a `tree` or `list` based on the `gitclassic.views.compare.files.threshold` value and the number of files at each nesting level<br />`list` - displays files as a list<br />`tree` - displays files as a tree  |
| `gitclassic.views.compare.files.threshold` | Specifies when to switch between displaying files as a `tree` or `list` based on the number of files in a nesting level in the _Compare_ view. Only applies when `gitclassic.views.compare.files.layout` is set to `auto`                                                                                                                |
| `gitclassic.views.search.avatars`          | Specifies whether to show avatar images instead of commit (or status) icons in the _Search Commits_ view                                                                                                                                                                                                                              |
| `gitclassic.views.search.files.compact`    | Specifies whether to compact (flatten) unnecessary file nesting in the _Search Commits_ view<br />Only applies when `gitclassic.views.compare.files.layout` is set to `tree` or `auto`                                                                                                                                                   |
| `gitclassic.views.search.files.layout`     | Specifies how the _Search Commits_ view will display files<br />`auto` - automatically switches between displaying files as a `tree` or `list` based on the `gitclassic.views.compare.files.threshold` value and the number of files at each nesting level<br />`list` - displays files as a list<br />`tree` - displays files as a tree |

## Gutter Blame Settings [#](#gutter-blame-settings- 'Gutter Blame Settings')

| Name                                | Description                                                                                                                                                                                                                                                                  |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `gitclassic.blame.avatars`             | Specifies whether to show avatar images in the gutter blame annotations                                                                                                                                                                                                      |
| `gitclassic.blame.compact`             | Specifies whether to compact (deduplicate) matching adjacent gutter blame annotations                                                                                                                                                                                        |
| `gitclassic.blame.dateFormat`          | Specifies how to format absolute dates (e.g. using the `${date}` token) in gutter blame annotations. See the [Moment.js docs](https://momentjs.com/docs/#/displaying/format/) for valid formats                                                                              |
| `gitclassic.blame.format`              | Specifies the format of the gutter blame annotations. See [_Commit Tokens_](https://github.com/speedy37/vscode-gitclassic/wiki/Custom-Formatting#commit-tokens) in the GitClassic docs. Date formatting is controlled by the `gitclassic.blame.dateFormat` setting                     |
| `gitclassic.blame.heatmap.enabled`     | Specifies whether to provide a heatmap indicator in the gutter blame annotations                                                                                                                                                                                             |
| `gitclassic.blame.heatmap.location`    | Specifies where the heatmap indicators will be shown in the gutter blame annotations<br /><br />`left` - adds a heatmap indicator on the left edge of the gutter blame annotations<br />`right` - adds a heatmap indicator on the right edge of the gutter blame annotations |
| `gitclassic.blame.highlight.enabled`   | Specifies whether to highlight lines associated with the current line                                                                                                                                                                                                        |
| `gitclassic.blame.highlight.locations` | Specifies where the associated line highlights will be shown<br /><br />`gutter` - adds a gutter indicator<br />`line` - adds a full-line highlight background color<br />`overview` - adds a decoration to the overview ruler (scroll bar)                                  |
| `gitclassic.blame.ignoreWhitespace`    | Specifies whether to ignore whitespace when comparing revisions during blame operations                                                                                                                                                                                      |
| `gitclassic.blame.separateLines`       | Specifies whether gutter blame annotations will have line separators                                                                                                                                                                                                         |
| `gitclassic.blame.toggleMode`          | Specifies how the gutter blame annotations will be toggled<br /><br />`file` - toggles each file individually<br />`window` - toggles the window, i.e. all files at once                                                                                                     |

## Gutter Changes Settings [#](#gutter-changes-settings- 'Gutter Changes Settings')

| Name                         | Description                                                                                                                                                                                         |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `gitclassic.changes.locations`  | Specifies where the indicators of the gutter changes annotations will be shown<br /><br />`gutter` - adds a gutter indicator<br />`overview` - adds a decoration to the overview ruler (scroll bar) |
| `gitclassic.changes.toggleMode` | Specifies how the gutter changes annotations will be toggled<br /><br />`file` - toggles each file individually<br />`window` - toggles the window, i.e. all files at once                          |

## Gutter Heatmap Settings [#](#gutter-heatmap-settings- 'Gutter Heatmap Settings')

| Name                           | Description                                                                                                                                                                                                     |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `gitclassic.heatmap.ageThreshold` | Specifies the age of the most recent change (in days) after which the gutter heatmap annotations will be cold rather than hot (i.e. will use `gitclassic.heatmap.coldColor` instead of `gitclassic.heatmap.hotColor`) |
| `gitclassic.heatmap.coldColor`    | Specifies the base color of the gutter heatmap annotations when the most recent change is older (cold) than the `gitclassic.heatmap.ageThreshold` value                                                            |
| `gitclassic.heatmap.hotColor`     | Specifies the base color of the gutter heatmap annotations when the most recent change is newer (hot) than the `gitclassic.heatmap.ageThreshold` value                                                             |
| `gitclassic.heatmap.locations`    | Specifies where the indicators of the gutter heatmap annotations will be shown<br /><br />`gutter` - adds a gutter indicator<br />`overview` - adds a decoration to the overview ruler (scroll bar)             |
| `gitclassic.heatmap.toggleMode`   | Specifies how the gutter heatmap annotations will be toggled<br /><br />`file` - toggles each file individually<br />`window` - toggles the window, i.e. all files at once                                      |

## Git Command Palette Settings [#](#git-command-palette-settings- 'Git Command Palette Settings')

| Name                                              | Description                                                                                                                                                   |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `gitclassic.gitCommands.closeOnFocusOut`             | Specifies whether to dismiss the _Git Commands Palette_ when focus is lost (if not, press `ESC` to dismiss)                                                   |
| `gitclassic.gitCommands.search.matchAll`             | Specifies whether to match all or any commit message search patterns                                                                                          |
| `gitclassic.gitCommands.search.matchCase`            | Specifies whether to match commit search patterns with or without regard to casing                                                                            |
| `gitclassic.gitCommands.search.matchRegex`           | Specifies whether to match commit search patterns using regular expressions                                                                                   |
| `gitclassic.gitCommands.search.showResultsInSideBar` | Specifies whether to show the commit search results directly in the quick pick menu, in the Side Bar, or will be based on the context                         |
| `gitclassic.gitCommands.skipConfirmations`           | Specifies which (and when) Git commands will skip the confirmation step, using the format: `git-command-name:(menu/command)`                                  |
| `gitclassic.gitCommands.sortBy`                      | Specifies how Git commands are sorted in the _Git Command Palette_<br /><br />`name` - sorts commands by name<br />`usage` - sorts commands by last used date |

## Terminal Links Settings [#](#terminal-links-settings- 'Terminal Links Settings')

| Name                            | Description                                                                                                                                                   |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `gitclassic.terminalLinks.enabled` | Specifies whether to enable terminal links &mdash; autolinks in the integrated terminal to quickly jump to more details for commits, branches, tags, and more |

## Remote Provider Integration Settings [#](#remote-provider-integration-settings- 'Remote Provider Integration Settings')

| Name                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `gitclassic.integrations.enabled` | Specifies whether to enable rich integrations with any supported remote services                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `gitclassic.remotes`              | Specifies custom remote services to be matched with Git remotes to detect custom domains for built-in remote services or provide support for custom remote services<br /><br />Supported Types (e.g. `"type": "GitHub"`):<ul><li>"GitHub"</li><li>"GitLab"</li><li>"Gerrit"</li><li>"Gitea"</li><li>"AzureDevOps"</li><li>"Bitbucket"</li><li>"BitbucketServer"</li><li>"Custom"</li></ul>Example:<br />`"gitclassic.remotes": [{ "domain": "git.corporate-url.com", "type": "GitHub" }]`<br /><br />Example:<br />`"gitclassic.remotes": [{ "regex": "ssh:\/\/(my\.company\.com):1234\/git\/(.+)", "type": "GitHub" }]`<br /><br />Example:<br />`"gitclassic.remotes": [{`<br />&nbsp;&nbsp;&nbsp;&nbsp;`"domain": "git.corporate-url.com",`<br />&nbsp;&nbsp;&nbsp;&nbsp;`"type": "Custom",`<br />&nbsp;&nbsp;&nbsp;&nbsp;`"name": "My Company",`<br />&nbsp;&nbsp;&nbsp;&nbsp;`"protocol": "https",`<br />&nbsp;&nbsp;&nbsp;&nbsp;`"urls": {`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"repository": "https://git.corporate-url.com/${repo}",`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"branches": "https://git.corporate-url.com/${repo}/branches",`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"branch": "https://git.corporate-url.com/${repo}/commits/${branch}",`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"commit": "https://git.corporate-url.com/${repo}/commit/${id}",`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"file": "https://git.corporate-url.com/${repo}?path=${file}${line}",`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"fileInBranch": "https://git.corporate-url.com/${repo}/blob/${branch}/${file}${line}",`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"fileInCommit": "https://git.corporate-url.com/${repo}/blob/${id}/${file}${line}",`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"fileLine": "#L${line}",`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"fileRange": "#L${start}-L${end}"`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`}`<br />&nbsp;&nbsp;&nbsp;&nbsp;`}]`<br /><br />Example:<br />`"gitclassic.remotes": [{`<br />&nbsp;&nbsp;&nbsp;&nbsp;`"regex": "ssh:\\/\\/(my\\.company\\.com):1234\\/git\\/(.+)",`<br />&nbsp;&nbsp;&nbsp;&nbsp;`"type": "Custom",`<br />&nbsp;&nbsp;&nbsp;&nbsp;`"name": "My Company",`<br />&nbsp;&nbsp;&nbsp;&nbsp;`"protocol": "https",`<br />&nbsp;&nbsp;&nbsp;&nbsp;`"urls": {`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"repository": "https://my.company.com/projects/${repoBase}/repos/${repoPath}",`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"branches": "https://my.company.com/projects/${repoBase}/repos/${repoPath}/branches",`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"branch": "https://my.company.com/projects/${repoBase}/repos/${repoPath}/commits/${branch}",`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"commit": "https://my.company.com/projects/${repoBase}/repos/${repoPath}/commit/${id}",`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"file": "https://my.company.com/projects/${repoBase}/repos/${repoPath}?path=${file}${line}",`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"fileInBranch": "https://my.company.com/projects/${repoBase}/repos/${repoPath}/blob/${branch}/${file}${line}",`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"fileInCommit": "https://my.company.com/projects/${repoBase}/repos/${repoPath}/blob/${id}/${file}${line}",`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"fileLine": "#L${line}",`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"fileRange": "#L${start}-L${end}"`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`}`<br />&nbsp;&nbsp;&nbsp;&nbsp;`}]` |

## Date & Time Settings [#](#date--time-settings- 'Date & Time Settings')

| Name                             | Description                                                                                                                                                 |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `gitclassic.defaultDateFormat`      | Specifies how absolute dates will be formatted by default. See the [Moment.js docs](https://momentjs.com/docs/#/displaying/format/) for valid formats       |
| `gitclassic.defaultDateShortFormat` | Specifies how short absolute dates will be formatted by default. See the [Moment.js docs](https://momentjs.com/docs/#/displaying/format/) for valid formats |
| `gitclassic.defaultDateSource`      | Specifies whether commit dates should use the authored or committed date                                                                                    |
| `gitclassic.defaultDateStyle`       | Specifies how dates will be displayed by default                                                                                                            |
| `gitclassic.defaultTimeFormat`      | Specifies how times will be formatted by default. See the [Moment.js docs](https://momentjs.com/docs/#/displaying/format/) for valid formats                |

## Menu & Toolbar Settings [#](#menu--toolbar-settings- 'Menu & Toolbar Settings')

| Name                              | Description                                                                                                                                                                                                                                                                                                                                                                  |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `gitclassic.menus`                   | Specifies which commands will be added to which menus                                                                                                                                                                                                                                                                                                                        |
| `gitclassic.fileAnnotations.command` | Specifies whether the file annotations button in the editor title shows a menu or immediately toggles the specified file annotations<br />`null` (default) - shows a menu to choose which file annotations to toggle<br />`blame` - toggles gutter blame annotations<br />`heatmap` - toggles gutter heatmap annotations<br />`changes` - toggles gutter changes annotations |

## Keyboard Shortcut Settings [#](#keyboard-shortcut-settings- 'Keyboard Shortcut Settings')

| Name             | Description                                                                                                                                                                                                                                                                                                                                |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `gitclassic.keymap` | Specifies the keymap to use for GitClassic shortcut keys<br /><br />`alternate` - adds an alternate set of shortcut keys that start with `Alt` (&#x2325; on macOS)<br />`chorded` - adds a chorded set of shortcut keys that start with `Ctrl+Shift+G` (<code>&#x2325;&#x2318;G</code> on macOS)<br />`none` - no shortcut keys will be added |

## Modes Settings [#](#modes-settings- 'Modes Settings')

| Name                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `gitclassic.mode.active`              | Specifies the active GitClassic mode, if any                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `gitclassic.mode.statusBar.enabled`   | Specifies whether to provide the active GitClassic mode in the status bar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `gitclassic.mode.statusBar.alignment` | Specifies the active GitClassic mode alignment in the status bar<br /><br />`left` - aligns to the left<br />`right` - aligns to the right                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `gitclassic.modes`                    | Specifies the user-defined GitClassic modes<br /><br />Example &mdash; adds heatmap annotations to the _Reviewing_ mode<br />`"gitclassic.modes": { "review": { "annotations": "heatmap" } }`<br /><br />Example &mdash; adds a new _Annotating_ mode with blame annotations<br />`"gitclassic.modes": {`<br />&nbsp;&nbsp;&nbsp;&nbsp;`"annotate": {`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"name": "Annotating",`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"statusBarItemName": "Annotating",`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"description": "for root cause analysis",`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"annotations": "blame",`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"codeLens": false,`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"currentLine": false,`<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"hovers": true`<br />&nbsp;&nbsp;&nbsp;&nbsp;`}`<br />`}` |

## Autolink Settingss [#](#autolink-settings- 'Autolink Settings')

| Name                | Description                                                                                                                                                                                                                                                                                                                          |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `gitclassic.autolinks` | Specifies autolinks to external resources in commit messages. Use `<num>` as the variable for the reference number<br /><br />Example to autolink Jira issues: (e.g. `JIRA-123 ⟶ https://jira.company.com/issue?query=123`)<br />`"gitclassic.autolinks": [{ "prefix": "JIRA-", "url": "https://jira.company.com/issue?query=<num>" }]` |

## Misc Settings [#](#misc-settings- 'Misc Settings')

| Name                                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `gitclassic.defaultGravatarsStyle`                                  | Specifies the style of the gravatar default (fallback) images<br /><br />`identicon` - a geometric pattern<br />`mp` - a simple, cartoon-style silhouetted outline of a person (does not vary by email hash)<br />`monsterid` - a monster with different colors, faces, etc<br />`retro` - 8-bit arcade-style pixelated faces<br />`robohash` - a robot with different colors, faces, etc<br />`wavatar` - a face with differing features and backgrounds |
| `gitclassic.liveshare.allowGuestAccess`                             | Specifies whether to allow guest access to GitClassic features when using Visual Studio Live Share                                                                                                                                                                                                                                                                                                                                                           |
| `gitclassic.outputLevel`                                            | Specifies how much (if any) output will be sent to the GitClassic output channel                                                                                                                                                                                                                                                                                                                                                                             |
| `gitclassic.showWelcomeOnInstall`                                   | Specifies whether to show the Welcome (Quick Setup) experience on first install                                                                                                                                                                                                                                                                                                                                                                           |
| `gitclassic.showWhatsNewAfterUpgrades`                              | Specifies whether to show the What's New notification after upgrading to new feature releases                                                                                                                                                                                                                                                                                                                                                             |
| `gitclassic.sortBranchesBy`                                         | Specifies how branches are sorted in quick pick menus and views                                                                                                                                                                                                                                                                                                                                                                                           |
| `gitclassic.sortContributorsBy`                                     | Specifies how contributors are sorted in quick pick menus and views                                                                                                                                                                                                                                                                                                                                                                                       |
| `gitclassic.sortTagsBy`                                             | Specifies how tags are sorted in quick pick menus and views                                                                                                                                                                                                                                                                                                                                                                                               |
| `gitclassic.advanced.abbreviatedShaLength`                          | Specifies the length of abbreviated commit SHAs (shas)                                                                                                                                                                                                                                                                                                                                                                                                    |
| `gitclassic.advanced.abbreviateShaOnCopy`                           | Specifies whether to copy full or abbreviated commit SHAs to the clipboard. Abbreviates to the length of `gitclassic.advanced.abbreviatedShaLength`..                                                                                                                                                                                                                                                                                                        |
| `gitclassic.advanced.blame.customArguments`                         | Specifies additional arguments to pass to the `git blame` command                                                                                                                                                                                                                                                                                                                                                                                         |
| `gitclassic.advanced.blame.delayAfterEdit`                          | Specifies the time (in milliseconds) to wait before re-blaming an unsaved document after an edit. Use 0 to specify an infinite wait                                                                                                                                                                                                                                                                                                                       |
| `gitclassic.advanced.blame.sizeThresholdAfterEdit`                  | Specifies the maximum document size (in lines) allowed to be re-blamed after an edit while still unsaved. Use 0 to specify no maximum                                                                                                                                                                                                                                                                                                                     |
| `gitclassic.advanced.caching.enabled`                               | Specifies whether git output will be cached &mdash; changing the default is not recommended                                                                                                                                                                                                                                                                                                                                                               |
| `gitclassic.advanced.commitOrdering`                                | Specifies the order by which commits will be shown. If unspecified, commits will be shown in reverse chronological order<br /><br />`date` - shows commits in reverse chronological order of the commit timestamp<br />`author-date` - shows commits in reverse chronological order of the author timestamp<br />`topo` - shows commits in reverse chronological order of the commit timestamp, but avoids intermixing multiple lines of history          |
| `gitclassic.advanced.externalDiffTool`                              | Specifies an optional external diff tool to use when comparing files. Must be a configured [Git difftool](https://git-scm.com/docs/git-config#Documentation/git-config.txt-difftool).                                                                                                                                                                                                                                                                     |
| `gitclassic.advanced.externalDirectoryDiffTool`                     | Specifies an optional external diff tool to use when comparing directories. Must be a configured [Git difftool](https://git-scm.com/docs/git-config#Documentation/git-config.txt-difftool).                                                                                                                                                                                                                                                               |
| `gitclassic.advanced.fileHistoryFollowsRenames`                     | Specifies whether file histories will follow renames -- will affect how merge commits are shown in histories                                                                                                                                                                                                                                                                                                                                              |
| `gitclassic.advanced.fileHistoryShowAllBranches`                    | Specifies whether file histories will show commits from all branches                                                                                                                                                                                                                                                                                                                                                                                      |
| `gitclassic.advanced.maxListItems`                                  | Specifies the maximum number of items to show in a list. Use 0 to specify no maximum                                                                                                                                                                                                                                                                                                                                                                      |
| `gitclassic.advanced.maxSearchItems`                                | Specifies the maximum number of items to show in a search. Use 0 to specify no maximum                                                                                                                                                                                                                                                                                                                                                                    |
| `gitclassic.advanced.messages`                                      | Specifies which messages should be suppressed                                                                                                                                                                                                                                                                                                                                                                                                             |
| `gitclassic.advanced.quickPick.closeOnFocusOut`                     | Specifies whether to dismiss quick pick menus when focus is lost (if not, press `ESC` to dismiss)                                                                                                                                                                                                                                                                                                                                                         |
| `gitclassic.advanced.repositorySearchDepth`                         | Specifies how many folders deep to search for repositories                                                                                                                                                                                                                                                                                                                                                                                                |
| `gitclassic.advanced.similarityThreshold`                           | Specifies the amount (percent) of similarity a deleted and added file pair must have to be considered a rename                                                                                                                                                                                                                                                                                                                                            |
| `gitclassic.strings.codeLens.unsavedChanges.recentChangeAndAuthors` | Specifies the string to be shown in place of both the _recent change_ and _authors_ code lens when there are unsaved changes                                                                                                                                                                                                                                                                                                                              |
| `gitclassic.strings.codeLens.unsavedChanges.recentChangeOnly`       | Specifies the string to be shown in place of the _recent change_ code lens when there are unsaved changes                                                                                                                                                                                                                                                                                                                                                 |
| `gitclassic.strings.codeLens.unsavedChanges.authorsOnly`            | Specifies the string to be shown in place of the _authors_ code lens when there are unsaved changes                                                                                                                                                                                                                                                                                                                                                       |

## Themable Colors [#](#themable-colors- 'Themable Colors')

GitClassic defines a set of themable colors which can be provided by vscode themes or directly by the user using [`workbench.colorCustomizations`](https://code.visualstudio.com/docs/getstarted/themes#_customize-a-color-theme).

| Name                                       | Description                                                                               |
| ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| `gitclassic.gutterBackgroundColor`            | Specifies the background color of the gutter blame annotations                            |
| `gitclassic.gutterForegroundColor`            | Specifies the foreground color of the gutter blame annotations                            |
| `gitclassic.gutterUncommittedForegroundColor` | Specifies the foreground color of an uncommitted line in the gutter blame annotations     |
| `gitclassic.trailingLineBackgroundColor`      | Specifies the background color of the trailing blame annotation                           |
| `gitclassic.trailingLineForegroundColor`      | Specifies the foreground color of the trailing blame annotation                           |
| `gitclassic.lineHighlightBackgroundColor`     | Specifies the background color of the associated line highlights in blame annotations     |
| `gitclassic.lineHighlightOverviewRulerColor`  | Specifies the overview ruler color of the associated line highlights in blame annotations |

# Contributors &#x1F64F;&#x2764;

A big thanks to the people that have contributed to this project:

- Zeeshan Adnan ([@zeeshanadnan](https://github.com/zeeshanadnan)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=zeeshanadnan)
- Alex ([@deadmeu](https://github.com/deadmeu)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=deadmeu)
- Abdulrahman (Abdu) Assabri ([@abdusabri](https://github.com/abdusabri)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=abdusabri)
- Grey Baker ([@greysteil](https://github.com/greysteil)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=greysteil)
- Loris Bettazza ([@Pustur](https://github.com/Pustur)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=Pustur)
- Brian Bolte ([@bolte-17](https://github.com/bolte-17)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=bolte-17)
- Zach Boyle ([@zaboyle](https://github.com/zaboyle)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=zaboyle)
- Tony Brix ([@UziTech](https://github.com/UziTech)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=UziTech)
- Lee Chang ([@MeltingMosaic](https://github.com/MeltingMosaic)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=MeltingMosaic)
- Amanda Cameron ([@AmandaCameron](https://github.com/AmandaCameron)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=AmandaCameron)
- Martin Campbell ([@martin-css](https://github.com/martin-css)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=martin-css)
- Brett Cannon ([@brettcannon](https://github.com/brettcannon)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=brettcannon)
- Andrea Cigana ([@ciganandrea](https://github.com/ciganandrea)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=ciganandrea)
- Ash Clarke ([@ashclarke](https://github.com/ashclarke)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=ashclarke)
- Travis Collins ([@TravisTX](https://github.com/TravisTX)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=TravisTX)
- Matt Cooper ([@vtbassmatt](https://github.com/vtbassmatt)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=vtbassmatt)
- Andrii Dieiev ([@IllusionMH](https://github.com/IllusionMH)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=IllusionMH)
- egfx-notifications ([@egfx-notifications](https://github.com/egfx-notifications)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=egfx-notifications)
- Segev Finer ([@segevfiner](https://github.com/segevfiner)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=segevfiner)
- Cory Forsyth ([@bantic](https://github.com/bantic)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=bantic)
- John Gee ([@shadowspawn](https://github.com/shadowspawn)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=shadowspawn)
- Geoffrey ([@g3offrey](https://github.com/g3offrey)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=g3offrey)
- Guillaume Rozan ([@grozan](https://github.com/grozan)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=grozan)
- Guillem González Vela ([@guillemglez](https://github.com/guillemglez)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=guillemglez)
- Vladislav Guleaev ([@vguleaev](https://github.com/vguleaev)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=vguleaev)
- Dmitry Gurovich ([@yrtimiD](https://github.com/yrtimiD)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=yrtimiD)
- Ken Hom ([@kh0m](https://github.com/kh0m)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=kh0m)
- Yukai Huang ([@Yukaii](https://github.com/Yukaii)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=Yukaii)
- Justin Hutchings ([@jhutchings1](https://github.com/jhutchings1)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=jhutchings1)
- Roy Ivy III ([@rivy](https://github.com/rivy)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=rivy)
- Helmut Januschka ([@hjanuschka](https://github.com/hjanuschka)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=hjanuschka)
- Nils K ([@septatrix](https://github.com/septatrix)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=septatrix)
- Chris Kaczor ([@ckaczor](https://github.com/ckaczor)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=ckaczor)
- Allan Karlson ([@bees4ever](https://github.com/bees4ever)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=bees4ever)
- Mathew King ([@MathewKing](https://github.com/MathewKing)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=MathewKing)
- Lior Kletter ([@Git-Lior](https://github.com/Git-Lior)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=Git-Lior)
- Andrei Korigodski ([@korigod](https://github.com/korigod)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=korigod)
- Kwok ([@mankwok](https://github.com/mankwok)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=mankwok)
- Marc Lasson ([@mlasson](https://github.com/mlasson)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=mlasson)
- John Letey ([@johnletey](https://github.com/johnletey)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=johnletey)
- Stanislav Lvovsky ([@slavik-lvovsky](https://github.com/slavik-lvovsky)) &mdash; [contributions]((https://github.com/speedy37/vscode-gitclassic/commits?author=slavik-lvovsky)
- Peng Lyu ([@rebornix](https://github.com/rebornix)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=rebornix)
- Cédric Malard ([@cmalard](https://github.com/cmalard)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=cmalard)
- Asif Kamran Malick ([@akmalick](https://github.com/akmalick)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=akmalick)
- Mark Molinaro ([@markjm](https://github.com/markjm)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=markjm)
- Ahmadou Waly Ndiaye ([@sir-kain](https://github.com/sir-kain)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=sir-kain)
- Nguyen Long Nhat ([@torn4dom4n](https://github.com/torn4dom4n)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=torn4dom4n)
- Aurelio Ogliari ([@nobitagit](https://github.com/nobitagit)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=nobitagit)
- Raaj Patil ([@arrpee](https://github.com/arrpee)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=arrpee)
- Connor Peet ([@connor4312](https://github.com/connor4312)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=connor4312)
- Maxim Pekurin ([@pmaxim25](https://github.com/pmaxim25)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=pmaxim25)
- Arunprasad Rajkumar ([@arajkumar](https://github.com/arajkumar)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=arajkumar)
- David Rees ([@studgeek](https://github.com/studgeek)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=studgeek)
- Rickard ([@rickardp](https://github.com/rickardp)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=rickardp)
- Johannes Rieken ([@jrieken](https://github.com/jrieken)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=jrieken)
- Guillaume Rozan ([@rozangu1](https://github.com/rozangu1)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=rozangu1)
- ryenus ([@ryenus](https://github.com/ryenus)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=ryenus)
- Andrew Savage ([@andrewsavage1](https://github.com/andrewsavage1)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=andrewsavage1)
- Zack Schuster ([@zackschuster](https://github.com/zackschuster)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=zackschuster)
- Ahmadali Shafiee ([@ahmadalli](https://github.com/ahmadalli)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=ahmadalli)
- Shashank Shastri ([@Shashank-Shastri](https://github.com/Shashank-Shastri)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=Shashank-Shastri)
- Oleg Solomka ([@legomushroom](https://github.com/legomushroom)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=legomushroom)
- Miguel Solorio ([@misolori](https://github.com/misolori)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=misolori)
- SpaceEEC ([@SpaceEEC](https://github.com/SpaceEEC)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=SpaceEEC)
- Skybbles ([@Luxray5474](https://github.com/Luxray5474)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=Luxray5474)
- Brendon Smith ([@br3ndonland](https://github.com/br3ndonland)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=br3ndonland)
- sueka ([@sueka](https://github.com/sueka)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=sueka)
- Mike Surcouf ([@mikes-gh](https://github.com/mikes-gh)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=mikes-gh)
- Alexey Svetliakov ([@asvetliakov](https://github.com/asvetliakov)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=asvetliakov)
- Takashi Tamura ([@tamuratak](https://github.com/tamuratak)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=tamuratak)
- Andy Tang ([@thewindsofwinter](https://github.com/thewindsofwinter)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=thewindsofwinter)
- Dmitry Ulupov ([@dimaulupov](https://github.com/dimaulupov)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=dimaulupov)
- Alexey Vasyukov ([@notmedia](https://github.com/notmedia)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=notmedia)
- Ivan Volzhev ([@ivolzhevbt](https://github.com/ivolzhevbt)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=ivolzhevbt)
- x13machine ([@x13machine](https://github.com/x13machine)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=x13machine)
- Alwin Wang ([@alwinw](https://github.com/alwinw)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=alwinw)
- Ian Wilkinson ([@sgtwilko](https://github.com/sgtwilko)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=sgtwilko)
- Adaex Yang ([@adaex](https://github.com/adaex)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=adaex)
- Yan Zhang ([@Eskibear](https://github.com/Eskibear)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=Eskibear)
- Zyck ([@qzyse2017](https://github.com/qzyse2017)) &mdash; [contributions](https://github.com/speedy37/vscode-gitclassic/commits?author=qzyse2017)

Also special thanks to the people that have provided support, testing, brainstorming, etc:

- Brian Canzanella ([@bcanzanella](https://github.com/bcanzanella))
- Matt King ([@KattMingMing](https://github.com/KattMingMing))

And of course the awesome [vscode](https://github.com/Microsoft/vscode/graphs/contributors) team!
