---
layout: text
title: "Mixins: Browser Hacks"
nav-title: Browser Hacks
permalink: mixins/hacks/
body-class: mixins
---

Browser Hacks are a necessary evil sometimes. As a team, Oomph is pretty good at refactoring some code if it means avoiding a browser hack. _Maybe there is a simpler way_ should be our ethos. But then sometimes there is no way around it — one browser is being a pain and it is not worth refactoring a bunch of code to get it to play behave like everyone else. 

We document the hacks that we use in this file. It can be a bit of work to get them to pass the linter, but once they do, we want to be sure that other people can use them should they need them. So please, **if you add a hack, contribute it back**! 

{% highlight SASS %}
-sass
-- abstracts
--- mixins
---- hacks.scss:

@include hack-for-old-ie(); { }
@include hack-for-any-firefox() { }
{% endhighlight %}

## Example

These are **content** includes which means that they do not have any parameters and you pass rules through them like you would `media-breakpoint()` mixins from Bootstrap. They pass specific rules to specific browsers: 

#### Usage:
{% highlight SASS %}
.element {
  @include hack-for-old-ie() {
    height: 3rem;
  }
}
{% endhighlight %}

#### Output
{% highlight CSS %}
@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
  .element {
    height: 3rem;
  }
}
{% endhighlight %}


## If you add a hack, contribute it back!

We use the `hack-for-...` naming convention for legibility. It should be clear to other authors that encounter your code that this is a ruleset intended for a particular use case. As hacks are intended for a very specific browser version, please be sure to use a clear name that also let's authors know which browser version(s) this is intended for. 
