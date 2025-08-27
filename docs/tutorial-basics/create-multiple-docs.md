---
id: multiple-docs
title: 📄 Create Multiple Docs Instances
slug: /multiple-docs
---

## Create Multiple Docs Instances
- https://youtu.be/GMjFnkmyt30

<iframe width="560" height="315" src="https://www.youtube.com/embed/GMjFnkmyt30?si=10WPFCq8WGzEb3Z5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Descrição: TODO!

---


Here's how to add multiple docs folders in Docusaurus, allowing you to organize your documentation into distinct sections:

Docusaurus uses the concept of "presets" and "plugins" to manage content. For multiple docs folders, you'll primarily be working with the `@docusaurus/preset-classic` and its `docs` options, or by adding multiple instances of the `@docusaurus/plugin-content-docs` plugin.

Let's look at the two main approaches:

### Approach 1: Using Multiple Instances of `@docusaurus/plugin-content-docs` (Recommended for Distinct Sections)

This is the most flexible and recommended approach when you want clearly separated documentation sections (e.g., "User Guide," "API Reference," "Developer Docs"), each with its own sidebar and potentially different configurations.

1.  **Create your additional docs folders:**
    Let's say you have your default `docs` folder, and you want to add `api-docs` and `dev-docs`. Your project structure might look like this:

    ```
    my-docusaurus-site/
    ├── docs/
    │   ├── intro.md
    │   └── ...
    ├── api-docs/
    │   ├── getting-started.md
    │   └── ...
    ├── dev-docs/
    │   ├── setup.md
    │   └── ...
    ├── src/
    ├── static/
    ├── docusaurus.config.js
    └── ...
    ```

2.  **Configure `docusaurus.config.js`:**
    You'll need to modify your `docusaurus.config.js` to add multiple instances of the `@docusaurus/plugin-content-docs`. Each instance will point to a different docs folder.

    ```javascript
    // docusaurus.config.js

    /** @type {import('@docusaurus/types').Config} */
    const config = {
      // ... other configurations

      presets: [
        [
          "@docusaurus/preset-classic",
          /** @type {import('@docusaurus/preset-classic').Options} */
          ({
            docs: {
              // This is for your primary 'docs' folder
              path: "docs", // The default 'docs' folder
              sidebarPath: "./sidebars.js",
              // Please change this to your repo.
              // Remove this to remove the "edit this page" links.
              editUrl:
                "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
            },
            blog: {
              showReadingTime: true,
              // Please change this to your repo.
              // Remove this to remove the "edit this page" links.
              editUrl:
                "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
            },
            theme: {
              customCss: "./src/css/custom.css",
            },
          }),
        ],
      ],
      // highlight-start
      plugins: [
        [
          "@docusaurus/plugin-content-docs",
          /** @type {import('@docusaurus/plugin-content-docs').Options} */
          {
            id: "api", // Unique ID for this docs instance
            path: "api-docs", // Path to your API docs folder
            routeBasePath: "api", // Base URL for these docs (e.g., yoursite.com/api/...)
            sidebarPath: require.resolve("./sidebarsApi.js"), // Separate sidebar for API docs
            // ... other options specific to your API docs
          },
        ],
        [
          "@docusaurus/plugin-content-docs",
          /** @type {import('@docusaurus/plugin-content-docs').Options} */
          {
            id: "dev", // Unique ID for this docs instance
            path: "dev-docs", // Path to your Developer docs folder
            routeBasePath: "dev", // Base URL for these docs (e.g., yoursite.com/dev/...)
            sidebarPath: require.resolve("./sidebarsDev.js"), // Separate sidebar for Developer docs
            // ... other options specific to your Dev docs
          },
        ],
      ],
      // highlight-end
      // ... rest of your config
    };

    module.exports = config;
    ```

