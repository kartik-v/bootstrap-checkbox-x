Change Log: `bootstrap-checkbox-x`
==================================

## version 1.5.5 (under development)

- enh #38, #41: Use string values instead of integers.
- enh #39: New property `allowThreeValOnInit` for showing third state on init for two state checkboxes.
- enh #42: Display initial value correctly when initializing with checkbox
- enh #43: Add support for `bootstrap-sass` through new `sass` branch.

## version 1.5.4

**Date**: 19-Sep-2015

- (bug #29): Trigger change correctly for threeState input within enclosed label.
- (enh #30): Enhance validation to change checkbox states based on input type and label enclosure.
- (enh #31): Enhance events and implement event namespace `.checkbox`.
- (enh #32): Implement `destroy` method.
- Better bootstrap version dependency.
- (enh #34): Enhancements to support Select Input.
- (enh #35): Configurable values for checked, unchecked and null.
- (enh #36): Include ability to configure themes for styling.

## version 1.5.3

**Date**: 18-Jun-2015

- (enh #22): New configurable property `tabindex`.
- (enh #23): Better styling to prevent block selection for checkbox container & label.
- (enh #24): Styling enhancements for BS contextual states.

## version 1.5.2

**Date**: 10-May-2015

- (bug #15): Fix init issues when checkboxX is initialized on non-checkbox input (e.g. text).
- (enh #16): Styling enhancements for native checkbox to be compatible with Bootstrap v3.3.2+.
- (enh #17): Parse checkbox values correctly using integer comparison.
- (enh #18): Enhancement to checkbox styles to align indicators centered perfectly.
- (enh #19): Better default markup for `iconNull`.
- (enh #20): Validate `click` event for iOS devices.

## version 1.5.1

**Date**: 31-Jan-2015

- (enh #13): Code restructure and formatting to cleanup various lint errors (using JSHint Code cleanup library).
- (enh #14): Implement reusable constructor for extending plugin if needed.

## version 1.5.0

**Date**: 28-Dec-2014

1. (enh #9, #10, #11): Fix validation of checkbox changes for plugin initialization on checkbox inputs:
   - Three State & Two State
       - Non-enclosed labels 
       - Enclosed labels
       - Non-enclosed labels (native)
       - Enclosed labels (native)

## version 1.4.0

**Date**: 08-Nov-2014

1. Set release to stable in composer.json.
2. Updated CHANGE log to reflect user friendly date time formats.

## version 1.3.0

**Date:** 16-Oct-2014

1. (enh #4): Add support for using native tristate checkboxes
2. (enh #5): Add styling for labels similar to bootstrap

## version 1.2.0

**Date:** 15-Oct-2014

1. Removed `labelClickEvent` property.
2. (bug #3): Added `enclosedLabel` property for correct toggling of checkboxes enclosed inside labels.

## version 1.1.0

**Date:** 10-Oct-2014

1. (enh #2): Add `labelClickEvent` property for controlling triggering change event on label click.

## version 1.0.0

**Date:** 12-Jun-2014

Initial release. The following features are included in this release:

1. Enhances any HTML input with `data-toggle=checkbox-x` to an extended checkbox control. 
2. The plugin offers the following three states and values for the checkboxes:
   - `1` or `true`: Checkbox is checked.
   - `0` or `false`: Checkbox is unchecked.
   - `null`: Checkbox is indeterminate.
3. You can set the plugin to allow **three states** or the default **two states** for the checkbox.
4. Specifically uses Bootstrap 3.x styles & glyphs. One can configure the checked, unchecked, and indeterminate icons to be shown for the checkboxes.
5. Special CSS 3 styling, to enhance the control to look like any Bootstrap 3 form control. Supports the `has-error`, `has-success`, `has-warning`
   styling states like other Bootstrap form-controls.
6. Plugin CSS styling automatically defaults the checkboxes to inline display. You can also control the markup for block display like in checkbox lists.
7. You can add a `label` before or after with a `for` attribute and click on the label to change the checkbox values. Alternatively you can enclose the 
   input within a `label` tag as well.
8. Ability to navigate to the checkbox controls via keyboard, and modify the values using the `space` bar on the keyboard.
9. Ability to size the checkbox control. Five prebuilt size templates are available `xl`, `lg`, `md`, `sm`, and `xs`.
10. Triggers JQuery events for advanced development. The plugin automatically triggers the `change` event for the input, whenever the checkbox value is changed via clicking. Events currently available are `change` and  `reset`.
11. Ability to access methods and refresh the input dynamically via javascript at runtime.
12. Disabled and readonly checkbox input support.
13. Size of the entire plugin (JS and CSS) is less than 2KB when minified and gzipped. Its about 6KB when minified without gzipping (about 3KB for the JS and 3KB for the CSS).