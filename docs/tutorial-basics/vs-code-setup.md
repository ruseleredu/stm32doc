---
id: vscode-setup
title: How to Setup VScode for Docusausrus
slug: /vscode-setup
---

## How to Setup VScode

- https://youtu.be/0YoLbDPFZuw

<iframe width="560" height="315" src="https://www.youtube.com/embed/0YoLbDPFZuw?si=INZQFKgyBC8kgoB9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Descrição: TODO!

- https://docusaurus.io/

---

- https://code.visualstudio.com/docs/configure/command-line

```bash
code --list-extensions --profile "DOCs"
```

### Workspace Setup (.vscode folder)

For project-specific settings, create a `.vscode` folder at the root of your Docusaurus project.

- **`.vscode/settings.json`:** Place any settings here that you want to apply only to this specific Docusaurus project. This is where you'd put the `files.exclude` and `search.exclude` settings mentioned above, or any formatter overrides.

  Example `settings.json`:

my-website/.vscode/settings.json

```json title=".vscode/settings.json"
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "terminal.integrated.defaultProfile.windows": "Command Prompt",
  "files.exclude": {
    "**/.git": true,
    "**/node_modules": true,
    "**/.docusaurus": true,
    "**/build": true
  },
  "search.exclude": {
    "**/node_modules": true,
    "**/.docusaurus": true,
    "**/build": true
  }
}
```

my-website/.vscode/extensions.json

```json title=".vscode/extensions.json"
{
  "recommendations": [
    "streetsidesoftware.code-spell-checker",
    "dbaeumer.vscode-eslint",
    "tomasdahlqvist.markdown-admonitions",
    "yzhang.markdown-all-in-one",
    "bierner.markdown-footnotes",
    "bierner.markdown-mermaid",
    "bierner.markdown-yaml-preamble",
    "pkief.material-icon-theme",
    "esbenp.prettier-vscode"
    // Add other relevant extensions
  ]
}
```

## Gemini response

Setting up VS Code for Docusaurus involves configuring extensions, settings, and potentially some workspace-specific configurations to enhance your development experience. Here's a comprehensive guide:

### Essential VS Code Extensions

These extensions will significantly improve your Docusaurus development workflow:

