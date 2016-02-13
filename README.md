bootstrap-checkbox-x
=====================

[![Bower version](https://badge.fury.io/bo/bootstrap-checkbox-x.svg)](http://badge.fury.io/bo/bootstrap-checkbox-x)
[![Stable Version](https://poser.pugx.org/kartik-v/bootstrap-checkbox-x/v/stable)](https://packagist.org/packages/kartik-v/bootstrap-checkbox-x)
[![Unstable Version](https://poser.pugx.org/kartik-v/bootstrap-checkbox-x/v/unstable)](https://packagist.org/packages/kartik-v/bootstrap-checkbox-x)
[![License](https://poser.pugx.org/kartik-v/bootstrap-checkbox-x/license)](https://packagist.org/packages/kartik-v/bootstrap-checkbox-x)
[![Packagist Downloads](https://poser.pugx.org/kartik-v/bootstrap-checkbox-x/downloads)](https://packagist.org/packages/kartik-v/bootstrap-checkbox-x)
[![Monthly Downloads](https://poser.pugx.org/kartik-v/bootstrap-checkbox-x/d/monthly)](https://packagist.org/packages/kartik-v/bootstrap-checkbox-x)

An extended checkbox plugin for Bootstrap built using JQuery, which allows three checkbox states and includes additional styles. The plugin uses Bootstrap markup and CSS 3 styling by default, but it can be overridden with any other CSS markup. It also helps you to fallback to a native checkbox OR display native checkboxes with tristate capability. 

With v1.5.5, the plugin now supports initializing widget on a SELECT input as well (other than a CHECKBOX or TEXT input).

> NOTE: The checkbox plugin stores the values by default as character format (and not boolean format) for checked and unchecked states. This can be overridden by setting `valueChecked`, `valueUnchecked` and `valueNull` properties.

## Features  

1. Enhances any HTML input (preferrably a checkbox or text input) with `data-toggle=checkbox-x` to an extended checkbox control. 
2. The plugin offers the following three states and values for the checkboxes:
   - `'1'`: Checkbox is checked. This value is configurable through `valueChecked` property.
   - `'0'`: Checkbox is unchecked. This value is configurable through `valueUnchecked` property.
   - `''`: Checkbox is indeterminate. This value is configurable through `valueNull` property.
3. You can set the plugin to allow **three states** or the default **two states** for the checkbox.
4. Specifically uses Bootstrap 3.x styles & glyphs. One can configure the checked, unchecked, and indeterminate icons to be shown for the checkboxes.
5. Special CSS 3 styling, to enhance the control to look like any Bootstrap 3 form control. Supports the `has-error`, `has-success`, `has-warning`
   styling states like other Bootstrap form-controls.
6. Plugin CSS styling automatically defaults the checkboxes to inline display. You can also control the markup for block display like in checkbox lists.
7. You can add a `label` before or after with a `for` attribute and click on the label to change the checkbox values. Alternatively you can enclose the 
   input within a `label` tag as well.
8. Ability to navigate to the checkbox controls via keyboard, and modify the values using the `space` bar on the keyboard.
9. Ability to size the checkbox control. Five prebuilt size templates are available `xl`, `lg`, `md`, `sm`, and `xs`.
10. Triggers JQuery events for advanced development. The plugin automatically triggers the `change` event for the input, whenever the checkbox value is changed via clicking. Events currently available are `change` and  `checkbox.reset`.
11. Ability to access methods and refresh the input dynamically via javascript at runtime.
12. Disabled and readonly checkbox input support.
13. Allow third state to be configured (only on init) for two state checkboxes.
14. Added support for displaying native checkboxes with tristate capability. When displaying native checkboxes, the advanced styling offerred by the plugin will not be available.

> NOTE: The latest version of the plugin v1.5.5 has been released. Refer the [CHANGE LOG](https://github.com/kartik-v/bootstrap-checkbox-x/blob/master/CHANGE.md) for details.

## Documentation and Demo

View the [plugin documentation](http://plugins.krajee.com/checkbox-x) and [plugin demos](http://plugins.krajee.com/checkbox-x/demo) at Krajee JQuery plugins. 

## Pre-requisites  

1. [Bootstrap 3.x](http://getbootstrap.com/)
2. Latest [JQuery](http://jquery.com/)
3. Most browsers supporting CSS3 & JQuery. 

> NOTE: You can use the sass branch for installation using bootstrap-sass dependency. The master branch can be used for installation using the default official bootstrap dependency.

## Installation

### Using Bower
You can use the `bower` package manager to install. Run:

    bower install bootstrap-checkbox-x

### Using Composer
You can use the `composer` package manager to install. Either run:

    $ php composer.phar require kartik-v/bootstrap-checkbox-x "@dev"

or add:

    "kartik-v/bootstrap-checkbox-x": "@dev"

to your composer.json file

### Manual Install

You can also manually install the plugin easily to your project. Just download the source [ZIP](https://github.com/kartik-v/bootstrap-checkbox-x/zipball/master) or [TAR ball](https://github.com/kartik-v/bootstrap-checkbox-x/tarball/master) and extract the plugin assets (css and js folders) into your project.

## Usage

Step 1: Load the following assets in your header. 

```html
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
<link href="path/to/css/checkbox-x.min.css" media="all" rel="stylesheet" type="text/css" />
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="path/to/js/checkbox-x.min.js" type="text/javascript"></script>
<!-- optional if you are using themes -->
<link href="path/to/css/theme-krajee-flatblue.min.css" media="all" rel="stylesheet" type="text/css" />
```

If you noticed, you need to load the `jquery.min.js` and `bootstrap.min.css` in addition to the `checkbox-x.min.css` and `checkbox-x.min.js` for
the plugin to work with default settings. Loading the theme file `theme-krajee-flatblue.min.css` is optional and is needed if you want to override the default theme. Read the `theme` property of the plugin for understanding configuration details for themes.

Step 2: Setup your input markup with `data-toggle="checkbox-x"` to automatically initialize the checkbox control
```html
<input id="input-id" value="1" data-toggle="checkbox-x" data-three-state="true" data-size="lg" >
```

Step 3: You can also initialize the plugin on your page using javascript as well, instead of using `data-toggle` attribute as above. For example,

```html
<input id="input-id">
<script>
$(document).on("ready", function() {
    // initialize with defaults
    $("#input-id").checkboxX();

    // with plugin options
    $("#input-id").checkboxX({threeState: true, size:'lg'});
});
</script>
```

The `#input-id` is the identifier for the input on your page, which is hidden automatically by the plugin. 

Alternatively, you can directly call the plugin options by setting data attributes to your input field.

> **Note:** You can add the CSS class `cbx-label` to the labels for your checkbox inputs to style them similar to bootstrap's checkbox labels (with additional enhancements for contextual colors).

## License

**bootstrap-checkbox-x** is released under the BSD 3-Clause License. See the bundled `LICENSE.md` for details.