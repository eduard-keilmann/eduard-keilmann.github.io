---
title: "Research interests"
permalink: "/research/"
layout: page
---

I am interested in the understanding of how atomic and molecular clouds form in the Milky Way and external galaxies that lead to star formation, and how stellar feedback mechanisms affect the Interstellar Medium (ISM), which in turn affect star formation. I also work with CO and [CII] data from the NASA SOFIA program FEEDBACK at the I. Physikalisches Institut, Universität zu Köln. This encompasses exploring and analyzing astrophysical data, modelling dust dynamics, as well as modelling and studying photo-dissociation regions (PDRs). It also involves developing various techniques in those areas.





## Installation (jekyll-remote-theme method)

You can use this theme with the `jekyll-remote-theme` plugin. Just create an empty repo, copy over the `index.html` file and add this to your `_config.yml`:

```yaml
remote_theme: niklasbuschmann/contrast@v2.11

plugins:
  - jekyll-remote-theme
```

Note: to enable icons you also need to copy over the `_data` folder.

## Config

Your `_config.yml` could for example look like this:

```yaml
title: "Blog Title"
author: "Blog Author"
description: "My personal blog about ... something"
permalink: /:title/
lang: "en"
excerpt_separator: "\n\n\n"
date_format: "%B %d, %Y"

# Layout

show_excerpts: true        # show article excerpts on the home page
show_frame: true           # adds a gray frame to the site
show_sidebar: false        # show a sidebar instead of the usual header

# Menu

navigation:                # accepts {file, title, url, icon, sidebaricon}
  - {file: "index.html"}
  - {file: "README.md"}

external:                  # shows a footer with social links - for available icons see fontawesome.com/icons
  - {title: Mail, icon: envelope, url: "mailto:niklasbuschmann@users.noreply.github.com"}
  - {title: Github, icon: github, url: "https://github.com/niklasbuschmann/contrast"}
  - {title: Subscribe, icon: rss, url: "/feed.xml"}

comments:
#  disqus_shortname: ""    # see https://disqus.com/
#  isso_domain: ""         # see https://posativ.org/isso/

plugins:
 - jekyll-feed

```

## MathJax

Contrast comes preinstalled with a leightweight alternative to MathJax called [KaTeX](https://katex.org/). To display equations in a post simply set `mathjax: true` in the article's front matter.

