---
layout: text
title: Grey Matter
nav-title: Home
permalink: /
---

## A prototyping kit built on Jekyll with Bootstrap 4


### Bootstrap 4
Bootstrap 4 is included in this project. It is located at `_sass/bootstrap` and includes SCSS and JS source files. To update, download the [latest Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/download/) and insert it into this project at `_sass`.

[Documentation on Bootstrap's atomic classes](https://getbootstrap.com/docs/4.0/getting-started/introduction/) is available and we highly recommend using them. Keep custom CSS to a minimum. 

### Custom CSS
When needed, custom CSS should be added to `_sass/project.scss`.

### Font Awesome
A CDN link to the full Font Awesome set of icons in the `<head>`, located at `_includes/head.html`. [Icon reference guide for 4.7 is here](https://fontawesome.com/v4.7.0/icons/). When the project gets built in final form, define a custom set with only the icons we need. [A list of the icons that this project uses should be made here]({{ "icons/" | prepend: site.baseurl }}). 

### Modernizr
A base-level [Modernizr build](https://modernizr.com/download#setclasses) in included in this project in the `<head>`, located at `_includes/head.html` with source file at `_assets/js/vendor`. Update the source file to add more tests as needed. 


## Jekyll (< v3.0.0)

### Jekyll gives this project:
* A built-in local development environment
* Simple SASS asset pipeline with Autoprefixer built-in
* Supports `.md` as well as `.html` or `.xml` files. Mix and match as needed 
* Supports partials for repetitive elements, like header, footer and navigation 
* Written with a clean and unobtrusive {% raw %}`{{ double brace }}`{% endraw %} syntax
* Supports typical `if/else`, `for`, and `while` directives 
* [Has many built in output filters](https://gist.github.com/smutnyleszek/9803727#output) to sort arrays and filter strings
* Supports a simple date-based blog. [More details here](https://jekyllrb.com/docs/posts/). [Jekyll even supports the idea of Draft posts!](https://jekyllrb.com/docs/drafts/)
* Supports [categories and tags](https://codinfox.github.io/dev/2015/03/06/use-tags-and-categories-in-your-jekyll-based-github-pages/) with archive pages. 
* Built-in support for [syntax highlighting of code snippets](https://jekyllrb.com/docs/posts/#highlighting-code-snippets) using either Pygments or Rouge.
* [Support for data files](https://jekyllrb.com/docs/datafiles/) (CSV, JSON or YAML) to drive dynamic lists of content. 


### Pygments Code Highlighting
Jekyll supports Rouge by default, but this project uses Pygments. Code highlighting is done with the name of the language passed through a {% raw %}`{% highlight [language] %}`{% endraw %} tag. [Supported languages for highlighting](http://pygments.org/languages/) are on the Pygments.org site.  

This project uses the `colorful.css` theme by default. To change, choose a stylesheet from [this list of supported themes](https://github.com/richleland/pygments-css). [Previews for these stylesheets](https://richleland.github.io/pygments-css/) are available.

{% highlight html %}
<!DOCTYPE html>
<title>Title</title>

<style>body {width: 500px;}</style>

<script type="application/javascript">
  function $init() {return true;}
</script>

<body>
  <p checked class="title" id='title'>Title</p>
  <!-- here goes the rest of the page -->
</body>
{% endhighlight %}


### Cool things Jekyll templating tags do

#### Unless directive
The `unless` tag in a `forloop`: 

{% highlight erb %}
{% raw %}
<a href="{{  file.url }}" >{{ file.name }}</a>{% unless forloop.last %}, {% endunless %}
{% endraw %}
{% endhighlight %}

Forloops also support first and last built in (no counter needed!) as seen above. 


#### Var dump
Dump a whole variable: {% raw %}`{{ variable | json }}`{% endraw %}. 

{% comment %}
#### Directory scanning/globbing
Use a Directory Plug in to loop over HTML files:

	The *directory* plugin scans a directory and gives us access to the following variables:
	file.url        # absolute path to file
  file.name       # basename
  file.date       # date extracted from beginning of filename, if present (optional)
  file.slug       # basename with the date and file extension stripped off
  file.title      # file.slug with hyphens converted to spaces, and put into Title Case

  Below we loop over all files to build an example page

{% raw %}{% directory path: _components/html %}{% endraw %}
{% endcomment %}
