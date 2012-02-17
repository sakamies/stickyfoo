/*
Sticky footer plugin for jQuery
Run on window.load instead of domready, in case any loading images change the page dimensions after domready.

by Ville V. Vanninen / http://foolproof.me
*/

(function($) {

  var updateFooter = function ($footer_elm, options) {
    var window_height = jQuery(window).height();
    var body_offset = jQuery('body').offset().top;
    //TODO: figure out how paddings and margins on the body and footer affect calculations
    var body_height = jQuery('body').outerHeight();
    console.log('body.outerHeight: ' + body_height);
    var footer_height = $footer_elm.outerHeight(true);

    if (!$footer_elm.hasClass(options.class) && window_height > body_height) {
      $footer_elm.addClass(options.class);
    }
    else if ($footer_elm.hasClass(options.class) && window_height < body_height + footer_height) {
      $footer_elm.removeClass(options.class);
    }

    var stickyfoo = '.' + $.fn.stickyfoo.defaults.NAMESPACE;
    $footer_elm.data(stickyfoo, 'initialized');
  };

  var methods = {
    init : function (options) {
      //Settings list and the default values
      var defaults = $.fn.stickyfoo.defaults;
      options = $.extend(defaults, options);
      methods.options = options;

      var stickyfoo = '.' + $.fn.stickyfoo.defaults.NAMESPACE;

      return this.each(function(index){
        var data = $(this).data(stickyfoo);
        // If the plugin hasn't been initialized on this element yet
        var $element = $(this);
        if (!data) {
          updateFooter($element, options);
        }
        $(window).bind('resize'+stickyfoo, function(event) {
          updateFooter($element, options);
        });
        //scroll event in case of lazy loading content (which sucks btw)
        $(window).bind('scroll'+stickyfoo, function(event) {
          updateFooter($element, options);
        });
      });

    },
    update: function () {
      this.init(methods.options);
    },
    destroy: function () {

      var stickyfoo = '.' + $.fn.stickyfoo.defaults.NAMESPACE;

      return this.each(function(){

        var $this = $(this),
        data = $this.data(stickyfoo);

        $(window).unbind(stickyfoo);
        $this.removeData(stickyfoo);
        $this.removeClass(methods.options.class);
      });
    }
  };

  $.fn.stickyfoo = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || ! method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' +  method + ' does not exist on jQuery.stickyfoo');
    }
  };
  $.fn.stickyfoo.defaults = {
    class: 'sticky',
    NAMESPACE: 'stickyfoo'
  };

  })( jQuery );
