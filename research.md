---
title: "Research interests"
permalink: "/research/"
layout: page
---

I am interested in the understanding of how atomic and molecular clouds form in the Milky Way and external galaxies that lead to star formation, and how stellar feedback mechanisms affect the Interstellar Medium (ISM), which in turn affect star formation. I also work with CO and [CII] data from the NASA SOFIA program FEEDBACK at the I. Physikalisches Institut, Universität zu Köln. This encompasses exploring and analyzing astrophysical data, modelling dust dynamics, as well as modelling and studying photo-dissociation regions (PDRs). It also involves developing various techniques in those areas.





## Some Examples

{% if site.show_excerpts %}
  {% include home.html %}
{% else %}
  {% include archive.html title="Posts" %}
{% endif %}


## config

You can use this theme with the `jekyll-remote-theme` plugin. Just create an empty repo, copy over the `index.html` file and add this to your `_config.yml`:

```yaml
remote_theme: niklasbuschmann/contrast@v2.11

plugins:
  - jekyll-remote-theme
```



## MathJax

Contrast comes preinstalled with a leightweight alternative to MathJax called [KaTeX](https://katex.org/). To display equations in a post simply set `mathjax: true` in the article's front matter.

