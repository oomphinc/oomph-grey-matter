---
layout: text
title: "Mixins: Fluid Units"
nav-title: Fluid Units
permalink: mixins/fluid-units/
body-class: mixins
---

Why would we want “fluid units”? What are they? 

**Scenario**: We have a container that we use across the entire site. On mobile there is `1rem` padding all the way around the element, at tablet size we increase it to `2rem`, and at desktop we increase it to `3rem`. In that scenario, as one increases the size of the viewport, one will see these “bumps” as the padding rules are hit and increase or decrease with the size of the viewport. 

Wouldn’t it be nice if these “bumps” were removed in favor of a smooth transition from `1rem` at 480px wide to `3rem` at 1180px wide? That’s what fluid-units can do. They are programmed to scale a little by little as the viewport increases width so each viewport width gets its own calculation, and the “bumps” when a breakpoint is hit are removed.  

## How to Use
Fluid Units makes use of a complex `calc()` function. We have broken these mixins into two parts: a reusable `@function` where the magical `calc()` is contained, and a robust `@mixin` where we can apply the function to specific CSS properties: 

### Fluid Calc & Fluid Units
{% highlight SASS %}
-sass
-- abstracts
--- mixins
---- fluid-units.scss:
@function: fluid-calc($min-value, $max-value, $min-vw, $max-vw, $unit: 1rem);
@mixin: fluid-units($properties, $min-value, $max-value, $min-vw, $max-vw, $unit, $mobile);
{% endhighlight %}

The _Fluid Units_ mixin can be used to make **any** unit fluid. This is the basis of the concept: 

1. Define some CSS properties to apply our calculations to
1. Define a “base” size that will be output mobile-first as the default
1. Define a “large” size that a style will “grow” to
1. Define a small breakpoint where we want the growth to start*
1. Define a large breakpoint that we want the growth to stop at*
1. Define a unit to be used in `calc()` because we need one (default: 1rem)*
1. A Boolean for whether or not to render mobile values (default: true)*

_* Optional values because there are defaults set_. In `abstracts/project-vars/breakpoints.scss` we should have set default values for `$min-vw` and `$max-vw` which this function/mixin can use. It is helpful to double check, though, that these viewport measurements are in the unit that you expect.

### Usage

{% highlight SASS %}
// SASS would be:
.container {
  @include fluid-units('padding-left' 'padding-right', 1, 3, (480/16), (1180/16), 1rem, true);
  // Or, without the default values:
  // @include fluid-units('padding-left' 'padding-right', 1, 3);
}
{% endhighlight %}

In the string above we have the following parts: 
1. `'padding-left' 'padding-right'`: A single or space-separated list of properties
2. Minimum value of `1`: The value to start at, mobile-first
3. Maximum value of `3`: The value to end at, desktop-last. **Both of these should be unitless!**
4. Minimum viewport of `(480/16)`: The viewport width to start the `calc()` from
5. Maximum viewport of `(1180/16)`: The viewport width to stop the `calc()` at. **Both of these should be unitless!** In this example we express them in pixels for legibility, but divide them by 16 to get a REM value
6. Unit of `1rem`: A `calc()` function needs a unit to be present. In this example, all other values are unitless but expected to be REM. But if we passed pixels values through for the min, max, min-viewport, and max-viewport values, this value should be `1px`
7. `true` Whether or not to render the Mobile value. Default is `true`. _This is here because of Bootstrap and the way in which our Fluid Typography has been set to work. Just know that if you use this mixin as shown, you can drop this declaration and rely on the default of true_

{% highlight CSS %}
// CSS would be:
.container {
  padding-left: 1rem;
  padding-right: 1rem;
}
@media (min-width: 30rem) {
  .container {
    padding-left: calc(1rem + (3 - 1) * (100vw - 30rem) / 38.75);
    padding-right: calc(1rem + (3 - 1) * (100vw - 30rem) / 38.75);
  }
}
@media (min-width: 73.75rem) {
  .container {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}
{% endhighlight %}

*Text version of what is happening:*
At default/mobile size, padding left and right is `1rem`. Starting at 480px wide, the viewport width and some math start to increase that value little by little until we hit the viewport width of 1180px, at which point we stop allowing the increase and cap the padding left and right at `3rem`. 

### Result
An example iFrame with fluid spacing within. Resize it to see the change in type scale/size. A fluid change will not happen until the viewport is larger than 480px. 

Note that in Safari, the changes do not happen fluidity but rather in a jumpy sort of way. 

<div style="width: 322px; height:640px; min-width:322px; max-width:150%; resize:horizontal; overflow:auto; position:relative; left:50%; transform:translateX(-50%)">
  <iframe src="{{ site.baseurl }}mixins/sample-fluid/" style="position: relative; z-index:-1; height:100%; width:100%; border: 1px solid #101010"></iframe>
</div>

## Variations
Different projects are, well, different, so there might be some variation in functions/mixins out there. If your project needs to deal with units in CSS Variables, the RISD Publications project has rewritten this to use named declarations instead. Consult with your teammates before recreating some of that work for your own project. 

## Next
We use this concept to drive our Responsive Typography system, so read about [fluid-typography]({{ site.baseurl }}mixins/fluid-type) next. 