3.  **Create separate sidebar files:**
    For each new docs instance, you'll typically want a separate sidebar file.

    - `sidebars.js` (for `docs` folder)
    - `sidebarsApi.js` (for `api-docs` folder)
    - `sidebarsDev.js` (for `dev-docs` folder)

    Example `sidebarsApi.js`:

    ```javascript
    // sidebarsApi.js

    /** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
    const sidebarsApi = {
      api: [
        {
          type: "autogenerated",
          dirName: ".",
        },
      ],
    };

    module.exports = sidebarsApi;
    ```

    Example `sidebarsDev.js`:

    ```javascript
    // sidebarsDev.js

    /** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
    const sidebarsDev = {
      api: [
        {
          type: "autogenerated",
          dirName: ".",
        },
      ],
    };

    module.exports = sidebarsDev;
    ```

4.  **Link in your Navbar:**
    Update your `docusaurus.config.js` to add links to these new documentation sections in your navbar:

    ```javascript
    // docusaurus.config.js

    navbar: {
        title: 'My Site',
        // ...
        items: [{
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar', // This refers to your default docs sidebar ID
            position: 'left',
            label: 'Tutorial',
          },
          // highlight-start
          {
            to: '/api/getting-started', // Link to a page in your API docs
            label: 'API Docs',
            position: 'left',
            activeBaseRegex: `/api/`, // Highlight when any API doc is active
          },
          {
            to: '/dev/setup', // Link to a page in your Dev docs
            label: 'Dev Docs',
            position: 'left',
            activeBaseRegex: `/dev/`, // Highlight when any Dev doc is active
          },
          // highlight-end
          // ...
        ],
      },
    ```

    **Note:** For `type: 'docSidebar'`, you need to specify the `sidebarId` from your sidebar file. If you used `autogenerated` with a `dirName` of `.` (like in the example `sidebarsApi.js`), the default `sidebarId` will be the same as your plugin `id` (e.g., `api`, `dev`).

### Approach 2: Organizing Subfolders within a Single `docs` Folder (For Hierarchical Organization)

This approach is suitable if you want to organize your documentation within a single, unified structure but still maintain distinct sub-sections. Docusaurus will treat all content within the primary `docs` folder as part of the same documentation set.

1.  **Create subfolders within your `docs` folder:**

    ```
    my-docusaurus-site/
    ├── docs/
    │   ├── intro.md
    │   ├── user-guide/
    │   │   ├── getting-started.md
    │   │   └── features.md
    │   ├── api-reference/
    │   │   ├── endpoints.md
    │   │   └── authentication.md
    │   └── ...
    ├── src/
    ├── static/
    ├── docusaurus.config.js
    └── ...
    ```

2.  **Configure `docusaurus.config.js` (no major changes needed here for the `docs` preset):**
    The default `docs` configuration in your `preset-classic` will handle these subfolders automatically.

    ```javascript
    // docusaurus.config.js

    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            path: 'docs', // This still points to your single 'docs' folder
            sidebarPath: './sidebars.js', // All docs use this single sidebar file
            // ...
          },
          // ...
        }),
      ],
    ],
    ```

3.  **Configure `sidebars.js`:**
    You'll use the `sidebars.js` file to define the structure and navigation for all your documentation, including the subfolders. You can use categories to group your subfolders.

    ```javascript
    // sidebars.js

    /** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
    const sidebars = {
      tutorialSidebar: [
        {
          type: "autogenerated",
          dirName: ".", // This will auto-generate from the entire 'docs' folder
        },
        // OR, you can manually define:
        /*
        type: 'category',
        label: 'User Guide',
        items: [
            'user-guide/getting-started',
            'user-guide/features',
        ],
        */
        /*
        type: 'category',
        label: 'API Reference',
        items: [
            'api-reference/endpoints',
            'api-reference/authentication',
        ],
        */
      ],
    };

    module.exports = sidebars;
    ```

    - **Using `autogenerated`:** If you use `autogenerated` with `dirName: '.'`, Docusaurus will automatically create categories based on your folder structure.
    - **Manual Definition:** For more control, you can manually define categories and items, referencing the relative paths within your `docs` folder (e.g., `'user-guide/getting-started'`).

### When to choose which approach:

