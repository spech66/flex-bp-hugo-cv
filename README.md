# Flex-BP hugo CV

Flexbox based Hugo CV theme which provides out of the box best practices like performance and SEO readiness. Using [hugo-best-practices](https://github.com/spech66/hugo-best-practices), [Front-End Checklist](https://github.com/thedaviddias/Front-End-Checklist) and the [Front-End Performance Checklist](https://github.com/thedaviddias/Front-End-Performance-Checklist).

Other themes by Sebastian Pech: [Bootstrap-BP](https://github.com/spech66/bootstrap-bp-hugo-theme), [Flex-BP hugo CV](https://github.com/spech66/flex-bp-hugo-cv),
[Bootstrap-BP hugo startpage](https://github.com/spech66/bootstrap-bp-hugo-startpage).

## Table of contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Flex-BP hugo CV](#flex-bp-hugo-cv)
  - [Table of contents](#table-of-contents)
  - [Features](#features)
  - [Install the theme](#install-the-theme)
  - [Update the theme](#update-the-theme)
  - [Run example site](#run-example-site)
  - [Configuration and theme specific settings](#configuration-and-theme-specific-settings)
  - [Screenshots of configurations](#screenshots-of-configurations)
  - [Google Analytics](#google-analytics)
  - [Schema.org support](#schemaorg-support)
  - [Social Icons](#social-icons)
  - [Custom CSS/JS](#custom-cssjs)
  - [Misc](#misc)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Features

- Light and dark mode (follows the system setting, toggle button)
- Print/PDF layout for A4 (button in the page, no navigation, page breaks between entries)
- SEO best practices supported (Schema.org, open graph, meta information, ...)
- Photo resized and converted to WebP automatically
- Icons as inline SVG (Font Awesome Free glyphs, no icon font), system font by default
- One minified file per resource only (js, css)
- CDN font support (Google Fonts, ...)
- Settings for easy customization of layouts and features
- Icons for Social Media
- Custom css/js
- Multilingual and i18n support
- ...

## Install the theme

With Git installed, run the following commands inside the Hugo site folder. If Hugo has not yet been installed, read the setup guide [here](https://gohugo.io/getting-started/quick-start/).

```sh
mkdir themes
cd themes
git clone https://github.com/spech66/flex-bp-hugo-cv.git
```

You can get a zip of the latest version of the theme from the [home page](https://github.com/spech66/flex-bp-hugo-cv) and extract it to the themes folder.

## Update the theme

Go to the themes folder as in the installation and run the following command.

```sh
git pull
```

## Run example site

Go to the `exampleSite` folder from the theme `themes/flex-bp-hugo-cv/exampleSite` and run the following command.

```sh
hugo server --themesDir ../.. --minify
```

## Configuration and theme specific settings

None yet. See `config.toml` in the `exampleSite` folder for best settings. The CV content lives in `data/<language>/content.yaml`, the photo in `assets/photo.jpg`.

Icons in the data file keep the Font Awesome class names (`Icon: fas fa-user`), they are rendered as inline SVG from `data/bpicons.json`. Add own icons to that file if you need more.

Colors and the font are CSS variables. Override them in `assets/css/custom.css`:

```css
:root {
  --cv-accent: #2e74b5;       /* headings, icons, markers */
  --cv-accent-text: #245d93;  /* links, readable on white */
  --cv-font: system-ui, sans-serif;
}

body.dark-theme {
  --cv-accent: #7cb4ec;
  --cv-accent-text: #8cc0f2;
}
```

**Upgrading from older versions:** Font Awesome is no longer loaded. Own templates using `<i class="fas fa-...">` should switch to `{{ partial "icon.html" "fas fa-..." }}`.

Best run with `--minify` flag for hugo.

## Screenshots of configurations

![CV Theme](https://raw.githubusercontent.com/spech66/flex-bp-hugo-cv/main/images/tn.png)

## Google Analytics

The native Hugo Google Analytics template has been removed!

## Schema.org support

The start page gets a `ProfilePage` with the person of the CV as `mainEntity` (plus `WebSite`), filled from the CV data of the page language (`data/<language>/content.yaml`):

- `name`: `PersonalData.Name` (else `params.author.name`), `image`: `assets/photo.jpg` (else `params.authorImage`), `description`: `params.description`
- `jobTitle` and `worksFor`: the first `Experience` entry, if its `EndDate` is no date like `05/2014` (e.g. "Today"). `params.author.jobTitle` overrides the job title.
- `alumniOf`: organisations of `AcademicEducation`, `ProfessionalTraining`, `SchoolEducation` and `FurtherEducation`
- `hasCredential`: the `Qualification` of these entries and the `Diplomas` items (leading date like `01/2020` removed). Add `Credential: false` to an entry that ended without a degree.
- `knowsAbout`: the `Skills` items and the skills of the `Experience` entries (or `params.author.knowsAbout`), `knowsLanguage`: the `Languages` items without the level in brackets
- `sameAs`: the profile links of `params.social`

Address, phone, email and birthday are not added on purpose: they stay readable on the page, but are not handed to crawlers in a machine readable form.

For language specific descriptions put `description` into the language params:

```toml
[languages.en]
  title = "CV"
  [languages.en.params]
    description = "Developer and coach"
```

## Social Icons

Icons for Social Media in the contact section. Add the block to the config, empty values are skipped. The links of profiles also go into the `sameAs` list of the schema and get `rel="me"`.

```toml
# Value should be your username unless otherwise noted.
[params.social]
  # Coding Communities
  github           = ""
  gitlab           = ""
  stackoverflow    = "" # User Number
  bitbucket        = ""
  jsfiddle         = ""
  codepen          = ""
  # Visual Art Communities
  deviantart       = ""
  flickr           = ""
  behance          = ""
  dribbble         = ""
  # Publishing Communities
  wordpress        = ""
  medium           = ""
  # Professional/Business Oriented Communities
  linkedin         = ""
  linkedin_company = ""
  foursquare       = ""
  xing             = ""
  slideshare       = ""
  # Social Networks
  facebook         = ""
  reddit           = ""
  quora            = ""
  youtube          = "" # e.g. "@name" or "channel/ID"
  youtube2         = "" # second channel
  vimeo            = ""
  whatsapp         = "" # WhatsApp Number
  instagram        = ""
  tiktok           = "" # @username
  tumblr           = ""
  twitter          = "" # links to x.com
  mastodon         = "" # full profile URL, e.g. "https://mastodon.social/@name"
  snapchat         = ""
  pinterest        = ""
  telegram         = ""
  discord          = "" # invite link
  twitch           = ""
  # Email
  email            = ""
```

The networks, their URLs, icons and order are defined in `data/bpsocial.yaml`. Copy it to `data/bpsocial.yaml` in your site to change the order or add a network.

**Upgrading from older versions:** `googleplus` and `skype` were removed (both services are shut down).

## Custom CSS/JS

The theme provides two ways for custom css/js. The first way is writing your styles to `/assets/css/custom.css` and scripts to `/assets/js/custom.js`. This will merge and minify the styles/scripts with the theme specific files resulting in only one file for the whole website.

```toml
[params]
  js=["/js/test_site.js"]
  jscdn=["https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"]
  css=["/css/test_site.css"]
  csscdn=["https://fonts.googleapis.com/css?family=Roboto&display=swap"]
```

```yaml
---
js:
    - /js/test.js
jscdn:
    - https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js
css:
    - /css/test.css
csscdn:
    - https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900
---
```

## Misc

- Dog Photo - Image by [Nikki Luijpers](https://pixabay.com/users/lovechicco-14817111/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5692796) from [Pixabay](https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5692796).
- [CSS Tricks - A Complete Guide to Dark Mode on the Web](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/)
