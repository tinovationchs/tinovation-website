# Blueprints Hub Design Specification

## Overview
As AI tools lower the barrier to writing syntax, the Tinovation website's educational resources must shift focus from "how to code" to "what to build and how to architect it". This project replaces the existing language-centric "Resources" page with a "Blueprints Hub" that provides students with full-stack project architectures, tech stacks, and AI prompting strategies.

## Architecture & Data Flow
1. **Content Organization:** 
   - New directory `src/guides/blueprints/` will house the new project blueprint `.svx` files.
   - Existing guides in `src/guides/web-dev/` and other folders can either be archived or repurposed.
2. **Data Schema (`src/lib/types.ts`):**
   - The `Item` or a new `Blueprint` interface will be updated to include frontmatter fields specific to blueprints:
     - `tech_stack`: Array of strings (e.g., `["React", "Node.js", "PostgreSQL"]`)
     - `difficulty`: String enum (e.g., `"Beginner"`, `"Intermediate"`, `"Advanced"`)
3. **Routing & UI (`src/routes/resources/+page.svelte`):**
   - The current category-based list view will be replaced with a Card Grid layout.
   - Each card represents a Blueprint, prominently displaying its title, tech stack badges, and difficulty rating.

## Component Details
### The Blueprint Hub Page
- **Search & Filter:** Retain the existing search bar, but adapt filtering to filter by `tech_stack` or `difficulty` instead of just broad categories.
- **Card UI:** A clean, engaging container showing the project idea.

### The Individual Blueprint Page (`.svx`)
Each blueprint will follow a standardized structure:
1. **Goal:** A brief description of the final product.
2. **Architecture Diagram:** Using Mermaid.js or static images to show data flow between Client, Server, and Database.
3. **Tech Stack:** Why these specific technologies were chosen.
4. **AI Prompting Guide:** A list of specific, high-level prompts students can use to instruct AI tools to build the scaffolding and logic.

## Error Handling & Edge Cases
- Missing frontmatter fields (e.g. a blueprint without a `tech_stack` defined) should safely fallback to an empty array so the UI doesn't crash during iteration.
- Invalid or broken Markdown/Svelte syntax within the new `.svx` files should be caught locally during `npm run build` or `npm run check`.

## Testing
- Ensure `import.meta.glob` in `src/routes/resources/[id]/+page.ts` correctly captures `.svx` files in the new `src/guides/blueprints/` directory.
- Verify filtering on the Hub page updates the card grid reactively.
