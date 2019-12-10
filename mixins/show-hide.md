---
layout: text
title: "Mixins: Show Hide"
nav-title: Show Hide
permalink: mixins/show-hide/
body-class: mixins
---

Showing and hiding content needs to be accessible. These mixins have been around in our codebase for quite some time and have come to be great to use because it also offers legibility when reviewing code. 

{% highlight Ruby %}
-sass
-- abstracts
--- mixins
---- show-hide.scss:

@include hide(); { }
@include show($display) { }
{% endhighlight %}

## Example

To hide an element responsively, use inside a media query. To show it again, pass through the value of the `display` property that you'd like the element to use when visible. `display: block` is the default. 

#### Usage:
{% highlight Ruby %}
.element {
  @include hide();

  @include media-breakpoint-up(sm) {
    @include show();
  }
}
{% endhighlight %}

#### Output
{% highlight CSS %}
.element {
  display: none;
  visibility: hidden;
}
@media (min-width: 640px) {
  .element {
    display: block;
    visibility: visible;
  }
}
{% endhighlight %}


## Note: This is not the same as `.sr-only`

The `.sr-only` class is still needed when we want content to be available to screenreaders but not available to visual users. These show/hide mixins are used to hide an element from visual and non-visual users. 
