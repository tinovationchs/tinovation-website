# Contributing to Guides

- fork the repo and clone your own
- write a `.svx` markdown file, and you can inject custom svelte components ([mdsvex docs](https://mdsvex.pngwn.io/docs))
  - follow the guidelines below for metadata (frontmatter), naming files, and images
- add it to a **sensible** location in the `src/guides/`
- you will need to add your file to the `resources.ts` object called `resourceCategories` to have it show up
  - using a string uses defaults, the `Item` has more control over how it is rendered
  - follow the format of the preexisting ones
- test it thoroughly with `npm run dev` from the terminal
- make a commit and submit a pull request to the main repo from you own!

## Guidelines & Tips

- **frontmatter** (basically metadata) is yaml, starts and ends with "---"
  - defines the `title`, `authors`, `date`, whether it should be `published`
- **filenames** are set as the url path and should be web-safe (only alphanumeric/hyphens)
  - mdsvex will search recursively for `.svx` files, directories will be only for organization
- **image** paths lead to the static folder and must start with a "/"
  - please place these in `static/guides/` and try not to link images to external places
  - use the corresponding folders for each category
- keep your markdown **neat**
  - stay consistent with spacing, use \*
  - use line breaks to avoid weird inline styling
- you can embed svelte components into the markdown
  - making special components for maybe jupyter notebooks? code blocks?

## Warnings

- try not to mix styling too much, like italics with code blocks, or links with bold
- h2 (##) is major subtitles, h3 (###) is minor subtitles
  - don't use h1, h4, h5, h6
- code highlighting not done!!
- don't use tables, sub, or sup!
