---
layout: text
title: "Mixins: Fluid Typography"
nav-title: Fluid Typography
permalink: mixins/fluid-type/
body-class: mixins
---

Oomph has a robust approach for Fluid — sometimes called Responsive — Typography. There are a few moving parts to getting this set up and customized for a new site. It is important to understand the moving parts, so here we go: 


## How to Use

A few files are responsible and required for Fluid Type. The [fluid-units]({{ site.baseurl }}mixins/fluid-units) mixin is leveraged for the `calc()` magic, so be sure to read about how that works first: 

{% highlight SASS %}
-sass
// There are four mixins in two files:
-- abstracts
--- mixins
---- fluid-typography.scss
---- fluid-units.scss
// Then there is a settings file inside abstracts:
--- project-vars
---- type-sizes.scss
     // We rely on the breakpoints map present here, called $project-breakpoints
---- breakpoints.scss
// We apply mobile-first type sizes in Bootstrap
--- bs4-vars
---- bs4-typography.scss
// Last, we apply the responsive stuff in our typography file
-- base
--- typography.scss
{% endhighlight %}


### ONE: Set some Type Sizes
In `abstracts/project-vars/type-sizes.scss` declare our type sizes in a multi-dimensional SASS Map that correlates with the names of the breakpoints that we want to use. We use the HTML elements as names here, but these can really be anything. It is important, though, that the names of the maps be the names of the breakpoints as well. So here, we start our fluid type scaling at the `small` breakpoint and stop it at the `x-large` one. These breakpoints are the ones named in `abstracts/project-vars/breakpoints.scss`. 

Map truncated below for legibility:

{% highlight SASS %}
$type-sizes: (
  // 1.125 typographic scale base 15
  small: (
    base: 16,
    h3: 20,
    h2: 22,
    h1: 24
  ),
  // 1.22 typographic scale base 18
  x-large: (
    base: 19,
    h3: 30,
    h2: 36,
    h1: 43
  ),
);
{% endhighlight %}

<aside class="parenthetical">
  <h4><i>How do I choose which values to use in Type Sizes?</i></h4>
  <p>Most of the time, the type scale is defined by the designer. If not, we use <a href="https://docs.google.com/spreadsheets/d/1qMutuKwJsuxDAi9aID7SVLJAsU4APr405EQO_YptScg/edit#gid=1981300418">a handy Google Sheet</a> to help calculate the values of our typographic scale. </p>
</aside>

#### TWO: Set the Mobile Sizes
In `abstracts/bs4-vars/bs4-typography.scss` declare the mobile values using the `one-type-size` mixin. REMs are default, but the mixin accepts a `$breakpoint` (the first one is the default) and a `$unit` if needed:
{% highlight SASS %}
// one-type-size($element, $breakpoint: null, $unit: 1rem)
$h1-font-size: one-type-size('h1');
$h2-font-size: one-type-size('h2');
$h3-font-size: one-type-size('h3');
// etc...
{% endhighlight %}

Those variables are used by Bootstrap to set the default font-size for each heading, display size, lead size, etc… If you have other named elements that are not already handled by Bootstrap, these can be declared in `typography.scss` using the more robust `fluid-type-sizes` mixin (explained next). 

#### THREE: Set the Responsive Sizes
Then, in `sass/base/typography.scss` we declare sizes again, but this time output just the media-query portion of the Fluid-Units concept with the `fluid-type-sizes` mixin. 

A `` boolean flag is set to `true` by default, but if we set it to `false`, we get the entire output including the mobile sizes: 

{% highlight SASS %}
// fluid-type-sizes($element, : true)
p {
  @include fluid-type-sizes('base', false);
}
h1,
.h1 {
  @include fluid-type-sizes('h1');
}

h2,
.h2 {
  @include fluid-type-sizes('h2');
}

h3,
.h3,
.lead {
  @include fluid-type-sizes('h3');
}
// etc...
{% endhighlight %}

This gives us the responsive fluidity that we want. Example output for the `base` and `h1` elements should result in this: 

{% highlight CSS %}
/* This one has the mobile value because we set the  flag to "false" */
p {
  font-size: 1rem;
}
@media (min-width: 38.75rem) {
  p {
    font-size: calc(1rem + (1.1875 - 1) * ((100vw - 38.75rem) / 36.25));
  }
}
@media (min-width: 75rem) {
  p {
    font-size: 1.1875rem;
  }
}
/* Notice we do not see the mobile size here because we set the  flag to default ("true") */
@media (min-width: 38.75rem) {
  h1, .h1 {
    font-size: calc(1.5rem + (2.6875 - 1.5) * ((100vw - 38.75rem) / 36.25));
  }
}
@media (min-width: 75rem) {
  h1, .h1 {
    font-size: 2.6875rem;
  }
}
{% endhighlight %}

For the `h1`, that’s a mobile font-size of 24px and a top-end desktop font-size of 43px, all expressed in REMs and with the middle viewports getting a relative calculation between those two values based on width of the viewport. 


## Result

An example iFrame with typographic content within. Resize it to see the change in type scale/size. A fluid change will not happen until our `small` breakpoint of 640px. 

Note that in Safari, the changes do not happen fluidity but rather in a jumpy sort of way. 

<div style="width: 322px; height:640px; min-width:322px; max-width:150%; resize:horizontal; overflow:auto; position:relative; left:50%; transform:translateX(-50%)">
  <iframe src="{{ site.baseurl }}mixins/sample-type/" style="position: relative; z-index:-1; height:100%; width:100%; border: 1px solid #101010"></iframe>
</div>


## Variations
Different projects are, well, different, so there might be some variation in mixins out there. If your project needs to deal with units in CSS Variables, the RISD Publications project has rewritten these mixins to use named declarations instead. Consult with your team mates before recreating some of that work for your own project. 

## Enjoy!