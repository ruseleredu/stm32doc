---
id: my-hidden-page
title: Secret Page
#hide_title: true
#draft: true  # <--- Use this key
---

This content will not appear in the built site or navigation if `draft: true` is used.

To disable or effectively hide a page in **Docusaurus**, you generally have a few primary methods, depending on whether you mean removing it entirely, unpublishing it, or just making it inaccessible via navigation.

-----

## 1\. Removing the Source File (Permanent Removal)

The simplest way to "disable" a page is to **delete its source file** from your Docusaurus project directory.

  * **For Markdown Pages (Blog, Docs):**
      * **Documentation:** Delete the `.md` or `.mdx` file from the appropriate folder (e.g., `docs/`, `blog/`).
      * **Static Pages (e.g., Custom React Pages):** Delete the file from your `/src/pages` directory.

Docusaurus will automatically rebuild without that page.

-----

## 2\. Unpublishing Documentation Pages (Recommended for Docs)

If you want to keep the file but make it unavailable in the built site *without* deleting it, you can use **frontmatter metadata** in the documentation files.

For files in your **`docs/`** folder, you can add a `draft` or `unpublished` flag to the **metadata block (frontmatter)** at the top of the Markdown file.

For example, in `docs/my-hidden-page.md`:

```markdown
---
id: my-hidden-page
title: Secret Page
hide_title: true
draft: true  # <--- Use this key
---

This content will not appear in the built site or navigation if `draft: true` is used.
```

By default, Docusaurus builds **only content where `draft: false`** (or the key is omitted). Setting `draft: true` will prevent it from being included in the build.

-----

## 3\. Hiding Pages in Navigation (For Non-Drafted Content)

If the page is *not* a draft but you still want to remove it from the navigation sidebar or navbar:

### A. Sidebar Navigation (Docs)

Modify the structure defined in your sidebar configuration file (usually **`sidebars.js`** or **`sidebars.ts`**).

  * **Remove the entry** corresponding to the page you want to hide from the list or tree structure in the sidebar definition.

### B. Navbar Navigation

Edit your Docusaurus configuration file (usually **`docusaurus.config.js`** or **`docusaurus.config.ts`**) and remove the corresponding link from the `navbar.items` array.

### C. Hiding Specific Pages via Frontmatter (Docs Only)

You can explicitly tell Docusaurus **not** to include a specific doc page in the navigation sidebar by using the `sidebar_position` or `hide_in_sidebar` metadata tag in the frontmatter:

```markdown
---
id: my-page
title: My Page
hide_in_sidebar: true  # <--- Use this key
---
```

Setting `hide_in_sidebar: true` removes it from the sidebar *without* removing it from search or making it a draft.

-----

### Summary Table

| Goal                                | Method                     | Location/File                  | Key Setting             |
| :---------------------------------- | :------------------------- | :----------------------------- | :---------------------- |
| **Completely remove**               | Delete the source file     | `docs/`, `src/pages/`, `blog/` | N/A                     |
| **Unpublish (Docs)**                | Use frontmatter draft flag | Document's `.md`/`.mdx` file   | `draft: true`           |
| **Hide from Sidebar**               | Adjust sidebar config      | `sidebars.js`/`.ts`            | Remove the entry        |
| **Hide from Sidebar (Alternative)** | Use frontmatter metadata   | Document's `.md`/`.mdx` file   | `hide_in_sidebar: true` |

-----

Would you like me to show you an example of how to modify your `sidebars.js` file to remove an item from the navigation?