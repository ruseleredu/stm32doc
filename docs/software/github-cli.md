---
id: github-cli
title: GitHub CLI
description: GitHub CLI brings GitHub to your terminal. Free and open source.
slug: /github-cli
---

## Intalação

[Installing gh on Windows](https://github.com/cli/cli/blob/trunk/docs/install_windows.md)

### Zip

https://github.com/cli/cli/releases

### WinGet

WinGet is a command line tool enabling users to discover, install, upgrade, remove and configure applications on Windows 10, Windows 11, and Windows Server 2025 computers. This tool is the client interface to the Windows Package Manager service.

```bash
winget install --id GitHub.cli
```

```bash
winget upgrade --id GitHub.cli
```

[winget.run](https://winget.run/)

## GitHub CLI manual

- [GitHub CLI manual](https://cli.github.com/manual/)

### Start interactive setup

- [gh auth login](https://cli.github.com/manual/gh_auth_login)

```bash
gh auth login
```

```bash
gh auth logout
```

Display active account and authentication state on each known GitHub host.

```bash
gh auth status
```

```bash
gh --version
```

List organizations for the authenticated user.

```bash
gh org list
```

```bash
gh repo list ELT73A-2025-1-X
```

### Work with GitHub repositories.

```bash
gh repo create ELT73A-2025-1-X/my-new-repo --public --template ELT73A-LAB-TPL/LAB00
```

gh repo clone ELT73A-2025-1-X/my-new-repo

```bash
gh repo delete ELT73A-2025-1-X/my-new-repo
```

gh repo view ELT73A-LAB-TPL/LAB00 --web

gh repo create ELT73A-S22-2025-2-X/LAB00x

```bash
gh repo list ELT73A-S22-2025-2-X
```

```bash
Usage:  gh repo create [<name>] [flags]

Flags:
      --add-readme             Add a README file to the new repository
  -c, --clone                  Clone the new repository to the current directory
  -d, --description string     Description of the repository
      --disable-issues         Disable issues in the new repository
      --disable-wiki           Disable wiki in the new repository
  -g, --gitignore string       Specify a gitignore template for the repository
  -h, --homepage URL           Repository home page URL
      --include-all-branches   Include all branches from template repository
      --internal               Make the new repository internal
  -l, --license string         Specify an Open Source License for the repository
      --private                Make the new repository private
      --public                 Make the new repository public
      --push                   Push local commits to the new repository
  -r, --remote string          Specify remote name for the new repository
  -s, --source string          Specify path to local repository to use as source
  -t, --team name              The name of the organization team to be granted access
  -p, --template repository    Make the new repository based on a template repository
```