- **ESLint:**

  - **Purpose:** Lints your JavaScript/TypeScript code to catch errors, enforce coding styles, and ensure best practices. Docusaurus projects typically come with ESLint configured.
  - **Installation:** Search for "ESLint" by Dirk Baeumer in the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X`).
  - **Configuration:** Make sure the extension is enabled for your workspace. If you encounter issues, you might need to specify the ESLint path in your VS Code settings (rare for standard Docusaurus setups).

- **Prettier - Code formatter:**

  - **Purpose:** Automatically formats your code (JavaScript, JSX, TypeScript, CSS, Markdown, etc.) to maintain consistent style across your project.
  - **Installation:** Search for "Prettier - Code formatter" by Esben Petersen.
  - **Configuration:**
    - **Format on Save:** Highly recommended. Go to `File > Preferences > Settings` (or `Code > Settings` on macOS). Search for "Format On Save" and enable it.
    - **Default Formatter:** Search for "Default Formatter" and set it to "Prettier - Code formatter".
    - **Prettier in Docusaurus:** Docusaurus projects often include a `.prettierrc` file at the root, which Prettier will automatically pick up.

- **Markdown All in One:**

  - **Purpose:** Essential for working with Docusaurus documentation, which is primarily written in Markdown. Provides features like:
    - Table of Contents
    - Auto-completion
    - Math support
    - List editing
    - Preview (side-by-side or full)
    - Keybindings for formatting (bold, italic, etc.)
  - **Installation:** Search for "Markdown All in One" by Yuya Tanaka.

- **MDX:**

  - **Purpose:** Docusaurus uses MDX (Markdown + JSX) for many components and pages. This extension provides syntax highlighting for MDX files, which is not natively supported by VS Code.
  - **Installation:** Search for "MDX" by Unifiedjs.

- **React Native Tools (or specific React extensions):**

  - **Purpose:** While Docusaurus isn't React Native, this extension (or others like "Simple React Snippets" by burkeholland) can provide useful React-specific features like JSX syntax highlighting, Emmet support for React, and sometimes intelligent auto-completion for React components.
  - **Installation:** Search for "React Native Tools" by Microsoft or "Simple React Snippets".

### Recommended VS Code Settings

You can configure these globally (User Settings) or specifically for your Docusaurus project (Workspace Settings: `.vscode/settings.json`). Workspace settings are preferred for project-specific configurations.

- **Format on Save (if not already set via Prettier setup):**

  ```json
  {
    "editor.formatOnSave": true
  }
  ```

- **Default Formatter (if not already set via Prettier setup):**

  ```json
  {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
  ```

- **Files Exclude (Optional, but good for performance):**
  Exclude `node_modules` and the Docusaurus build output (`.docusaurus`, `build`) from VS Code's file watcher and search.

  ```json
  {
    "files.exclude": {
      "**/.git": true,
      "**/.svn": true,
      "**/.hg": true,
      "**/CVS": true,
      "**/.DS_Store": true,
      "**/node_modules": true,
      "**/.docusaurus": true,
      "**/build": true
    },
    "search.exclude": {
      "**/node_modules": true,
      "**/.docusaurus": true,
      "**/build": true
    }
  }
  ```

- **Path Intellisense:**

  - **Purpose:** Auto-completes filenames for imports (e.g., `import MyComponent from '../components/MyComponent'`).
  - **Installation:** Search for "Path Intellisense" by Christian Kohler.
  - **No specific setting needed; it usually works out of the box.**

- **Editor Font Ligatures (Optional, for aesthetics):**
  If you use a font like Fira Code or Cascadia Code, you can enable ligatures for a more visually appealing code experience.

  ```json
  {
    "editor.fontFamily": "Fira Code", // Or your preferred font
    "editor.fontLigatures": true
  }
  ```

### Integrated Terminal

VS Code's integrated terminal is perfect for running Docusaurus commands:

- **Open Terminal:** `Ctrl+` or `Cmd+`
- **Run Docusaurus commands:**
  ```bash
  npm start         # Start the development server
  npm run build     # Build the static site
  npm run swizzle   # Customize theme components
  ```

### Workspace Setup (.vscode folder)

For project-specific settings, create a `.vscode` folder at the root of your Docusaurus project.

- **`.vscode/settings.json`:** Place any settings here that you want to apply only to this specific Docusaurus project. This is where you'd put the `files.exclude` and `search.exclude` settings mentioned above, or any formatter overrides.

  Example `settings.json`:

  ```json
  {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "files.exclude": {
      "**/.docusaurus": true,
      "**/build": true,
      "**/node_modules": true
    },
    "search.exclude": {
      "**/.docusaurus": true,
      "**/build": true,
      "**/node_modules": true
    }
  }
  ```

- **`.vscode/extensions.json` (Recommended for teams):**
  This file allows you to recommend extensions to other developers working on the same project. When someone opens the project, VS Code will suggest installing these extensions.

  Example `extensions.json`:

  ```json
  {
    "recommendations": [
      "dbaeumer.vscode-eslint",
      "esbenp.prettier-vscode",
      "yzhang.markdown-all-in-one",
      "unifiedjs.vscode-mdx"
      // Add other relevant extensions
    ]
  }
  ```

### Git Integration (Built-in)

VS Code has excellent built-in Git integration. Docusaurus projects are typically version-controlled, so this is crucial:

- **Source Control View (`Ctrl+Shift+G` or `Cmd+Shift+G`):** Track changes, stage files, commit, pull, push, etc.
- **`.gitignore`:** Ensure your Docusaurus project has a proper `.gitignore` file (usually generated by Docusaurus init), which should include `node_modules`, `.docusaurus`, `build`, etc., to keep your repository clean.

### Troubleshooting Tips

- **ESLint/Prettier Conflicts:** If ESLint and Prettier seem to conflict, ensure Prettier is running _before_ ESLint for formatting, and ESLint is configured to _ignore_ formatting rules that Prettier handles. The ESLint Prettier plugin (`eslint-config-prettier`) usually takes care of this automatically in Docusaurus projects.
- **Performance Issues:** If VS Code feels slow, especially in large `node_modules` folders, ensure your `files.exclude` and `search.exclude` settings are correctly configured.
- **Restart VS Code:** Sometimes, after installing new extensions or changing settings, a full restart of VS Code can resolve unexpected behavior.

By following these steps, you'll have a highly optimized and efficient VS Code environment for developing your Docusaurus documentation site.

## Doc Writer Profile Template

https://code.visualstudio.com/docs/configure/profiles#_doc-writer-profile-template


## Streamlining image insertion  Using the "Paste Image" VS Code Extension (Recommended)

Streamlining image insertion is a huge time-saver when writing Docusaurus documentation.

There are two primary ways to set this up in VS Code for Docusaurus: using a popular community extension or leveraging a built-in VS Code feature. The key is to make sure the image is saved into your Docusaurus **static asset folder** and the path in your Markdown file is an **absolute path** starting from the root of your site (e.g., `/img/screenshot.png`).

Docusaurus documentation recommends placing assets like images in the `static` folder (usually `static/img`) and referencing them using an absolute path. Docusaurus automatically handles these paths and resolves them correctly during the build process.

Here are the two methods:

-----



This is the most popular and flexible method. You can configure the extension to save the image to your `static/img` folder and insert the correct absolute path into your Markdown file.

### Step 1: Install the Extension
- [Paste Image](https://marketplace.visualstudio.com/items?itemName=mushan.vscode-paste-image)

1.  Open VS Code.
2.  Go to the **Extensions** view (`Ctrl+Shift+X` or `Cmd+Shift+X`).
3.  Search for **`Paste Image`** (by **Mushan**).
4.  Click **Install**.

### Step 2: Configure the Extension

You need to tell the extension where to save the image and what path to use in your Markdown. You can do this in your VS Code `settings.json` file.

1.  Open the **Command Palette** (`Ctrl+Shift+P` or `Cmd+Shift+P`).
2.  Type `Open Settings (JSON)` and select it.
3.  Add the following configuration for your Docusaurus project.

**Recommended Settings:**

This configuration will save the image to a folder structure like `static/img/doc-file-name/image-name.png` and insert a path like `/img/doc-file-name/image-name.png` into your Markdown/MDX file.

**Example `settings.json` entry:**

```json
{
  // Settings for pasteImage extension: Paste with Ctrl+Alt+V
  "pasteImage.forceUnixStyleSeparator": true,
  "pasteImage.basePath": "${projectRoot}/static",
  "pasteImage.path": "${projectRoot}/static/img/${currentFileNameWithoutExt}",
  "pasteImage.prefix": "/",
  "pasteImage.showFilePathConfirmInputBox": false
}
```

### Step 3: Paste Your Image

1.  Take a screenshot (it should be in your clipboard).
2.  Go to your Markdown/MDX file in VS Code.
3.  Use the keyboard shortcut:
      * **Windows/Linux:** `Ctrl + Alt + V`
      * **macOS:** `Cmd + Alt + V`
      * *Alternatively, open the Command Palette and search for **"Paste Image"***.

The image will be saved to your Docusaurus project, and the correct Markdown link will be inserted\!
