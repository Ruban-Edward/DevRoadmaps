# DevRoadmaps

Practical, connected learning roadmaps for developers: **Python, Git & GitHub, Docker and Linux** (251 topics), with more paths planned (React, FastAPI, APIs).

Each topic has a short explanation, syntax, a copyable example, when to use it, and common mistakes. Progress is saved in your browser (`localStorage`).

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173/DevRoadmaps/
npm run build    # outputs to dist/
```

## Project layout

| Path | Purpose |
| --- | --- |
| `src/tracks.js` | Learning paths (name, icon, accent, start topic). Add new paths here. |
| `src/data/*.js` | Roadmap content, one file per track. |
| `src/components/` | `HomePage`, `Sidebar`, `TopicPage`, `Card`, `CopyButton`. |
| `src/styles.css` | All styling. Each track has its own accent colour (`.app[data-track=...]`). |

## Adding content

Topic fields are documented at the top of `src/data/roadmap.js`. Topic `id`s must be unique across **all** tracks (they are used as URL hashes).

## Deployment

Pushing to `main` builds and deploys to GitHub Pages via `.github/workflows/deploy.yml`. `dist/` and `node_modules/` are built in CI and are not committed.

## Author

Created by **Ruban Edward**.

## Licence

Code: see `LICENSE`. Content: see `CONTENT-LICENSE.md`.
