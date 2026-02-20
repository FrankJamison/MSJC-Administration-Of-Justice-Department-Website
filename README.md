# MSJC Administration of Justice Department

This repo is a restored snapshot of a 2006-era Mt. San Jacinto College “Administration of Justice and Corrections” site.

The project is intentionally **static** and **legacy-accurate**: pages are XHTML-era documents and much of the page chrome (header/menu/footer) is assembled with JavaScript via `document.write()`.

It also preserves an early, pre-standards take on “responsive design”: instead of modern CSS media queries (which weren’t widely used yet), the site uses JavaScript to detect browser/screen width at runtime and switch between resolution-targeted stylesheets.

## URLs

- Live preview (deployed): https://adminofjustice.fcjamison.com/
- Local dev (VS Code task default): http://msjcadministrationofjustice.localhost/
  - In this workspace, the **Open in Browser** task is typically generated/managed by the local setup script (it may rewrite `.vscode/tasks.json`). If your local vhost uses a different hostname, update `.vscode/tasks.json` → task **Open in Browser** → the second entry in `args`.

## How to preview locally

This site is meant to be served by a local web server (not opened directly as `file://`) so relative paths, script loading, and the Flash emulator (Ruffle) work consistently.

- If you’re using the included VS Code task, run **“Open in Browser”** (it opens the configured `*.localhost` URL).
- Otherwise, serve this folder with your local web server and open `/index.html`.

### Quick option (no virtual host)

If you just want a quick static server without configuring `*.localhost`, run from the repo root:

- `python -m http.server 8000`
- Open http://localhost:8000/

## Project layout

- Top-level `*.html`
  - Main site pages (`index.html`, `degree.html`, `coursesaj.html`, etc.)
- `courses/`
  - Popup course description pages (e.g. `courses/aj101.html`)
- `resources/css/`
  - Base layout styles: `stylesheet.css`
  - Resolution variants (auto-selected by `setPage.js`): `stylesheet0800.css`, `stylesheet1152.css`, `stylesheet1280.css`
  - Additional alternate stylesheet referenced by pages: `stylesheet1024.css` (titled `1600 x 1200`, not auto-selected by `setPage.js`)
  - Menu styles: `jamExpressMenu.css`
  - Popup styles: `popup*.css`
- `resources/scripts/`
  - Page assembly / layout: `header.js`, `footer.js`, `setPage.js`
  - Navigation: `jamExpressMenu.js`
  - Popups: `popup.js`, `popupheader.js`, `popupfooter.js`, `setPopup.js`
  - Course list generators: `courses_aj*.js`, `courses_corr*.js`
  - Flash emulator runtime (vendored/offline): `resources/scripts/ruffle/`
- `resources/flash/`
  - Original SWFs used by the site (`header.swf`, `popupheader.swf`)

## Page composition (legacy include pattern)

Most pages follow this pattern:

1. Load base CSS and alternate resolution CSS.
2. Load `resources/scripts/setPage.js`.
3. Build the header and menu by including scripts inside the markup:
   - `resources/scripts/header.js` writes the header HTML (and the SWF container)
   - `resources/scripts/jamExpressMenu.js` writes the navigation markup
4. Content is regular XHTML markup for the specific page.
5. Footer is injected with `resources/scripts/footer.js`.

Because the site uses `document.write()`, **script order matters**.

## Resolution switching (`setPage.js`)

`resources/scripts/setPage.js` implements a 2006-style “responsive” layout — a JavaScript-driven precursor to today’s responsive CSS:

- It enables one of the `<link rel="alternate stylesheet" title="…">` entries based on the current browser width (`800 x 600`, `1152 x 864`, `1280 x 1024`).
- Otherwise it falls back to the base `stylesheet.css` (roughly the 801–1025px/default layout).
- It stores the chosen layout in a cookie: `msjc_res_layout` (or clears it for the default layout).
- It sizes `#content`, `#sidebar`, and `#pageInfo` heights to fill the viewport when the page is shorter than the window.

### Sticky footer behavior

The footer is fixed to the bottom of the viewport in the base stylesheet:

- `resources/css/stylesheet.css`: `#footer { position: fixed; bottom: 0; left: 0; width: 100%; }`

Since a fixed footer can overlap content when the page scrolls, `setPage.js` adds bottom padding to `#content/#sidebar/#pageInfo` when the document is taller than the viewport.

## Header animation (Flash → Ruffle, fully offline)

The original site used Flash for the header animation. Modern browsers no longer run the Flash plugin, so this repo uses **Ruffle** (a Flash emulator) to render the original SWF.

Key files:

- `resources/scripts/header.js`
  - Writes a container (`#flashHead`) and a legacy `<object>/<embed>` fallback.
  - Loads the local Ruffle loader from `resources/scripts/ruffle/ruffle.js` (no CDN).
  - Sets `window.RufflePlayer.config.publicPath = 'resources/scripts/ruffle/'` so Ruffle can find its bundled JS/WASM chunks offline.
  - Builds the SWF URL with query parameters (logo text, colors, and a link target).
  - Enables autoplay (`autoplay = 'on'`) and hides overlays (`unmuteOverlay = 'hidden'`, `splashScreen = false`).

- `resources/scripts/popupheader.js`
  - Same approach as `header.js`, but with `../` paths and popup dimensions.

### Important gotcha: do not shadow `window.URL`

Ruffle (and modern web APIs) rely on the built-in `window.URL` constructor.
Avoid declaring a global variable named `URL` in these scripts.

## Navigation menu (`jamExpressMenu.js`)

The dropdown menu is generated at runtime by `resources/scripts/jamExpressMenu.js`:

- Menu data lives in arrays (`tmenu`, `tlink`, `ttype`).
- Markup is emitted via `document.write()`.
- Submenus are shown/hidden by toggling `display` on `#subMenuN` elements.
- Menu alignment is inferred from the `.topMenuLink` CSS `float` value (from `resources/css/jamExpressMenu.css`).

## Course lists and popups

Course list pages (e.g. `coursesaj.html`) generate their lists with scripts like:

- `resources/scripts/courses_aj.js`
- `resources/scripts/courses_ajCore.js`

These scripts:

- Build parallel arrays: course number/title/units/link.
- Write a row per course.
- Use `javascript:popUp('courses/<file>.html')` to open the description.

Popup behavior is controlled by:

- `resources/scripts/popup.js` (chooses popup dimensions based on `screen.width` and opens the window)
- `resources/scripts/popupfooter.js` (Print/Close buttons; attempts to resize the popup to fit content)

## Offline notes / external links

Most assets (CSS/JS/images/SWF/Ruffle) are local and can run offline when served from a local web server.

Some links are still intentionally external:

- Some navigation items link to external MSJC pages (e.g. schedule).

The footer’s “Valid XHTML 1.1” badge is served locally (no hotlinked image).

## Troubleshooting

- Header area is blank
  - Open DevTools Console and look for Ruffle load errors.
  - Verify `resources/scripts/ruffle/` exists and is being served.
  - Confirm `window.RufflePlayer.config.publicPath` matches the page depth (`resources/...` vs `../resources/...`).

- Header shows but looks tinted
  - The Ruffle background color is set in `header.js` / `popupheader.js` and should match the site header background.

- Menu doesn’t drop down
  - Ensure `resources/css/jamExpressMenu.css` is loading.
  - Ensure `jamExpressMenu.js` is included after the header container is written.
