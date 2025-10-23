---
id: github-cli
title: GitHub CLI
description: GitHub CLI brings GitHub to your terminal. Free and open source.
slug: /github-cli
---

import ThemeCodeBlock from '@theme/CodeBlock';

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

## Display or change configuration settings

```bash
gh config --help
```

```bash
Display or change configuration settings for gh.

Current respected settings:
- `git_protocol`: the protocol to use for git clone and push operations `{https | ssh}` (default `https`)
- `editor`: the text editor program to use for authoring text
- `prompt`: toggle interactive prompting in the terminal `{enabled | disabled}` (default `enabled`)
- `prefer_editor_prompt`: toggle preference for editor-based interactive prompting in the terminal `{enabled | disabled}` (default `disabled`)
- `pager`: the terminal pager program to send standard output to
- `http_unix_socket`: the path to a Unix socket through which to make an HTTP connection
- `browser`: the web browser to use for opening URLs
- `color_labels`: whether to display labels using their RGB hex color codes in terminals that support truecolor `{enabled | disabled}` (default `disabled`)
- `accessible_colors`: whether customizable, 4-bit accessible colors should be used `{enabled | disabled}` (default `disabled`)
- `accessible_prompter`: whether an accessible prompter should be used `{enabled | disabled}` (default `disabled`)
- `spinner`: whether to use a animated spinner as a progress indicator `{enabled | disabled}` (default `enabled`)

USAGE
  gh config <command> [flags]

AVAILABLE COMMANDS
  clear-cache:   Clear the cli cache
  get:           Print the value of a given configuration key
  list:          Print a list of configuration keys and values
  set:           Update configuration with a value for the given key

INHERITED FLAGS
  --help   Show help for command

LEARN MORE
  Use `gh <command> <subcommand> --help` for more information about a command.
  Read the manual at https://cli.github.com/manual
  Learn about exit codes using `gh help exit-codes`
  Learn about accessibility experiences using `gh help accessibility`
```

```bash
gh config set editor "code --wait"
```

```bash
gh config set browser ""
```

```bash
gh config get browser
```

## Authenticate gh and git with GitHub

- [gh auth login](https://cli.github.com/manual/gh_auth_login)

```bash
gh auth --help
```

```bash
Authenticate gh and git with GitHub

USAGE
  gh auth <command> [flags]

AVAILABLE COMMANDS
  login:         Log in to a GitHub account
  logout:        Log out of a GitHub account
  refresh:       Refresh stored authentication credentials
  setup-git:     Setup git with GitHub CLI
  status:        Display active account and authentication state on each known GitHub host
  switch:        Switch active GitHub account
  token:         Print the authentication token gh uses for a hostname and account
```

### Log in to a GitHub account

```bash
gh auth login
```

### Log out of a GitHub account

```bash
gh auth logout
```

### Display active account and authentication state on each known GitHub host

```bash
gh auth status
```

## Work with GitHub organizations.

List organizations for the authenticated user.

```bash
gh org list
```

```bash
Work with GitHub organizations.

USAGE
  gh org <command> [flags]

GENERAL COMMANDS
  list:          List organizations for the authenticated user.

INHERITED FLAGS
  --help   Show help for command

EXAMPLES
  $ gh org list
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
EXAMPLES
  # Create a repository interactively
  $ gh repo create

  # Create a new remote repository and clone it locally
  $ gh repo create my-project --public --clone

  # Create a new remote repository in a different organization
  $ gh repo create my-org/my-project --public

  # Create a remote repository from the current directory
  $ gh repo create my-project --private --source=. --remote=upstream
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

For more information, see: http://choosealicense.com/licenses/

```bash
gh repo license list
```

| LICENSE KEY    | SPDX ID      | LICENSE NAME                                                                                 |
| -------------- | ------------ | -------------------------------------------------------------------------------------------- |
| `agpl-3.0`     | AGPL-3.0     | [GNU Affero General Public License v3.0](http://choosealicense.com/licenses/agpl-3.0/)       |
| `apache-2.0`   | Apache-2.0   | [Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)                        |
| `bsd-2-clause` | BSD-2-Clause | [BSD 2-Clause "Simplified" License](https://choosealicense.com/licenses/bsd-2-clause/)       |
| `bsd-3-clause` | BSD-3-Clause | [BSD 3-Clause "New" or "Revised" License](https://choosealicense.com/licenses/bsd-3-clause/) |
| `bsl-1.0`      | BSL-1.0      | [Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)                   |
| `cc0-1.0`      | CC0-1.0      | [Creative Commons Zero v1.0 Universal](https://choosealicense.com/licenses/cc0-1.0/)         |
| `epl-2.0`      | EPL-2.0      | [Eclipse Public License 2.0](https://choosealicense.com/licenses/epl-2.0/)                   |
| `gpl-2.0`      | GPL-2.0      | [GNU General Public License v2.0](https://choosealicense.com/licenses/gpl-2.0/)              |
| `gpl-3.0`      | GPL-3.0      | [GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)              |
| `lgpl-2.1`     | LGPL-2.1     | [GNU Lesser General Public License v2.1](https://choosealicense.com/licenses/lgpl-2.1/)      |
| `mit`          | MIT          | [MIT License](https://choosealicense.com/licenses/mit/)                                      |
| `mpl-2.0`      | MPL-2.0      | [Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)                   |
| `unlicense`    | Unlicense    | [The Unlicense](https://choosealicense.com/licenses/unlicense/)                              |

```bash
gh repo license --help
```

```bash
View a specific repository license by license key or SPDX ID.

Run `gh repo license list` to see available commonly used licenses.
For even more licenses, visit <https://choosealicense.com/appendix>.

USAGE
  gh repo license view {<license-key> | <spdx-id>} [flags]

FLAGS
  -w, --web   Open https://choosealicense.com/ in the browser

INHERITED FLAGS
  --help   Show help for command

EXAMPLES
  # View the MIT license from SPDX ID
  $ gh repo license view MIT

  # View the MIT license from license key
  $ gh repo license view mit

  # View the GNU AGPL-3.0 license from SPDX ID
  $ gh repo license view AGPL-3.0

  # View the GNU AGPL-3.0 license from license key
  $ gh repo license view agpl-3.0

  # Create a LICENSE.md with the MIT license
  $ gh repo license view MIT > LICENSE.md
```