- **Multiple `@docusaurus/plugin-content-docs` instances (Approach 1):**

  - **Choose this when:** You want completely separate documentation sets with independent URLs, sidebars, and potentially different configurations (e.g., "User Guide" vs. "API Reference" vs. "Blog"). This is the most common and recommended approach for distinct documentation types.
  - **Pros:** Clear separation, independent routing, separate sidebars, flexible configuration per docs set.
  - **Cons:** Requires more configuration in `docusaurus.config.js` and separate sidebar files.

- **Subfolders within a single `docs` folder (Approach 2):**

  - **Choose this when:** You want to organize a single, cohesive documentation set into logical sub-sections, all sharing the same base URL and sidebar structure (though the sidebar can be structured with categories).
  - **Pros:** Simpler initial setup, unified URL structure, single sidebar file.
  - **Cons:** Less flexibility for independent configuration or entirely separate navigation.

In most cases where you're asking about "multiple docs folders," **Approach 1 (using multiple instances of `@docusaurus/plugin-content-docs`)** is what you're looking for, as it provides the greatest flexibility and separation for distinct content areas.

## Demo 1

Let's create a simplified Docusaurus demo script that focuses solely on generating custom documentation folders like `docs`, `api-docs`, and `dev-docs`, each with a basic Markdown file.

```python
import os

def create_directory(path):
    """Creates a directory if it doesn't exist."""
    os.makedirs(path, exist_ok=True)
    print(f"Created directory: {path}")

def create_markdown_file(path, content, front_matter=None):
    """Creates a Markdown file with optional front matter."""
    with open(path, 'w', encoding='utf-8') as f:
        if front_matter:
            f.write("---\n")
            for key, value in front_matter.items():
                f.write(f"{key}: {value}\n")
            f.write("---\n\n")
        f.write(content)
    print(f"Created file: {path}")

def create_simplified_docusaurus_docs_structure(base_path="my-demo1"):
    """
    Creates a simplified Docusaurus folder structure with custom docs directories.
    """
    print(f"Creating simplified Docusaurus docs structure in: {base_path}")

    # Create the base site directory
    create_directory(base_path)

    # --- Docs Folder ---
    docs_path = os.path.join(base_path, "docs")
    create_directory(docs_path)
    create_markdown_file(
        os.path.join(docs_path, "intro.md"),
        "# Introduction to Docs\n\nThis is the main introduction to your project's documentation.",
        {"id": "intro", "title": "Introduction", "sidebar_position": 1}
    )
    create_markdown_file(
        os.path.join(docs_path, "further-info.md"),
        "# Further Information\n\nFind more details here.",
        {"id": "further-info", "title": "Further Information", "sidebar_position": 2}
    )

    # --- API Docs Folder ---
    api_docs_path = os.path.join(base_path, "api-docs")
    create_directory(api_docs_path)
    create_markdown_file(
        os.path.join(api_docs_path, "getting-started.md"),
        "# API Getting Started\n\nLearn how to get started with our API.",
        {"id": "api-getting-started", "title": "Getting Started", "sidebar_position": 1}
    )
    create_markdown_file(
        os.path.join(api_docs_path, "endpoints.md"),
        "# API Endpoints\n\nDetails about available API endpoints.",
        {"id": "api-endpoints", "title": "Endpoints", "sidebar_position": 2}
    )

    # --- Dev Docs Folder ---
    dev_docs_path = os.path.join(base_path, "dev-docs")
    create_directory(dev_docs_path)
    create_markdown_file(
        os.path.join(dev_docs_path, "setup.md"),
        "# Development Setup\n\nInstructions for setting up your development environment.",
        {"id": "dev-setup", "title": "Setup Guide", "sidebar_position": 1}
    )
    create_markdown_file(
        os.path.join(dev_docs_path, "contributing.md"),
        "# Contributing Guidelines\n\nHow to contribute to the project.",
        {"id": "contributing", "title": "Contributing", "sidebar_position": 2}
    )

    print("\nSimplified Docusaurus docs structure created successfully!")
    print(f"You'll find your new structure in the '{base_path}' directory.")

if __name__ == "__main__":
    create_simplified_docusaurus_docs_structure()
```

