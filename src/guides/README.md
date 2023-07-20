# Contributing to Guides

## Guidelines & Tips

- **frontmatter** (basically metadata) is yaml, starts and ends with "---"
  - defines the `title`, `authors`, `date`, whether it should be `published`
- **filenames** are set as the url path and should be web-safe (only alphanumeric/hyphens)
  - mdsvex will search recursively for `.svx` files, directories will be only for organization
- **image** paths lead to the static folder and must start with a "/"
  - please place these in `static/` and try not to link images to external places
- keep your markdown **neat**
  - stay consistent with spacing, use \*
  - use line breaks to avoid weird inline styling
- you can embed svelte components into the markdown
  - making special components for maybe jupyter notebooks? code blocks?

## Warnings

- try not to mix styling, like italics with code blocks, or links with bold
- h2 (##) is major subtitles, h3 (###) is minor subtitles
  - don't use h1, h4, h5, h6
- don't use tables!
