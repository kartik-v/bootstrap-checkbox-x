/*!
 * @copyright &copy; Kartik Visweswaran, Krajee.com, 2014 - 2015
 * @version 1.5.3
 *
 * An extended checkbox plugin for bootstrap with three states and additional styles.
 *
 * For more JQuery/Bootstrap plugins and demos visit http://plugins.krajee.com
 * For more Yii related demos visit http://demos.krajee.com
 */
(function ($) {
    "use strict";
    var CheckboxX = function (element, options) {
        var self = this;
        self.$element = $(element);
        self.disabled = self.$element.attr('disabled') || self.$element.attr('readonly');
        self.initialValue = self.$element.val();
        self.init(options);
    };

    CheckboxX.prototype = {
        constructor: CheckboxX,
        init: function (options) {
            var self = this, $el = self.$element, isCbx = $el.is(':checkbox'), val = parseInt($el.val()),
                css = options.inline ? 'cbx-container' : 'cbx-container cbx-block';
            self.options = options;
            self.skipChange = false;
            if (isCbx && val !== 0 && val !== 1) {
                $el.attr('checked', false);
                if (options.threeState) {
                    $el.prop('indeterminate', true);
                }
            }
            if (isCbx && options.useNative) {
                $el.on('change', function () {
                    self.change(false);
                });
                $el.removeClass('cbx-loading');
                self.setCheckboxProp($el.val());
                return;
            }
            if (self.$container === undefined) {
                self.$container = $(document.createElement("div")).addClass(css).html(self.render());
                $el.before(self.$container);
                self.$container.append($el);
                $el.hide();
            }
            else {
                self.$container.before($el);
                self.$container.addClass(css).html(self.render());
                self.$container.append($el);
            }
            $el.removeClass('cbx-loading');
            self.$cbx = self.$container.find('.cbx');
            $el.closest('form').on('reset', function () {
                self.reset();
            });
            self.$cbx.on('click', function () {
                if (!isCbx && !options.enclosedLabel) {
                    self.change(true);
                    return;
                }
                if (!options.enclosedLabel && !options.useNative) {
                    if (options.threeState) {
                        self.change(false);
                    } else {
                        self.skipChange = true;
                        self.change(true);
                    }
                }
            });
            self.$cbx.on('keyup', function (e) {
                if (e.which === 32) {
                    self.change(true);
                    e.preventDefault();
                }
            });
            if (isCbx && !options.useNative) {
                $el.on('change', function () {
                    self.change(false, self.skipChange);
                });
            } else {
                $el.on('click', function () {
                    self.change(false);
                });
            }
        },
        change: function (trigChange) {
            var self = this, $el = self.$element,
                skipTrig = arguments.length > 1 && arguments[1],
                useNative = self.options.useNative, newVal;
            if (self.disabled) {
                return;
            }
            newVal = self.calculate();
            if (!skipTrig) {
                $el.val(newVal);
            }
            if (trigChange && !useNative && !skipTrig) {
                $el.trigger('change');
            } else {
                self.validateCheckbox(useNative, newVal);
            }
            if (!useNative) {
                self.$cbx.html(self.getIndicator());
            }
            if (skipTrig) {
                self.skipChange = false;
            }
        },
        calculate: function () {
            var self = this, $el = self.$element, val = parseInt($el.val()),
                threeState = self.options.threeState;
            if (threeState) {
                return (val === 1 ? null : (val === 0 ? 1 : 0));
            } else {
                return (val === 1 ? 0 : 1);
            }
        },
        validateCheckbox: function (useNative, newVal) {
            var self = this, $el = self.$element, isCbx = $el.is(':checkbox');
            if (!isCbx) {
                $el.trigger('change');
                return;
            }
            self.setCheckboxProp(newVal);
        },
        setCheckboxProp: function (val) {
            var self = this, $el = self.$element, newVal = parseInt(val);
            $el.prop('indeterminate', false).prop('checked', false);
            if (newVal === 1) {
                $el.prop('checked', true);
            } else {
                if (newVal !== 0) {
                    $el.prop('indeterminate', true);
                }
            }
        },
        reset: function () {
            var self = this, $el = self.$element;
            $el.val(self.initialValue);
            self.refresh();
            $el.trigger('checkbox.reset');
        },
        refresh: function (options) {
            var self = this;
            if (arguments.length) {
                self.init($.extend(self.options, options));
            }
            else {
                self.disabled = self.$element.attr('disabled') || self.$element.attr('readonly');
                self.init(self.options);
            }
            self.initialValue = self.$element.val();
        },
        getIndicator: function () {
            var self = this,
                options = self.options,
                icon = options.iconUnchecked,
                val = parseInt(self.$element.val());
            if (val === 1) {
                icon = options.iconChecked;
            }
            else {
                if (val !== 0 && self.options.threeState) {
                    icon = options.iconNull;
                }
            }
            return '<span class="cbx-icon">' + icon + '</span>';
        },
        render: function () {
            var self = this,
                icon = self.getIndicator(),
                size = self.options.size,
                tab = self.disabled || !self.options.tabindex ? '' : ' tabindex="' + self.options.tabindex + '"',
                css = 'cbx cbx-' + size + (self.disabled ? ' cbx-disabled' : ' cbx-active');
            return '<div class="' + css + '"' + tab + '>' + icon + '</div>';
        }
    };

    $.fn.checkboxX = function (option) {
        var args = Array.apply(null, arguments);
        args.shift();
        return this.each(function () {
            var $this = $(this),
                data = $this.data('checkboxX'),
                options = typeof option === 'object' && option;

            if (!data) {
                $this.data('checkboxX',
                    (data = new CheckboxX(this, $.extend({}, $.fn.checkboxX.defaults, options, $(this).data()))));
            }

            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    };

    $.fn.checkboxX.defaults = {
        threeState: true,
        inline: true,
        iconChecked: '<i class="glyphicon glyphicon-ok"></i>',
        iconUnchecked: ' ',
        iconNull: '<div class="cbx-icon-null"></div>',
        size: 'md',
        enclosedLabel: false,
        useNative: false,
        tabindex: 1000
    };

    $.fn.checkboxX.Constructor = CheckboxX;

    $('input[data-toggle="checkbox-x"]').addClass('cbx-loading');

    $(document).ready(function () {
        $('input[data-toggle="checkbox-x"]').checkboxX();
    });
})(window.jQuery);