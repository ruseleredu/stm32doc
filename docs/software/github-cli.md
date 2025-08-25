---
id: github-cli
title: GitHub CLI
description: GitHub CLI brings GitHub to your terminal. Free and open source.
slug: /github-cli
---

## Intalação

[Installing gh on Windows](https://github.com/cli/cli/blob/trunk/docs/install_windows.md)

### Zip

- https://github.com/cli/cli/tags
- https://github.com/cli/cli/releases/download/v2.78.0/gh_2.78.0_windows_amd64.zip

```bash
gh --version
```

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

## gh config

```bash
gh config set editor "code --wait"
```

```bash
gh config set browser ""
```

```bash
gh config get browser
```

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

List organizations for the authenticated user.

```bash
gh org list
```

```bash
gh repo list ELT73A-2025-1-X
```

### Work with GitHub repositories.

```bash
gh repo create --help
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

```bash
gh repo create ELT73A-S22-2025-2-X/LAB00 --public -c -l mit --add-readme -g C
gh repo view ELT73A-S22-2025-2-X/LAB00 --web
```

```bash
gh repo delete ELT73A-S22-2025-2-X/LAB00x --yes
```

```bash
gh repo create ELT73A-S22-2025-2-X/LAB00c --public -c -l mit --add-readme -g C
gh repo view ELT73A-S22-2025-2-X/LAB00c --web
```

```bash
gh repo create ELT73A-S22-2025-2-X/LAB00 --public --template ELT73A-LAB-TPL/LAB00
```

Cria repo de template, clona e abre no VScode

```bash
gh repo create ELT73A-S22-2025-2-X/LAB00h --public -p ELT73A-LAB-TPL/LAB00 -c
cd LAB00y
code .
```

Crie um novo repositório com base em um template:

```bash
gh repo create ELT73A-S22-2025-2-X/LAB00-tmp --public --template ELT73A-LAB-TPL/LAB00
```

```bash
gh repo create ELT73A-S22-2025-2-X/LAB00-tmp --private --template ELT73A-LAB-TPL/LAB00
```

gh repo clone ELT73A-2025-1-X/my-new-repo

```bash
gh repo delete ELT73A-S22-2025-2-X/LAB00x --yes
```

Abra o repositório no Navegador Web:

```bash
gh repo view ELT73A-LAB-TPL/LAB00 --web
```

```bash
gh repo create ELT73A-S22-2025-2-X/LAB00x
```

```bash
gh repo list ELT73A-S22-2025-2-X
```

```bash
gh auth refresh -h github.com -s delete_repo
```

## License

```bash
MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

```bash
gh repo license list
```

| LICENSE KEY  | SPDX ID      | LICENSE NAME                            |
| ------------ | ------------ | --------------------------------------- |
| agpl-3.0     | AGPL-3.0     | GNU Affero General Public License v3.0  |
| apache-2.0   | Apache-2.0   | Apache License 2.0                      |
| bsd-2-clause | BSD-2-Clause | BSD 2-Clause "Simplified" License       |
| bsd-3-clause | BSD-3-Clause | BSD 3-Clause "New" or "Revised" License |
| bsl-1.0      | BSL-1.0      | Boost Software License 1.0              |
| cc0-1.0      | CC0-1.0      | Creative Commons Zero v1.0 Universal    |
| epl-2.0      | EPL-2.0      | Eclipse Public License 2.0              |
| gpl-2.0      | GPL-2.0      | GNU General Public License v2.0         |
| gpl-3.0      | GPL-3.0      | GNU General Public License v3.0         |
| lgpl-2.1     | LGPL-2.1     | GNU Lesser General Public License v2.1  |
| mit          | MIT          | MIT License                             |
| mpl-2.0      | MPL-2.0      | Mozilla Public License 2.0              |
| unlicense    | Unlicense    | The Unlicense                           |
