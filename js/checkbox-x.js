/*!
 * @copyright &copy; Kartik Visweswaran, Krajee.com, 2014
 * @version 1.3.0
 *
 * An extended checkbox plugin for bootstrap with three states and additional styles.
 *
 * For more JQuery/Bootstrap plugins and demos visit http://plugins.krajee.com
 * For more Yii related demos visit http://demos.krajee.com
 */
!function ($) {

    var CheckboxX = function (element, options) {
        var self = this;
        self.$element = $(element);
        self.disabled = self.$element.attr('disabled') || self.$element.attr('readonly');
        self.initialValue = self.$element.val();
        self.init(options);
    }

    CheckboxX.prototype = {
        constructor: CheckboxX,
        init: function (options) {
            var self = this, $el = self.$element,
                css = options.inline ? 'cbx-container' : 'cbx-container cbx-block';
            self.options = options;
            if (options.useNative && $el.is(':checkbox')) {
                $el.on('change', function(e) {
                    self.change(true, true);
                });
                $el.removeClass('cbx-loading');
                return;
            }
            
            if (typeof self.$container == 'undefined') {
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
            $el.closest('form').on('reset', function (e) {
                self.reset();
            });
            self.$cbx.on('click', function(e) {
                if (!options.enclosedLabel) {
                    self.change();
                }
            });
            self.$cbx.on('keyup', function(e) {
                e.which == 32 && self.change();
            });
            $el.on('click', function(e) {
                self.change(true);
            });
        },
        change: function () {
            var self = this, $el = self.$element, flag = arguments.length && arguments[0],
                useNative = arguments.length && arguments[1] === true;
            if (self.disabled) {
                return;
            }
            var options = self.options, val = parseInt($el.val()), newVal, 
                threeState = options.threeState, isCbx = $el.is(':checkbox');
            if (threeState) {
                newVal = val === 1 ? null : (val === 0 ? 1 : 0); 
            } else {
                newVal = val === 1 ? 0 : 1;
            }
            $el.val(newVal);
            if (!flag && !useNative) {
                $el.trigger('change');
            } else {
                if (isCbx) {
                    $el.prop('indeterminate', false);
                    if (newVal === 1) {
                        $el.attr('checked','checked');
                    } else {
                        $el.removeAttr('checked');
                        if (newVal !== 0) {
                            $el.prop('indeterminate', true);
                        }
                    }
                } else {
                    if (!useNative) {
                        $el.trigger('change');
                    }
                }
            }
            if (!useNative) {
                self.$cbx.html(self.getIndicator());
            }
        },
        reset: function () {
            var self = this;
            self.$element.val(self.initialValue);
            self.refresh();
            self.$element.trigger('reset');
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
            else if (val !== 0 && self.options.threeState == true) {
                icon = options.iconNull;
            }
            return icon;
        },
        render: function () {
            var self = this,
                icon = self.getIndicator(),
                size = self.options.size,
                tab = self.disabled ? '' : ' tabindex="1000"',
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
                $this.data('checkboxX', (data = new CheckboxX(this, $.extend({}, $.fn.checkboxX.defaults, options, $(this).data()))));
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
        iconNull: '<i class="glyphicon glyphicon-stop"></i>',
        size: 'md',
        enclosedLabel: false,
        useNative: false
    };

    $('input[data-toggle="checkbox-x"]').addClass('cbx-loading');

    $(document).ready(function () {
        $('input[data-toggle="checkbox-x"]').checkboxX();
    });
}(window.jQuery);