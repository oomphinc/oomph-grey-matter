---
layout: text
title: Read Me
nav-title: Read Me
permalink: readme/
---

## Grey Matter

Grey Matter is a boilerplate for stand-alone wireframe projects. Inspired by [Distillery](https://github.com/thinkshout/distillery/tree/master/) (and now heavily updated/modified), built and served with Jekyll, leveraging some Oomph Scaffold custom code and [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/download/).


### Getting started
To get up and running:


#### Install dependencies
Navigate to the project folder in your Terminal, then:

{% highlight shell %}
$ gem install bundler
$ bundle install
{% endhighlight %}

+Note: you may need to run the installers using the `$ sudo` command depending on the permissions of your computer.


#### Run the Local server and SASS compiler
From the project root, run: 

{% highlight shell %}
$ jekyll serve
{% endhighlight  %}

The server is available at `http://localhost:4040/grey-matter/` or  `http://0.0.0.0:4040/grey-matter/`. 

If the compiled file URLs need to have a different root path, change the `baseurl` value in  `_config` and restart the server. The web url will change as well, i.e. `http://localhost:4040/project`. When you upload the sites content to a server, all URLs will be prefixed with `/project`.


### Project Structure
{% highlight JavaScript %}
config.yml           // project set up and variables for base URL path
_includes            // HTML partials
-- footer.html
-- head.html
-- header.html
-- navigation.html
-- paragraphs        // specific partials for paragraph components
---- body.html
---- etc...
_layouts             // HTML templates
-- default.html      // Base tempalte
-- page.html         // Base content template, inherits default
-- text.html         // Base text template (constrained container), inherits default
_plugins             // RB files for Jekyll plugins
_sass                // The gold
_site                // Rendered static HTML (not under version control)
assets               // Static assets
-- css
---- greymatter.scss // Jekyll pipeline converts this to CSS on render
-- img
-- js
feed.xml             // Sample file type XML
Gemfile              // Project dependency manager
Gemfile.lock
etc...
{% endhighlight %}


### Usage
Any folder prefixed with an underscore is used as a build folder only, it is not compiled and rendered. An `assets` folder (unprefixed) will be included in the site build. Additional files that should be excluded from the build should be added to `_config.yml`.

Use `_includes` like you would use partials in PHP for repetitive elements like headers, footer, nav, etc…

Use `_layouts` to control larger templates. Jekyll ships with an example page and a post. Variables use a {% raw %}`{% double brace %}`{% endraw %} syntax, and refer to simple text declarations at the top of page files. 

`default.html` is the base template and includes calls for a header and footer. `page.html` is a partial, which renders where the {% raw %}`{{ content }}`{% endraw %} call is made. `text.html` is also a partial, with a max-width container around the content. 

Page files live at the site root. All rendered HTML and assets go into the `_site` folder by default, from which they are served in your browser. Pages can also be nested in folders but this structure is not required for the site render. The Liquid `permalink` value will determine where a rendered page lives in the URL structure.

More in depth Jekyll instructions here from [JekyllRB](https://jekyllrb.com/).


### Markdown
[A markdown syntax usage guide](https://github.com/fletcher/MultiMarkdown/blob/master/Documentation/Markdown%20Syntax.md). Daring Fireball has a really cool [online converter](http://daringfireball.net/projects/markdown/dingus) if you need troubleshooting help.


## Updates
Keep Ruby Gems and the Gemfile up to date. 

```sh
bundle update jekyll
```

Let this command run. All dependencies for the latest stable Jekyll release will be updated and the Gemfile.lock will be updated as well. Update any very old dependency versions in the Gemfile at your discretion. 