## Demo 2

I will generate the Python script focusing on the `docs` folder structure with nested subdirectories like `user-guide` and `api-reference`, creating placeholder Markdown files within each.

```python
import os

def create_directory(path):
    """Creates a directory if it doesn't exist."""
    os.makedirs(path, exist_ok=True)
    print(f"Created directory: {path}")

def create_markdown_file(path, content, front_matter=None):
    """Creates a Markdown file with optional front matter."""
    with open(path, 'w', encoding='utf-8') as f:
        if front_matter:
            f.write("---\n")
            for key, value in front_matter.items():
                f.write(f"{key}: {value}\n")
            f.write("---\n\n")
        f.write(content)
    print(f"Created file: {path}")

def create_docusaurus_nested_docs_structure(base_path="my-demo2"):
    """
    Creates a Docusaurus folder structure with nested docs directories:
    my-demo2/
    ├── docs/
    │   ├── intro.md
    │   ├── user-guide/
    │   │   ├── getting-started.md
    │   │   └── features.md
    │   ├── api-reference/
    │   │   ├── endpoints.md
    │   │   └── authentication.md
    │   └── ...
    """
    print(f"Creating Docusaurus nested docs structure in: {base_path}")

    # Create the base site directory
    create_directory(base_path)

    # Docs Folder
    docs_path = os.path.join(base_path, "docs")
    create_directory(docs_path)

    # intro.md
    create_markdown_file(
        os.path.join(docs_path, "intro.md"),
        "# Welcome to our Documentation!\n\nThis is the main introductory page for our Docusaurus site.",
        {"id": "intro", "title": "Introduction", "sidebar_position": 1}
    )

    # user-guide subfolder
    user_guide_path = os.path.join(docs_path, "user-guide")
    create_directory(user_guide_path)
    # _category_.json for user-guide
    create_markdown_file(
        os.path.join(user_guide_path, "_category_.json"),
        '{\n  "label": "User Guide",\n  "position": 2,\n  "link": {\n    "type": "generated-index",\n    "description": "Learn how to use our product."\n  }\n}',
        None
    )
    # getting-started.md
    create_markdown_file(
        os.path.join(user_guide_path, "getting-started.md"),
        "# Getting Started\n\nFollow these steps to quickly set up and start using the product.",
        {"id": "getting-started", "title": "Getting Started", "sidebar_position": 1}
    )
    # features.md
    create_markdown_file(
        os.path.join(user_guide_path, "features.md"),
        "# Key Features\n\nExplore the various features offered by our application.",
        {"id": "features", "title": "Features", "sidebar_position": 2}
    )

    # api-reference subfolder
    api_reference_path = os.path.join(docs_path, "api-reference")
    create_directory(api_reference_path)
    # _category_.json for api-reference
    create_markdown_file(
        os.path.join(api_reference_path, "_category_.json"),
        '{\n  "label": "API Reference",\n  "position": 3,\n  "link": {\n    "type": "generated-index",\n    "description": "Detailed documentation for our API."\n  }\n}',
        None
    )
    # endpoints.md
    create_markdown_file(
        os.path.join(api_reference_path, "endpoints.md"),
        "# API Endpoints\n\nComprehensive list and details of all available API endpoints.",
        {"id": "api-endpoints", "title": "Endpoints", "sidebar_position": 1}
    )
    # authentication.md
    create_markdown_file(
        os.path.join(api_reference_path, "authentication.md"),
        "# API Authentication\n\nInformation on how to authenticate your API requests.",
        {"id": "authentication", "title": "Authentication", "sidebar_position": 2}
    )

    print("\nSimplified Docusaurus nested docs structure created successfully!")
    print(f"You'll find your new structure in the '{base_path}' directory.")

# To run the function and create the structure:
if __name__ == "__main__":
    create_docusaurus_nested_docs_structure()
```
