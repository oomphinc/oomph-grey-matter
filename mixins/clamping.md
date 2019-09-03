---
layout: text
title: "Mixins: Text-Clamping"
nav-title: Text-Clamping
permalink: mixins/clamping/
body-class: mixins
---

What the heck is _clamping_? When a single line of text’s character display is restricted, that’s called “line-clamping” — as in, we are clamping/restricting its displayed length by the width of its container (or something else). 

{% highlight SASS %}
-sass
-- abstracts
--- mixins
---- clamping.scss:

@include single-line-clamp(calc(100vw - 5.5rem));
@include multi-line-clamp(2);
{% endhighlight %}

## Examples

There are two modes of clamping — single line (most common) and multi-line. A single line example might look like this: 

### Single Line:

<div class="example">
  <p class="lead u-single-line-clamp">I am a single line of text but the size of the container will “clamp” the number of visible characters.</p>
</div>

```
<p class="lead u-single-line-clamp">I am a single line of text but the size of 
the container will “clamp” the number of visible characters.</p>
```

#### Usage:
{% highlight SASS %}
// Where 100% is the width. A calc() value would be acceptable as well, depending on the use case
.u-single-line-clamp {
  @include single-line-clamp(100%);
}
{% endhighlight %}

#### Output
{% highlight CSS %}
.u-single-line-clamp {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
{% endhighlight %}

### Multi-line:

<div class="example">
  <p class="lead u-multi-line-clamp">I am a single line of text but the size of the container will “clamp” the number of visible lines to a specified number by multiplying the line-height and number of desired lines to achieve a maximum container height.</p>
</div>

```
<p class="lead u-multi-line-clamp">I am a single line of text but the size of 
the container will “clamp” the number of visible lines to a specified number by 
multiplying the line-height and number of desired lines to achieve a maximum 
container height.</p>
```

**Note**: This is done is a cheesy way, CSS-only. For better results, you may want to rely on a JS solution. [CSS-Tricks has an in-depth article about the various solutions in the wild](https://css-tricks.com/line-clampin/). 

#### Usage:
{% highlight SASS %}
// Where 2 is the number of lines we want to clamp to and
// the crazy string is a way of grabbing the font-size of .lead
// $font-size defaults to BS4's $font-size-base and
// $line-height defaults to BS4's $line-height-base if not supplied
.lead.u-multi-line-clamp {
  @include multi-line-clamp(2, rem(map-get(map-get($type-sizes, x-large), h3)));
}
{% endhighlight %}

Extra work has not yet been added to this mixin to make the `max-height` responsive to changes in the fluid type size. If we have a project that needs it, let's work on that (possibly with CSS custom properties to make it easier). 

#### Output
{% highlight CSS %}
.lead.u-multi-line-clamp {
  position: relative;
  overflow: hidden;
  max-height: 5.25rem;
  padding-right: 1em;
}
.lead.u-multi-line-clamp::before,
.lead.u-multi-line-clamp::after {
  position: absolute;
  bottom: 0;
  right: 0;
}
.lead.u-multi-line-clamp::before {
  z-index: 2;
  content: '\2026';
}
.lead.u-multi-line-clamp::after {
  content: "";
  z-index: 1;
  width: 1em;
  height: 1em;
}
{% endhighlight %}
