# Flex-BP hugo CV

Flexbox based Hugo CV theme which provides out of the box best practices like performance and SEO readiness. Using [hugo-best-practices](https://github.com/spech66/hugo-best-practices), [Front-End Checklist](https://github.com/thedaviddias/Front-End-Checklist) and the [Front-End Performance Checklist](https://github.com/thedaviddias/Front-End-Performance-Checklist).

Other themes by Sebastian Pech: [Bootstrap-BP](https://github.com/spech66/bootstrap-bp-hugo-theme), [Materialize-BP](https://github.com/spech66/materialize-bp-hugo-theme),
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
  - [Screenshots of cofigurations](#screenshots-of-cofigurations)
  - [Google Analytics](#google-analytics)
  - [Schema.org support](#schemaorg-support)
  - [Social Icons](#social-icons)
  - [Custom CSS/JS](#custom-cssjs)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Features

- Color themes
- SEO best practices supported (Schema.org, open graph, meta information, ...)
- Automatically resizing of images
- One minified file per ressource only (js, css)
- CDN font support (Google Fonts, ...)
- Settings for easy customization of layouts and features
- Icons for Social Media
- Custom css/js
- Multilingual and i18n support
- ...

## Install the theme

With Git installed, run the following commands inside the Hugo site folder. If Hugo has not yet been installed, read the setup guide [here](https://gohugo.io/overview/installing/).

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
hugo server --themesDir ../..
```

## Configuration and theme specific settings

TODO

## Screenshots of cofigurations

![CV Theme](https://raw.githubusercontent.com/spech66/flex-bp-hugo-cv/master/images/tn.png)

## Google Analytics

This theme uses the internal asynchronous template for Google Analytics tracking. You only have to provide your tracking id in your configuration file.

```yaml
googleAnalytics = "UA-123-45"
```

## Schema.org support

Provide one author to enable the Schema.org support.

```yaml
[Author]  
  name = "Sebastian Pech"
```

## Social Icons

Icons for Social Media. Add the block to the config.

```yaml
# Sets Social Media icons to appear and link to your account. Value should be your
# username unless otherwise noted.
# Code from https://themes.gohugo.io/future-imperfect/ theme
[social]
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
  facebook         = "spechde" # https://fb.me/spech.de
  googleplus       = ""
  reddit           = ""
  quora            = ""
  youtube          = "/channel/UCrRRKovAoTYGIIB9T08pbHw" # https://www.youtube.com/channel/UCrRRKovAoTYGIIB9T08pbHw
  vimeo            = ""
  whatsapp         = "" # WhatsApp Number
  instagram        = "sebastian_pech" # https://www.instagram.com/flowartsde/
  tumblr           = ""
  twitter          = "spech84"
  skype            = ""
  snapchat         = ""
  pinterest        = ""
  telegram         = ""
  discord          = "" # invite link
  # Email
  email            = ""
```

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
