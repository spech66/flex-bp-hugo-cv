# flex-bp-hugo-cv

Open source Hugo CV theme (github.com/spech66/flex-bp-hugo-cv), listed in the Hugo themes gallery,
so `theme.toml`, `README.md` and `images/` are public facing. No tags: the gallery and Hugo Modules
use the latest commit on `main`.

## Example site

```
hugo server -s exampleSite --themesDir ../..
```

CV content is in `exampleSite/data/<language>/content.yaml`; keep `en` and `de` in sync (titles
translated, same sections).

## Gallery screenshots

`images/screenshot.png` (1500x1000) and `images/tn.png` (900x600, the same image scaled by 0.6):
the English start page, light mode on the left, dark mode on the right, split by a 3 px line
(`#2e74b5`) at x = 759.

1. Build with `-b "file:///<output dir>/"` and copy `index.html` twice, with
   `<script>localStorage.setItem("theme","light")</script>` (or `"dark"`) right after `<head>`.
   Headless Edge follows the system color scheme otherwise.
2. Capture both with headless Edge/Chrome: `--headless=new --hide-scrollbars --allow-file-access-from-files
   --window-size=1500,1000 --force-device-scale-factor=1 --screenshot=...`
3. Combine: x 0-758 from light, 759-761 the line, 762-1499 from dark; scale to 900x600 for `tn.png`.

## Conventions

- Icons as inline SVG (`partial "icon.html"`, `data/bpicons.json`), no icon font.
- Keep `min_version` in `theme.toml` and `module.hugoVersion.min` in `hugo.toml` in line with the
  Hugo features used.
