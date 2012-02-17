/*
Sticky footer plugin for jQuery
Run on window.load instead of domready, in case any loading images change the page dimensions after domready.
*/

(function( $ ){
	
	var updateFooter = function ($footer_elm, options) {
		var window_height = jQuery(window).height();
        var body_height = jQuery('body').outerHeight();
        var footer_height = $footer_elm.outerHeight();

        if (!$footer_elm.hasClass(options.class) && window_height > body_height) {
            $footer_elm.addClass(options.class);
        }
        else if ($footer_elm.hasClass(options.class) && window_height < body_height + footer_height) {
            $footer_elm.removeClass(options.class);
        }

		$footer_elm.data('stickyFooter', 'initialized');
	};
	
	var methods = {
		init : function (options) {
			//Settings list and the default values
			var defaults = $.fn.stickyFooter.defaults;
			var options = $.extend(defaults, options);
			methods.options = options;

			return this.each(function(){
				data = $(this).data('stickyFooter');
				// If the plugin hasn't been initialized on this element yet
				var $element = $(this);
				if (!data) {
					updateFooter($element, options);
				}
				$(window).bind('resize.stickyFooter', function(event) {
			        updateFooter($element, options);
			    });
				//scroll event in case of lazy loading content (which sucks btw)
			    $(window).bind('scroll.stickyFooter', function(event) {
			        updateFooter($element, options);
			    });
			});

		},
		update: function () {
			this.init(methods.options);
	    },
		destroy: function () {

			return this.each(function(){

				var $this = $(this),
				data = $this.data('stickyFooter');

				$(window).unbind('.stickyFooter');
				$this.removeData('stickyFooter');
				$this.removeClass(methods.options.class);
			})
		}
	};

	$.fn.stickyfoo = function( method ) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || ! method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' +  method + ' does not exist on jQuery.stickyFooter');
    	};
	};
	$.fn.stickyfoo.defaults = {
		class: 'sticky'
	}
	
})( jQuery );

jQuery(window).load(function() {
	jQuery('.site-footer').stickyfoo();
});