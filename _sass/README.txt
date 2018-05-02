Grey Matter Prototyping
=======================


## greymatter.scss
```bash
assets/css/greymatter.scss
```

The master CSS file that calls all the Bootstrap files and any custom files for 
this project. Jekyll's asset pipeline uses this file to compile CSS and places 
the rendered CSS into `_site/assets/css`. 


## Bootstrap 4.0 Root
```bash
_sass/bootstrap/scss/
```

Grey Matter uses Bootstrap 4.0 as the base theme. The latest supported version 
is included in this repository. If an update is needed, please make the needed 
changes and submit a pull request. 


## Mixins
``bash
_sass/mixins/
```

Only the basic mixins are included here. Oomph includes the ones responsible for
fluid responsive typography resizing and the `maintain-ratio()` set of mixins.


## Autoprefixer

Keep in mind when writing CSS that normal unprefixed CSS3 is preferred. 
Autoprefixer is included in the Jekyll pipeline and will convert code according
to the latest caniuse.com usage tables. 

For more instructions should you desire to change the defaults, see 
[https://github.com/vwochnik/jekyll-autoprefixer](https://github.com/vwochnik/jekyll-autoprefixer)
