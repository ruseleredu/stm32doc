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