---
id: git-tutorial
title: Tutorial
description: Crie integrações, recupere dados e automatize seus fluxos de trabalho com a API REST do GitHub.
slug: /git-tutorial
---


- https://www.w3schools.com/git/default.asp

## Key Git Concepts

- Repository: A folder where Git tracks your project and its history.
- Clone: Make a copy of a remote repository on your computer.
- Stage: Tell Git which changes you want to save next.
- Commit: Save a snapshot of your staged changes.
- Branch: Work on different versions or features at the same time.
- Merge: Combine changes from different branches.
- Pull: Get the latest changes from a remote repository.
- Push: Send your changes to a remote repository.


## Git Amend

- https://www.w3schools.com/git/git_amend.asp?remote=github
  
```bash
git commit --amend -m "Corrected commit message"
```

```bash
git reset HEAD^ -- unwanted.txt
```

1. The "I want to keep my changes" (Soft Reset)

Use this if you committed too early, forgot to add a file, or want to fix the commit message. This moves the "head" back one position but leaves all your code changes staged and ready to be committed again.
```bash
git reset --soft HEAD~1
```
2. The "I messed up, delete everything" (Hard Reset)

Use with caution. This permanently deletes the last commit and destroys all local changes you made in those files. There is no "undo" for this once it’s done.
```bash
git reset --hard HEAD~1
```
3. The "I already pushed to the server" (Revert)

If your commit is already on GitHub or a shared branch, do not use reset. Resetting alters history and will break things for your teammates. Instead, use revert. This creates a new commit that does the exact opposite of the last one.

```bash
git revert HEAD
```

## Git and GitHub LogOut

### The Git Way (Recommended)
Since Git usually handles these credentials, you can tell it to "forget" your stored information. Run this command in your terminal (Command Prompt, PowerShell, or Git Bash):

```bash
git credential-manager erase
```

After running this, type the following and press Enter (you may need to press `Ctrl+Z` or `Ctrl+D` to finish the command):
```bash
host=github.com
protocol=https
```
This forces the manager to locate and delete the specific token associated with GitHub.

### Using the Windows cmdkey (PowerShell/CMD)

Windows has a built-in tool called cmdkey that interacts directly with the Windows Credential Manager.

```bash
cmdkey /list | findstr "github"
```

```bash
cmdkey /delete:git:https://github.com
```
Using the GitHub CLI (gh)

```bash
gh auth logout
```